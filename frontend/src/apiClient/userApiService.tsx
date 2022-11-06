import ILoginUser from "../interfaces/loginUser"
import IRegisterUser from "../interfaces/user"
import clientInstance from "./clientInstance"

const useUserApiService = () => {
    const registerUser = (user: IRegisterUser) => 
        clientInstance.post("/users/register", user)

    const loginUser = (user: ILoginUser) =>
        clientInstance.post("/users/login", user)

    return {registerUser, loginUser}
}

export default useUserApiService