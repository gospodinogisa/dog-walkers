const express = require('express')
const config = require("./config/config")
const usersRoutes = require("./routes/users/usersRoutes")
const i18next = require("i18next")
const i18next_middleware = require("i18next-http-middleware")
const i18next_backed = require("i18next-fs-backend")


i18next.use(i18next_backed).use(i18next_middleware.LanguageDetector)
    .init({
        fallbackLng: "en",
        backend: {
            loadPath: "./locales/{{lng}}/translation.json"
        }
    })

const app = express()
app.use(i18next_middleware.handle(i18next))
app.use(express.json());



const db = require("./database/connection")
db.authenticate().then(() => console.log("connected")).catch(() => console.log("error"))
app.use("/usersRoutes", usersRoutes)

app.listen(config.PORT, () => {
})

const User = require("./models/User")
User.sync()