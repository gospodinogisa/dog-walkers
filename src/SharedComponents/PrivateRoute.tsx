import { FunctionComponent } from "react"
import IRoute from "../interfaces/route"

interface IPrivateRoute {
    route: IRoute;
}

const PrivateRoute: FunctionComponent<IPrivateRoute> = props => {
    return <props.route.component  {...props.route.props} />
}

export default PrivateRoute