import React from 'react';
import ListItem from '@material-ui/core/ListItem';

export default function TodoListItem({ item, onDelete, onToggle }) {
    function onItemClick() {
        onToggle(item.id);
    }

    function onDeleteBtnClick(e) {
        e.stopPropagation();

        onDelete(item.id);
    }

    return (
        <ListItem button onClick={onItemClick} style={getItemStyle(item)}>
            {item.title}
            <span onClick={onDeleteBtnClick}>X</span>
        </ListItem>
    );
}


function getItemStyle({completed}) {
    return {
        cursor: 'pointer',
        backgroundColor: completed ? 'green' : 'yellow',
    };
}
