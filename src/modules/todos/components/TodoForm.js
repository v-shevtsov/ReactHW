import React, { Component } from 'react';

class TodoForm extends Component {
    state = {
        todo: {
            title: '',
            priority: ''
        }
    }

    onFormSubmit = (e) => {
        e.preventDefault();

        this.props.onSave(this.state.todo);
        this.setState({todo: {
            title: '',
            priority: ''
        }});
    }

    onInputChange = (e) => {
        this.setState({todo: {...this.state.todo, [e.target.name]: e.target.value}})
    }

    render() {
        return (
            <form onSubmit={this.onFormSubmit}>
                <input
                    type="text"
                    name="title"
                    value={this.state.todo.title}
                    onChange={this.onInputChange}
                />
                <input
                    type="text"
                    name="priority"
                    value={this.state.todo.priority}
                    onChange={this.onInputChange}
                />
                <button>Save</button>
            </form>
        );
    }
}

export default TodoForm;