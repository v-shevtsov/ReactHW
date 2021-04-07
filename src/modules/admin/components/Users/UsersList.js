import UserItem from "./UserItem";
import { Table, Tbody, Th, Thead, Tr, } from "@chakra-ui/react"

export default function UsersList({users}) {
    console.log(users)

    return (
        <Table variant='striped' colorScheme='green'>
            <Thead>
                <Tr>
                    <Th>Name</Th>
                    <Th>Username</Th>
                    <Th>Email</Th>
                    <Th>City</Th>
                </Tr>
            </Thead>
            <Tbody>
                {users.map((user) => (
                    <UserItem
                        key={user.id}
                        user={user}
                    />
                ))
                }
            </Tbody>
        </Table>
    )
}