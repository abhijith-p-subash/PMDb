
import Axios from "axios";
import {baseUrl} from "../Constant/constant"

const instance = Axios.create({
    baseURL: baseUrl,
});

export default instance;
