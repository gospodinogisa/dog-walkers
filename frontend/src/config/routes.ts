import IRoute from "../interfaces/route"
import HomePage from "../pages/HomePage/Components/HomePage"
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
    },
    {
        index: 2,
        path: "/",
        component: HomePage
    }
]

export default routes