import AlbumsList from "./AlbumsList";
import useList from "../../common/hooks/hooks";

export default function Albums() {

    const [albums] = useList('albums');

    return (
        <AlbumsList albums={albums}/>
    )
}