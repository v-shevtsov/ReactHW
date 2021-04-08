import { ListItem } from "@chakra-ui/react";
import List from "../../ui/components/List";
import { Link } from "react-router-dom";

export default function Dashboard() {

    return (
        <List>
            <ListItem><Link to='/users'>Users</Link></ListItem>
            <ListItem><Link to='/albums'>Albums</Link></ListItem>
        </List>
    )
}