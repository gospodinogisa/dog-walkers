const User = require("../models/User")
const bcrypt = require("bcrypt")
const config = require("../config/config")

module.exports = {
    register: (req, res) => {
        const {username, password} = req.body
        bcrypt.hash(password + config.SALT, 10).then((hash) => {
            User.create({username: username, password: hash})
            res.send("user created")
        }).catch(() => res.send("user creation failed"))
    }
}