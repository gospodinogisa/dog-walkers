import { FunctionComponent } from "react"
import IPage from "../../interfaces/page"
import LoginForm from "./Components/LoginForm"


const LoginPage: FunctionComponent<IPage> = (props: IPage) => {

    return <LoginForm></LoginForm>
}

export default LoginPage