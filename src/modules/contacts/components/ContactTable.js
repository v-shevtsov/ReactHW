import React, { Component } from 'react';
import ContactListItem from "./ContactListItem";

class ContactTable extends Component {
    render() {
        return (
            <table>
                <thead>
                <tr>
                    <th>Name</th>
                    <th>Surname</th>
                    <th>Phone</th>
                    <th>Action</th>
                </tr>
                </thead>
                <tbody>
                {this.props.list.map(item => (
                    <ContactListItem
                        key={item.id}
                        item={item}
                        onToggle={this.props.onToggle}
                        onDelete={this.props.onDelete}/>
                ))}
                </tbody>
            </table>
        );
    }
}

export default ContactTable;