import { useEffect, useState } from "react";
import axios from "axios";
import { USERS_URL } from "../../Constans";
import UsersList from "./UsersList";

export default function Users() {

    const [users, setUsers] = useState([]);

    useEffect(() => {
        axios.get(USERS_URL).then(({data}) => {
            setUsers(data);
        })}, [])

        return (
            <UsersList users={users}/>
        )
    }
