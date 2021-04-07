import { ListItem } from "@chakra-ui/react";

export default function AlbumsItem({item}) {
    return (
           <ListItem>
               {item.title}
           </ListItem>
    );
}

