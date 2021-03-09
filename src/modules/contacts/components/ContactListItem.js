import React, { Component } from 'react';
import { Td, Tr } from "@chakra-ui/react"

export default class ContactListItem extends Component {
    onItemClick = (e) => {
        this.props.onToggle(this.props.item.id);
    }

    onDeleteItemClick = (e) => {
        e.stopPropagation();

        this.props.onDelete(this.props.item.id);
    }

    render() {
        const {item} = this.props;

        return (
            <Tr>
                <Td>{item.name}</Td>
                <Td>{item.surname}</Td>
                <Td>{item.phone}</Td>
                <Td onClick={this.onDeleteItemClick}>X</Td>
            </Tr>
        );
    }
}

