import AlbumsItem from "./AlbumsItem";
import List from '@material-ui/core/List';
import ListSubheader from '@material-ui/core/ListSubheader';

export default function AlbumsList({albums}) {

    return (
        <List
            spacing={2}
            ml={5}
            subheader={
                <ListSubheader component="div" id="nested-list-subheader">
                    Album List Items
                </ListSubheader>
            }
        >
            {albums.map(item => (
                <AlbumsItem
                    key={item.id}
                    item={item}
                />
            ))}
        </List>
    );
}

