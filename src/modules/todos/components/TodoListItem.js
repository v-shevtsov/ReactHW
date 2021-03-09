import React, { Component } from 'react';

export default class TodoListItem extends Component {
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
            <div>
                <li onClick={this.onItemClick}
                    style={getItemStyle(item)}>
                    {item.name}
                    <span onClick={this.onDeleteItemClick}> X</span>
                </li>
            </div>
        );
    }
}

function getItemStyle({completed}) {
    return {
        cursor: 'pointer',
        backgroundColor: completed ? 'green' : 'yellow',
    }
}

