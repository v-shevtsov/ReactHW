import React from 'react';

export default function TodoListItem({ item, onDelete, onToggle }) {
    function onItemClick() {
        onToggle(item.id);
    }

    function onDeleteBtnClick(e) {
        e.stopPropagation();

        onDelete(item.id);
    }

    return (
        <li onClick={onItemClick} style={getItemStyle(item)}>
            {item.title}
            <span onClick={onDeleteBtnClick}>X</span>
        </li>
    );
}


function getItemStyle({completed}) {
    return {
        cursor: 'pointer',
        backgroundColor: completed ? 'green' : 'yellow',
    };
}
