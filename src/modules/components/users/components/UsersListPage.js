import UsersList from "./UsersList";
import Grid from "@material-ui/core/Grid";
import { useUsers } from "../hooks/hooks";
import Loading from "../../loading/Loading";

export default function UsersListPage() {
    const {users, isLoading, error, deleteUser} = useUsers();

    return (
        isLoading
            ? <Loading/>
            : error
            ? <h2 style={{textAlign: "center"}}>Something happened! Please, refresh page!</h2>
            : (
                <Grid container justify='center'>
                    <UsersList
                        users={users}
                        onDelete={deleteUser}
                    />
                </Grid>
            )
    )
}
