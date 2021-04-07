import { useEffect, useState } from "react";
import axios from "axios";
import { ALBUMS_URL } from "../../Constans";
import AlbumsList from "./AlbumsList";

export default function Albums() {

    const [albums, setAlbums] = useState([]);

    useEffect(() => {
        axios.get(ALBUMS_URL)
            .then(({data}) =>
                setAlbums(data)
            );
    })

    return (
        <AlbumsList albums={albums}/>
    )
}