const {Sequelize} = require('sequelize')
const sequelize = new Sequelize('tuanflute', 'root', null, {
    host: "localhost",
    dialect: "mysql"
})
let connectDB = async () => {
    try {
        await sequelize.authenticate();
        console.log('connect success');
    } catch (error) {
        console.error('connect failure:', error);
    }
}
module.exports = connectDB;