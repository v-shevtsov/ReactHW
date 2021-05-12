import api from "../../api";

export const USERS_SET_USERS = 'USERS_SET_USERS';
export const setUsers = payload => ({
    type: USERS_SET_USERS,
    payload
});

export function fetchUsers() {
    return function (dispatch) {
        api.get()
            .then(({ data }) => {
                dispatch(setUsers(data));
            })
    }
}

export const REMOVE_USER_REMOVE = 'REMOVE_USER_REMOVE';
export const removeUser = payload => {
    return (dispatch) => {
        api.delete(payload)
            .then(dispatch({
                type: REMOVE_USER_REMOVE,
                payload
            }))
    }
}
