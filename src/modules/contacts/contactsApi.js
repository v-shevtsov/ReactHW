import { CONTACT_URL } from "./constants";
import axios from "axios";

export default axios.create({
    baseURL: CONTACT_URL,
    headers: {
        'Content-Type': 'application/json'
    }
})