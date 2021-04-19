import api from '../usersAPI'
import { useEffect, useState } from "react";

export default function useUsers() {
    const [users, setUsers] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect((() => {
        setError(null);
        setIsLoading(true);
        api.get('')
            .then(({data}) => setUsers(data))
            .catch(error => setError(error))
            .finally(() => setIsLoading(false));
    }), []);


    const createUser = newItem => {
        api.post('', newItem)
            .then(({data}) => setUsers([...users, data]))
    }

    return {
        users,
        setUsers,
        isLoading,
        error,
        createUser,
    }
}



