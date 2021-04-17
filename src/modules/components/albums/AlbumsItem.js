import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from "@material-ui/core/ListItemIcon";
import AdjustIcon from '@material-ui/icons/Adjust';

export default function AlbumsItem({item}) {
    return (
        <ListItem>
            <ListItemIcon>
                <AdjustIcon fontSize="small"/>
            </ListItemIcon>
            {item.title}
        </ListItem>
    );
}

