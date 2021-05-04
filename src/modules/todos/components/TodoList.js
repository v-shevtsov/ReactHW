import React from 'react';
import TodoListItem from './TodoListItem';
import List from '@material-ui/core/List';

export default function TodoList({list, onToggle, onDelete}) {

    return (
        <List>
            {list.map((item) => (
                <TodoListItem
                    key={item.id}
                    item={item}
                    onToggle={onToggle}
                    onDelete={onDelete}
                />
            ))}
        </List>
    );
}
