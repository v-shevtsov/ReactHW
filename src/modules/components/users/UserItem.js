import TableCell from "@material-ui/core/TableCell";

export default function UserItem({user, StyledTableRow}) {
    return (
        <StyledTableRow>
            <TableCell>{user.name}</TableCell>
            <TableCell>{user.username}</TableCell>
            <TableCell>{user.email}</TableCell>
            <TableCell>{user.address.city}</TableCell>
        </StyledTableRow>
    )
}