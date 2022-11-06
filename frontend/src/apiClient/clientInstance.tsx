import axios from "axios";
import Config from "../config/config";

const clientInstance = axios.create(
    {
        baseURL: Config.defaults.apiUrl
    }
)

export default clientInstance