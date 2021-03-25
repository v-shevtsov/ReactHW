import React, { useEffect, useState } from 'react';
import { createSticker, deleteSticker, getStickers, updateSticker } from "../services/stickersService";
import Header from "./Header";
import StickerCards from "./StickersCards";

export default function Stickers() {
    const [stickers, setStickers] = useState([]);

    useEffect(() => {
        getStickers().then(data => {
            setStickers(data);
        })
    }, []);

    function deleteStickerItem(id) {
        deleteSticker(id).then(() => {
            setStickers(stickers.filter(item => item.id !== id));
        })

    }

    function onSave(newSticker) {
        updateSticker(newSticker).then(() => {
            setStickers(stickers.map(sticker =>
                sticker.id === newSticker.id ? newSticker : sticker
            ));
        })
    }

    function createNewSticker(newSticker) {
        createSticker(newSticker).then((data) => {
            setStickers([...stickers, data]);
        })
    }

    return (
        <>
            <Header onCreate={createNewSticker}/>
            <StickerCards
                stickers={stickers}
                onDelete={deleteStickerItem}
                onSave={onSave}
            />
        </>
    )
}