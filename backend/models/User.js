const db = require("../database/connection")
const {Sequelize} = require("sequelize")

module.exports = db.define("User", {
    id: {
        type: Sequelize.INTEGER(11),
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
    } ,
    username: Sequelize.STRING(50),
    password: Sequelize.STRING(300)
})