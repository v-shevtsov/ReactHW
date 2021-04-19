import TableCell from '@material-ui/core/TableCell';
import CreateIcon from '@material-ui/icons/Create';
import {Link, useRouteMatch} from 'react-router-dom';

export default function UserItem({user, StyledTableRow}) {
    const {url} = useRouteMatch();

    function onChange() {

        console.log(user);
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
                        onClick={onChange}
                    />
                </Link>
            </TableCell>
        </StyledTableRow>
    );
}