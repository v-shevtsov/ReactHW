import React from 'react';
import { Center, Spinner } from "@chakra-ui/react"
import Header from "./Header";
import StickerCards from "./StickersCards";
import { useStickers } from "./hooks";

export default function Stickers() {
    const {status, stickers, deleteStickerItem, changeSticker, createNewSticker} = useStickers();

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