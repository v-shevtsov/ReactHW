import UserItem from './UserItem';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import { withStyles } from '@material-ui/core/styles';
import { Link, useRouteMatch } from 'react-router-dom';
import ControlPointIcon from '@material-ui/icons/ControlPoint';

export default function UsersList({users, onDelete}) {
    const {path} = useRouteMatch();

    const StyledTableCell = withStyles((theme) => ({
        head: {
            backgroundColor: theme.palette.background.default,
            color: theme.palette.common.black
        }
    }))(TableCell);

    const StyledTableRow = withStyles((theme) => ({
        root: {
            '&:nth-of-type(odd)': {
                backgroundColor: theme.palette.action.hover
            }
        }
    }))(TableRow);

    return (
        <Table>
            <TableHead>
                <TableRow>
                    <StyledTableCell>Name</StyledTableCell>
                    <StyledTableCell>Phone</StyledTableCell>
                    <StyledTableCell>Email</StyledTableCell>
                    <StyledTableCell>
                        <Link to={path + 'form'}>
                            <ControlPointIcon/>
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
                        onDelete={onDelete}
                    />
                ))
                }
            </TableBody>
        </Table>
    );
}