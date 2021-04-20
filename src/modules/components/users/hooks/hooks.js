import api from '../usersAPI'
import { useEffect, useState } from "react";

export function useUsers() {
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

    function createUser(newUser) {
        api.post('', newUser)
            .then(({data}) => setUsers([...users, data]))
    }

    function editUser(editUser) {
        api.put(editUser.id, editUser)
            .then(({data}) => setUsers([...users, data]))
    }

    function deleteUser(id) {
        api.delete('' + id);
        setUsers([...users.filter((item) => item.id !== id)])
    }

    return {
        users,
        setUsers,
        isLoading,
        error,
        createUser,
        editUser,
        deleteUser
    }
}



