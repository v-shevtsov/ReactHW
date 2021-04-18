import TableCell from "@material-ui/core/TableCell";
import CreateIcon from '@material-ui/icons/Create';

export default function UserItem({user, StyledTableRow}) {
    return (
        <StyledTableRow>
            <TableCell>{user.name}</TableCell>
            <TableCell>{user.phone}</TableCell>
            <TableCell>{user.email}</TableCell>
            <TableCell><CreateIcon /></TableCell>
        </StyledTableRow>
    )
}