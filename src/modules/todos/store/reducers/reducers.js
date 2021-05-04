const INITIAL_STATE = {
    list: [
        {
            id: 1,
            title: 'From redux',
            isDone: false
        },
        {
            id: 2,
            title: 'From redux2',
            isDone: true
        }
    ],
    status: 'Idle',
    filter: 'all'
};

export default function reducer(state = INITIAL_STATE, {type, payload}) {
    switch (type) {
        case 'set':
            return {...state, list: payload};
        case 'delete':
            return {
                ...state,
                list: state.list.filter((item) => item.id !== payload)
            };
        case 'toggle':
            return {
                ...state,
                list: state.list.map((item) => item.id === payload.id ? payload : item)
            };
        case 'status-loading':
            return {...state, status: payload};
        case 'change-filter':
            return {...state, filter: payload};
        default:
            return state;
    }
}