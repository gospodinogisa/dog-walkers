import { FunctionComponent } from "react"
import IPage from "../../interfaces/page"
import RegistrationForm from "./Components/RegistrationForm"

const RegistrationPage: FunctionComponent<IPage> = (props: IPage) => {
    return <RegistrationForm></RegistrationForm>
}

export default RegistrationPage