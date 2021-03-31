import React from 'react';
import ContactListItem from "./ContactListItem";
import { Table, Tbody, Th, Thead, Tr } from "@chakra-ui/react"

export default function ContactTable({list, onDelete}) {
    return (
        <Table variant='striped' colorScheme='teal' size='sm'>
            <Thead>
                <Tr>
                    <Th>Name</Th>
                    <Th>Surname</Th>
                    <Th>Phone</Th>
                    <Th>Action</Th>
                </Tr>
            </Thead>
            <Tbody>
                {list.map(item => (
                    <ContactListItem
                        key={item.id}
                        item={item}
                        onDelete={onDelete}/>
                ))}
            </Tbody>
        </Table>
    );
}
