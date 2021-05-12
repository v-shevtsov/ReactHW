import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@material-ui/core";
import Paper from '@material-ui/core/Paper';
import ListItem from "./ListItem";

function UsersList({ list, removeUser, setAlert }) {
    return (
        <TableContainer component={Paper} aria-label="users">
            <Table size="medium">
                <TableHead>
                    <TableRow>
                        <TableCell align='center'>#</TableCell>
                        <TableCell align='center'>Name</TableCell>
                        <TableCell align='center'>Surname</TableCell>
                        <TableCell align='center'>Phone</TableCell>
                        <TableCell align='right'>Delete</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {list.map(item => (
                        <ListItem
                            key={item.id}
                            user={item}
                            removeUser={removeUser}
                            setAlert={setAlert}
                        />
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}

export default UsersList;