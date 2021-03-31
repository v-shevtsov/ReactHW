import React, { Component } from 'react';
import ContactTable from "./ContactTable";
import { createContact, deleteContact, getContacts } from "../services/contactsService";
import ShowForm from "./ShowForm";

class Contacts extends Component {
    state = {
        list: []
    }

    componentDidMount() {
        getContacts().then(list => this.setState({list}))

    }

    deleteItem = (id) => {
        deleteContact(id);

        this.setState({
            list: this.state.list.filter(item => item.id !== id)
        })
    }

    createItem = (newItem) => {
        createContact(newItem).then(data => {
            this.setState({list: [...this.state.list, data]})
        })

    }

    render() {
        return (
            <>
                <ContactTable list={this.state.list} onDelete={this.deleteItem}/>
                <ShowForm onSave={this.createItem}/>
            </>
        );
    }
}

export default Contacts;