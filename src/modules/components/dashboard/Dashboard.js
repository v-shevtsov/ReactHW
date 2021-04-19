import CustomRouterLink from "../../ui/components/CustomRouterLink";
import ListItem from "@material-ui/core/ListItem";
import List from "@material-ui/core/List";
import Grid from "@material-ui/core/Grid";

export default function Dashboard() {

    return (
        <Grid container justify='center'>
            <Grid item>
                <List>
                    <ListItem><CustomRouterLink to='/users'>Users</CustomRouterLink></ListItem>
                    <ListItem><CustomRouterLink to='/albums'>Albums</CustomRouterLink></ListItem>
                </List>
            </Grid>
        </Grid>
    )
}