import React from 'react';
import { Icon, Td, Tr } from "@chakra-ui/react"
import { CloseIcon } from '@chakra-ui/icons'

export default function ContactListItem({item, onDelete}) {
    function onDeleteItemClick(e) {
        onDelete(item.id);
    }

    return (
        <Tr>
            <Td>{item.name}</Td>
            <Td>{item.surname}</Td>
            <Td>{item.phone}</Td>
            <Td>
                <Icon
                    style={{cursor: 'pointer'}}
                    as={CloseIcon}
                    onClick={onDeleteItemClick}
                />
            </Td>
        </Tr>
    );
}

