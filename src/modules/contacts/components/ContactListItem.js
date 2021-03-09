import React, { Component } from 'react';
import { Td, Tr } from "@chakra-ui/react"
import { Icon } from "@chakra-ui/react"
import { CloseIcon } from '@chakra-ui/icons'

export default class ContactListItem extends Component {
    onDeleteItemClick = (e) => {
        this.props.onDelete(this.props.item.id);
    }

    render() {
        const {item} = this.props;

        return (
            <Tr>
                <Td>{item.name}</Td>
                <Td>{item.surname}</Td>
                <Td>{item.phone}</Td>
                <Td>
                    <Icon
                        style={{cursor: 'pointer'}}
                        as={CloseIcon}
                        onClick={this.onDeleteItemClick}
                    />
                </Td>
            </Tr>
        );
    }
}

