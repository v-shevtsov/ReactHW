import React, { Component } from 'react';
import ContactListItem from "./ContactListItem";
import { Table, Tbody, Th, Thead, Tr } from "@chakra-ui/react"

class ContactTable extends Component {
    render() {
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
                    {this.props.list.map(item => (
                        <ContactListItem
                            key={item.id}
                            item={item}
                            onToggle={this.props.onToggle}
                            onDelete={this.props.onDelete}/>
                    ))}
                </Tbody>
            </Table>
        );
    }
}

export default ContactTable;