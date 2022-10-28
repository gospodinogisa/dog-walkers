import { FC } from "react";
import IPage from "./page";


export default interface IRoute {
    index: number;
    path: string;
    component: FC<IPage>;
    props?: any;
}