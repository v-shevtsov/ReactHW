import { URL_STIKERS } from '../constants';

export function getStickers() {
    return fetch(URL_STIKERS).then(res => res.json());
}