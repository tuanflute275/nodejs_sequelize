import bcrypt from 'bcryptjs'
import db from '../models/index'
const salt = bcrypt.genSaltSync(10)

let createNewUser = async (data) => {
    return new Promise(async(resolve,reject)=>{
        try {
            let hasPasswordFromBcrypt = await hasUserPassword(data.password)
            await db.User.create({
                email: data.email,
                password: hasPasswordFromBcrypt,
                firstName: data.firstName,
                lastName: data.lastName,
                address: data.address,
                phoneNumber:data.phoneNumber,
                // gender: data.gender === '1'?true:false,
                // roleId: data.roleId,
            })
            resolve('ok create')
        } catch (err) {
            reject(err)
        }
    })
}

/*
Ví dụ về ORM: Để tạo 1 người dùng vào bảng Users, thông thường, với câu lệnh SQL, chúng ta sẽ cần phải viết là :
INSERT INTO table_name (column1, column2, column3, ...)
VALUES (value1, value2, value3, ...);

Còn với ORM, chúng ta sẽ viết là: User.create() . Nó đơn giản và ngắn gọn hơn rất nhiều.
*/

let hasUserPassword = (password) => {
    return new Promise(async (resolve, reject) => {
        try {
            let hasPassword = await bcrypt.hashSync(password, salt)
            resolve(hasPassword)
        } catch (err) {
            reject(err)
        }
    })
}
module.exports = {
    createNewUser: createNewUser
}