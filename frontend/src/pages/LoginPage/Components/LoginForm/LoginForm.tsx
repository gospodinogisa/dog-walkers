
import {t} from "i18next"
import GoogleLogin from "react-google-login"
import { Link } from "react-router-dom"
import InputShared from "../../../../SharedComponents/InputShared/InputShared"
import styles from "./style.module.css"
const LoginForm = () =>{

    return (
        <div className={styles.formContainer}>
            <form className={styles.loginForm}>
                <div className={styles.title}>
                    <h3><>{t("Sign in")}</></h3>
                </div>
                <InputShared labelText={`${t("Username")}:`} placeholder={`${t("Username")}`} name="username" type="text" />
                <InputShared labelText={`${t("Password")}:`} placeholder={`${t("Password")}`} name="password" type="password" />
                <button className={styles.forgot__password}>{`${t("Forgot password")}?`}</button>
                <button type="button" className={styles.login__button}>{t("Sign in")}</button>

                
            <div className={styles.divider}>
                <div></div>
                <span>{t("or")}</span>
                <div></div>
            </div>

                <GoogleLogin clientId="" className={styles.google__button}></GoogleLogin>
                <p>{("Not a member?")} <Link to={"/register"}>{t("Become one")}</Link></p>
            </form>
        </div>
    )
}

export default LoginForm