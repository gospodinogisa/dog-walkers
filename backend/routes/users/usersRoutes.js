const express = require("express")
const router = express.Router()
const {register, login} = require("../../controllers/userController")


router.get("/users", (req, res) => {
    res.send({data: "useri"})
})

router.post("/register", register)
router.post("/login", login)


module.exports = router