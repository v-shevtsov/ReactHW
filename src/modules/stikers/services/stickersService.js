import { URL_STICKERS } from '../constants';

export function getStickers() {
    return fetch(URL_STICKERS).then(res => res.json());
}

export function deleteSticker(id) {
    return fetch(URL_STICKERS + id, {
        method: 'DELETE'
    }).then((res) => res.json())
}

export function updateSticker(newSticker) {
    return fetch(URL_STICKERS + newSticker.id, {
        method: 'PUT',
        body: JSON.stringify(newSticker),
        headers: {
            'Content-Type': 'application/json'
        }
    }).then((res) => res.json);
}

export function createSticker(newSticker) {
    return fetch(URL_STICKERS, {
        method: 'POST',
        body: JSON.stringify(newSticker),
        headers: {
            'Content-Type': 'application/json'
        }
    }).then(res => res.json());
}