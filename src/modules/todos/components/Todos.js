import React, { Component } from 'react';
import TodoList from "./TodoList";
import TodoForm from "./TodoForm";
import { createTodo, deleteTodo, getTodos, updateTodo } from "../services/todosService";


class Todos extends Component {
    state = {
        list: []
    }

    // async componentDidMount() {
    //     const response = await fetch(CONTACT_URL);
    //     const list = await response.json();
    //     this.setState({list})
    // }

    componentDidMount() {
        getTodos().then(list => this.setState({list}))

    }

    toggleItem = id => {
        const item = this.state.list.find(item => item.id === id);
        const newItem = {...item, completed: !item.completed};

        updateTodo(newItem).then(() => {
            this.setState({
                list: this.state.list.map(item => item.id !== id ? item : newItem)
            })
        })
    }

    deleteItem = (id) => {
        deleteTodo(id);

        this.setState({
            list: this.state.list.filter(item => item.id !== id)
        })
    }

    createItem = (newItem) => {
        createTodo(newItem).then(data => {
            this.setState({list: [...this.state.list, data]})
        })

    }

    render() {
        return (
            <>
                <TodoList list={this.state.list} onToggle={this.toggleItem} onDelete={this.deleteItem}/>
                <TodoForm onSave={this.createItem}/>
            </>
        );
    }
}

export default Todos;