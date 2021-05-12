import { REMOVE_USER_REMOVE, USERS_SET_USERS } from "../actions/actions";

const INITIAL_STATE = { users: [] };

export default function usersReducer(state = INITIAL_STATE, { type, payload }) {
    switch (type) {
        case USERS_SET_USERS:
            return {
                ...state,
                users: payload
            }
        case REMOVE_USER_REMOVE:
            return {
                ...state,
                users: state.users.filter((item) => item.id !== payload)
            }
        default:
            return state;
    }
}