import React from 'react';
import ContactListItem from "./ContactListItem";
import { Table, Tbody, Th, Thead, Tr } from "@chakra-ui/react"
import { useTheme } from "../hooks/useContacts";

export default function ContactTable({list, onDelete}) {
    const {theme} = useTheme();

    return (
        <Table variant='striped' colorScheme={theme} size='sm'>
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
