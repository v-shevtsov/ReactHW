import React, { useEffect, useState } from 'react';
import { Center, Spinner } from "@chakra-ui/react"
import { createSticker, deleteSticker, getStickers, updateSticker } from "../services/stickersService";
import Header from "./Header";
import StickerCards from "./StickersCards";
import { useAsync } from "../hooks";

export default function Stickers() {
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

    return (
        <>
            <Header onCreate={createNewSticker}/>
            {status === 'pending' ? (
                <Center mt='5'>
                    <Spinner
                        thickness="4px"
                        speed="0.65s"
                        emptyColor="gray.200"
                        color="blue.500"
                        size="xl"
                    />
                </Center>
            ) : status === 'success' ? (
                <StickerCards
                    stickers={stickers}
                    onDelete={deleteStickerItem}
                    onSave={changeSticker}
                />
            ) : (<p>Sorry! We have some problem with your request. Please try again</p>)
            }
        </>
    )
}