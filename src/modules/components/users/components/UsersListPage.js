import UsersList from "./UsersList";
import Grid from "@material-ui/core/Grid";
import useUsers from "../hooks/useUsers";
import Loading from "../../loading/Loading";

export default function UsersListPage() {
    // const [users] = useList('users');
    const {users, isLoading, error} = useUsers();

    return (
        isLoading
            ? <Loading/>
            : error
            ? <h2 style={{textAlign: "center"}}>Something happened! Please, refresh page!</h2>
            : (
                <Grid container justify='center'>
                    <UsersList
                        users={users}
                    />
                </Grid>
            )
    )
}
