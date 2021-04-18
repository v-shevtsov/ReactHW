import axios from "axios";

const USERS_URL = 'https://5dd3d5ba8b5e080014dc4bfa.mockapi.io/users/';

export default axios.create({
    baseURL: USERS_URL,
    headers: {
        'Content-Type': 'application/json'
    }
})