import { t } from "i18next"
import GoogleLogin from "react-google-login"
import { Link } from "react-router-dom"
import InputShared from "../../../SharedComponents/InputShared/InputShared"
import InitRegistrationFormLogic from "./RegistrationForm.logic"
import styles from "./style.module.css"

const RegistrationForm = () => {
    const {handleChange, register} = InitRegistrationFormLogic()
    
    return (
        <div className={styles.formContainer}>
        <form className={styles.registrationForm}>
            <div className={styles.title}>
                <h3><>{t("Sign up")}</></h3>
            </div>
            <InputShared labelText={`${t("Email")}:`} placeholder={`${t("Email")}`} name="email" type="email" onChange={handleChange}/>
            <InputShared labelText={`${t("Username")}:`} placeholder={`${t("Username")}`} name="username" type="text" onChange={handleChange}/>
            <InputShared labelText={`${t("Password")}:`} placeholder={`${t("Password")}`} name="password" type="password" onChange={handleChange}/>
            <button type="button" className={styles.registerButton} onClick={register}>{t("Sign up")}</button>

            
        <div className={styles.divider}>
            <div></div>
            <span>{t("or")}</span>
            <div></div>
        </div>

            {/* <GoogleLogin clientId="" className={styles.google__button}></GoogleLogin> */}
            <p>{("Already a member?")} <Link to={"/login"}>{t("Sign in")}</Link></p>
        </form>
    </div>
    )
}

export default RegistrationForm