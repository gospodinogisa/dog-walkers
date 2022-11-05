import IRoute from "../interfaces/route"
import LoginPage from "../pages/LoginPage/LoginPage"
import RegistrationPage from "../pages/RegistrationPage/RegistrationPage"


const routes: IRoute[] = [
    {
        index: 0,
        path: "/login",
        component: LoginPage,
    },
    {
        index: 1,
        path: "/register",
        component: RegistrationPage
    }
]

export default routes