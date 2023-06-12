import db from '../models/index'
import CRUDServices from '../services/CRUDservices'
let getHomePage = async (req, res) => {
    try {
        let data = await db.User.findAll()
        return res.render('index.ejs',{data:data})
    } catch (err) {
        console.log(err);
    }
}
let createUser = async (req, res)=> {
    await CRUDServices.createNewUser(req.body)
    return res.redirect('/')
}



module.exports = {
    getHomePage,createUser
}