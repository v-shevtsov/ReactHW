import UsersList from "./UsersList";
import Grid from "@material-ui/core/Grid";
import useUsers from "../hooks/useUsers";

export default function Users() {
    // const [users] = useList('users');
    const {users, createUser} = useUsers();


    return (
        <Grid container justify='center'>
            <UsersList
                users={users}
            />
        </Grid>
    )
}
