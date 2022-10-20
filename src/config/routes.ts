import IRoute from "../interfaces/route"
import LoginPage from "../pages/LoginPage/LoginPage"


const routes: IRoute[] = [
    {
        index: 0,
        path: "/",
        component: LoginPage,
    }
]

export default routes