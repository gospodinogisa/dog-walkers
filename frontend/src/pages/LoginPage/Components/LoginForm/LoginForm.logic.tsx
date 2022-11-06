import { useState } from "react"
import ILoginUser from "../../../../interfaces/loginUser"
import { handleInputChange } from "../../../../helpers/formDataHelper"
import useUserApiService from "../../../../apiClient/userApiService"
import { useNavigate } from "react-router-dom"

const InitLoginFormLogic = () => {
    const {loginUser} = useUserApiService()
    const navigate = useNavigate()
    const [user, setUser] = useState<ILoginUser>({
        username: "",
        password: ""
    })

    const handleChange = (event: React.FormEvent<HTMLInputElement>) => {
        setUser(handleInputChange(event, { ...user }));
    }

    const login = () => {
        loginUser(user).then(response => {
            navigate("/")
        }).catch(error => {
            console.log(error)
        })
    }

    return {handleChange, login}
} 

export default InitLoginFormLogic