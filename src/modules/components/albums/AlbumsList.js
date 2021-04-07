import { UnorderedList } from "@chakra-ui/react"
import AlbumsItem from "./AlbumsItem";

export default function AlbumsList({albums}) {

    return (
        <UnorderedList
            spacing={2}
            ml={5}
        >
            {albums.map(item => (
                <AlbumsItem
                    key={item.id}
                    item={item}
                />
            ))}
        </UnorderedList>
    );
}

