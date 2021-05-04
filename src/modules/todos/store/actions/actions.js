export function setTodo(data) {
    return { type: 'set', payload: data }
}

export function deleteTodo(id) {
    return { type: 'delete', payload: id };
}

export function toggleTodo(newItem) {
    return { type: 'toggle', payload: newItem };
}

export function setStatusLoading() {
    return { type: 'status-loading', payload: 'Loading' };
}

export function setStatusDone() {
    return { type: 'status-loading', payload: 'Done' };
}

export function changeFilter(value) {
    return { type: 'change-filter', payload: value}
}