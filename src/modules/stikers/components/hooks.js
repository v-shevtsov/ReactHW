import { useEffect } from "react";
import { useAsync } from "../../common/hooks";
import { createSticker, deleteSticker, getStickers, updateSticker } from "../services/stickersService";

export function useStickers() {
    const {status, data: stickers, setData: setStickers, run} = useAsync(() => getStickers())
    useEffect(run, [])

    function deleteStickerItem(id) {
        deleteSticker(id).then(() => {
            setStickers(stickers.filter(item => item.id !== id));
        })
    }

    function changeSticker(newSticker) {
        updateSticker(newSticker).then(() => {
            setStickers(stickers.map(sticker =>
                sticker.id === newSticker.id ? newSticker : sticker
            ))
        })
    }

    function createNewSticker(newSticker) {
        createSticker(newSticker).then((data) => {
            setStickers([...stickers, data]);
        })
    }


    return {
        status,
        stickers,
        setStickers,
        deleteStickerItem,
        changeSticker,
        createNewSticker
    }
}