import React, { Component } from 'react';

class ContactForm extends Component {
    state = {
        todo: {
            name: '',
            surname: '',
            phone: '',
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
                    name="name"
                    value={this.state.todo.title}
                    onChange={this.onInputChange}
                />
                <input
                    type="text"
                    name="surname"
                    value={this.state.todo.priority}
                    onChange={this.onInputChange}
                />
                <input
                    type="text"
                    name="phone"
                    value={this.state.todo.priority}
                    onChange={this.onInputChange}
                />
                <button>Save</button>
                <button type="reset" onClick={this.props.onHide}>Cancel</button>
            </form>
        );
    }
}

export default ContactForm;