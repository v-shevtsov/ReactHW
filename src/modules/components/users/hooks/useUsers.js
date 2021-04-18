import api from '../usersAPI'
import { useEffect, useState } from "react";

export default function useUsers() {
    const [users, setUsers] = useState([]);

    useEffect((() => {
        api.get()
            .then(({data}) => setUsers(data))
    }), []);


    const createUser = newItem => {
        api.post('', newItem)
            .then(({data}) => setUsers([...users, data]))
    }

    return {
        users,
        setUsers,
        createUser
    }
}