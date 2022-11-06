import { useState } from "react"
import {handleInputChange} from "../../../helpers/formDataHelper"
import IRegisterUser from "../../../interfaces/user"
import useUserApiService from "../../../apiClient/userApiService"
import { useNavigate } from "react-router-dom"

const InitRegistrationFormLogic = () => {
    const [user, setUser] = useState<IRegisterUser>({
        email: "",
        username: "",
        password: ""
    })
    const {registerUser} = useUserApiService()
    const navigate = useNavigate()

    const handleChange = (event: React.FormEvent<HTMLInputElement>) => {
        setUser(handleInputChange(event, { ...user }));
    }

    const register = () => {
        registerUser(user).then((response) => {
            navigate("/")
        }).catch(error => {
            console.log(error)
        })
    }

    return {handleChange, register}
}

export default InitRegistrationFormLogic