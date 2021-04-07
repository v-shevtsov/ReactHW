import { Td, Tr, } from "@chakra-ui/react"

export default function UserItem({user}) {
    return (
        <Tr>
            <Td>{user.name}</Td>
            <Td>{user.username}</Td>
            <Td>{user.email}</Td>
            <Td>{user.address.city}</Td>
        </Tr>
    )
}