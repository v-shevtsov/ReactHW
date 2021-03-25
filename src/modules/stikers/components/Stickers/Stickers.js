import React, { useEffect, useState } from 'react';
import { getStickers } from "../../services/stickersService";
import Header from "../Header/Header";
import StickerCards from "../StickersCards";

export default function Stickers() {
    const [stickers, setStickers] = useState([]);

    useEffect(() => {
        getStickers().then(data => {
            setStickers(data);
        })
    }, []);


    return (
        <>
            <Header/>
            <StickerCards/>
        </>
    )
}