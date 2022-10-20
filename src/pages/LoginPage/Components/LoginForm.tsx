import { t } from "i18next"

const LoginForm = () =>{

    return (
        <div>
            <form>
                <label htmlFor={"username"}><>{t("Username")}</></label>
                <input type="text" name="username"></input>
            </form>
        </div>
    )
}

export default LoginForm