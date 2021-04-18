import UserItem from "./UserItem";
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import { withStyles } from '@material-ui/core/styles';
import ControlPointIcon from '@material-ui/icons/ControlPoint';
import { Button } from "@material-ui/core";
import { Link } from "react-router-dom";

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

    function showForm() {
        console.log('Show Form')
    }

    return (
        <Table>
            <TableHead>
                <TableRow>
                    <StyledTableCell>Name</StyledTableCell>
                    <StyledTableCell>Phone</StyledTableCell>
                    <StyledTableCell>Email</StyledTableCell>
                    <StyledTableCell>
                        <Link to=''>
                            <ControlPointIcon onClick={showForm}/>
                        </Link>
                    </StyledTableCell>
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