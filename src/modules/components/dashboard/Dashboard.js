import { Center, ListItem, UnorderedList } from "@chakra-ui/react";

export default function Dashboard() {

    return (
        <Center mt='5'>
            <UnorderedList>
                <ListItem><a href='/users'>Users</a></ListItem>
                <ListItem><a href='/albums'>Albums</a></ListItem>
            </UnorderedList>
        </Center>
    )
}