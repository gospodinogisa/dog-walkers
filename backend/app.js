const express = require('express')
const config = require("./config/config")
const app = express()
const usersRoutes = require("./routes/users/usersRoutes")

app.use(express.json());

const db = require("./database/connection")
db.authenticate().then(() => console.log("connected")).catch(() => console.log("error"))
app.use("/usersRoutes", usersRoutes)

app.listen(config.PORT, () => {
    console.log("server is listening")
})

const User = require("./models/User")
User.sync()