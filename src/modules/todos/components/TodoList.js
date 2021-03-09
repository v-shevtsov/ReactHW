import React, { Component } from 'react';
import TodoListItem from "./TodoListItem";

class TodoList extends Component {
    render() {
        return (
            <ul>
                {this.props.list.map(item => (
                    <TodoListItem
                        key={item.id}
                        item={item}
                        onToggle={this.props.onToggle}
                        onDelete={this.props.onDelete}/>
                        ))}
            </ul>
        );
    }
}

export default TodoList;