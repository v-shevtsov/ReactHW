import React from 'react';
import TodoListItem from './TodoListItem';
import List from '@material-ui/core/List';
import {connect} from 'react-redux';
import {deleteTodo, toggleTodo} from '../store/actions/actions';

export default function TodoList({list, dispatch}) {
    function onDelete(id) {
        dispatch(deleteTodo(id));
    }

    function onToggle(id) {
        const item = list.find((item) => item.id === id);
        const newItem = {...item, completed: !item.completed};
        dispatch(toggleTodo(newItem));
    }

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

function mapStateToProps(state) {
    return {list: state.list};
}

// export default connect(mapStateToProps)(TodoList);