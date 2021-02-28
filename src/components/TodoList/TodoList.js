import React, { Component } from 'react';
import './TodoList.css';

class TodoList extends Component {
    constructor(props) {
        super(props);
        this.todos = props.todos;
    }

    listItem = (id, title, completed) => {
        const completedClass = completed ? 'completed' : 'non-completed';

        return <li key={id.toString()} className={completedClass}>{title}</li>
    }

    render() {
        return (
            <ul>
                {this.todos.map(({id, title, completed}) => {
                    return this.listItem(id, title, completed)
                })}
            </ul>
        );
    }
}

export default TodoList;