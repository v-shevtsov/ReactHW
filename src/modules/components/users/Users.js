import UsersList from "./UsersList";
import useList from "../../common/hooks/hooks";
import Grid from "@material-ui/core/Grid";

export default function Users() {
    const [users] = useList('users');

    return (
        <Grid container justify='center' m={5}>
            <UsersList users={users}/>
        </Grid>
    )
}
