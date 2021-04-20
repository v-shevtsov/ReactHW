import TableCell from '@material-ui/core/TableCell';
import CreateIcon from '@material-ui/icons/Create';
import DeleteIcon from '@material-ui/icons/Delete';
import { Link, useRouteMatch } from 'react-router-dom';
import { Button } from "@material-ui/core";

export default function UserItem({user, StyledTableRow, onDelete}) {
    const {url} = useRouteMatch();

    function onDeleteItem() {
        onDelete(user.id)
    }

    return (
        <StyledTableRow>
            <TableCell>{user.name}</TableCell>
            <TableCell>{user.phone}</TableCell>
            <TableCell>{user.email}</TableCell>
            <TableCell>
                <Link to={url + '/' + user.id}>
                    <CreateIcon
                        style={{cursor: 'pointer'}}
                    />
                </Link>
                <Button>
                    <DeleteIcon onClick={onDeleteItem}/>
                </Button>
            </TableCell>
        </StyledTableRow>
    );
}