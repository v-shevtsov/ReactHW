import React, { Component } from 'react';

export default class ContactListItem extends Component {
    onItemClick = (e) => {
        this.props.onToggle(this.props.item.id);
    }

    onDeleteItemClick = (e) => {
        e.stopPropagation();

        this.props.onDelete(this.props.item.id);
    }

    render() {
        const {item} = this.props;

        return (
            <tr>
                <td>{item.name}</td>
                <td>{item.surname}</td>
                <td>{item.phone}</td>
                <td onClick={this.onDeleteItemClick}>X</td>
            </tr>
        );
    }
}

