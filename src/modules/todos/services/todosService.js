import { CONTACT_URL } from "../constants";

export function getTodos() {
    return fetch(CONTACT_URL).then(response => response.json());
}

export function updateTodo(newItem) {
    return fetch(CONTACT_URL + newItem.id, {
        method: 'PUT',
        body: JSON.stringify(newItem),
        headers: {
            'Content-Type': 'application/json'
        }
    }).then(response => response.json());
}

export function deleteTodo(id) {
    return fetch(CONTACT_URL + id, {
        method: 'DELETE'
    }).then(response => response.json());
}

export function createTodo(newItem) {
    return fetch(CONTACT_URL, {
        method: 'POST',
        body: JSON.stringify(newItem),
        headers: {
            'Content-Type': 'application/json'
        }
    }).then(response => response.json())
}