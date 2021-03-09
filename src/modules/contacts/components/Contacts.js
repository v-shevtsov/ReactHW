import React, { Component } from 'react';
import ContactTable from "./ContactTable";
import { createTodo, deleteTodo, getTodos, updateTodo } from "../services/contactsService";
import ShowForm from "./ShowForm";


class Contacts extends Component {
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
                <ContactTable list={this.state.list} onToggle={this.toggleItem} onDelete={this.deleteItem}/>
                <ShowForm onSave={this.createItem}/>
            </>
        );
    }
}

export default Contacts;