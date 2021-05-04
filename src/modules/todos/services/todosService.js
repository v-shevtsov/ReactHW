import { TODOS_URL } from '../constants';

export function getTodos(searchString) {
    const query = searchString ? '?title=' + searchString : '';
    return fetch(TODOS_URL + query).then((res) => res.json());
}