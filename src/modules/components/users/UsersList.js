import UserItem from "./UserItem";
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import { withStyles } from '@material-ui/core/styles';

export default function UsersList({users}) {

    const StyledTableCell = withStyles((theme) => ({
        head: {
            backgroundColor: theme.palette.background.default,
            color: theme.palette.common.black,
        }
    }))(TableCell);

    const StyledTableRow = withStyles((theme) => ({
        root: {
            '&:nth-of-type(odd)': {
                backgroundColor: theme.palette.action.hover,
            },
        },
    }))(TableRow);

    return (
        <Table>
            <TableHead>
                <TableRow>
                    <StyledTableCell>Name</StyledTableCell>
                    <StyledTableCell>Username</StyledTableCell>
                    <StyledTableCell>Email</StyledTableCell>
                    <StyledTableCell>City</StyledTableCell>
                </TableRow>
            </TableHead>
            <TableBody>
                {users.map((user) => (
                    <UserItem
                        key={user.id}
                        user={user}
                        StyledTableRow={StyledTableRow}
                    />
                ))
                }
            </TableBody>
        </Table>
    )
}