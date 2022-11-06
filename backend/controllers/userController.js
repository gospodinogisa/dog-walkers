const User = require("../models/User")
const bcrypt = require("bcrypt")
const config = require("../config/config")
const jwt = require('jsonwebtoken');

    exports.register = async (req, res) => {
        const {email, username, password} = req.body
        const existingUser = await User.findOne({where: {email: email}})
        if(existingUser) return res.status(409).send(req.t("email_exists"))

        bcrypt.hash(`${password}${config.SALT}`, 10).then(async (hash) => {
            const token = jwt.sign({username: username, email: email}, config.TOKEN_KEY)
            await User.create({email: email, username: username, password: hash, token: token})

            res.status(201).send({msg: req.t("user_create_success"), token: token})
        }).catch((error) => res.status(400).send(error))
    }
    
    exports.login = async (req, res) => {
        const {username, password} = req.body
        const existingUser = await User.findOne({where: {username: username}})
        if(existingUser) bcrypt.compare(`${password}${config.SALT}`, existingUser.password).then( (hash) => {
            res.status(200).send(req.t("login_success"))
        }).catch((error) => res.status(400).send(error))
    }
