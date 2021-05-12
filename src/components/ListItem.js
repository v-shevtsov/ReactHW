import React from 'react';
import { TableCell } from "@material-ui/core";
import { StyledTableRow } from "../ui/components/StyledTableRow";
import DeleteIcon from '@material-ui/icons/Delete';

function ListItem({ user, removeUser, setAlert }) {

    function onDelete(e) {
        e.stopPropagation();
        removeUser(user.id);
        setAlert(true);
        setTimeout(() => setAlert(false), 2000);
    }

    return (
        <StyledTableRow>
            <TableCell align='center'>{user.id}</TableCell>
            <TableCell align='center'>{user.name}</TableCell>
            <TableCell align='center'>{user.surname}</TableCell>
            <TableCell align='center'>{user.phone}</TableCell>
            <TableCell
                align='right'
                onClick={onDelete}
            ><DeleteIcon/>
            </TableCell>
        </StyledTableRow>
    );
}

export default ListItem;