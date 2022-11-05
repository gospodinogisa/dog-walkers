const express = require("express")
const router = express.Router()
const userController = require("../../controllers/userController")


router.get("/users", (req, res) => {
    res.send({data: "useri"})
})

router.post("/register", userController.register)


module.exports = router