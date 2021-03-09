import React, { Component } from 'react';
import { Button, FormControl, FormLabel, Input } from "@chakra-ui/react";

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
        this.setState({
            todo: {
                name: '',
                surname: '',
                phone: '',
            }
        });
    }

    onInputChange = (e) => {
        this.setState({todo: {...this.state.todo, [e.target.name]: e.target.value}})
    }

    render() {
        return (
            <form onSubmit={this.onFormSubmit}>
                <FormControl isRequired>
                    <FormLabel>Name</FormLabel>
                    <Input
                        type="text"
                        name="name"
                        value={this.state.todo.name}
                        onChange={this.onInputChange}
                    />
                    <FormLabel>Surname</FormLabel>
                    <Input
                        type="text"
                        name="surname"
                        value={this.state.todo.surname}
                        onChange={this.onInputChange}
                    />
                    <FormLabel>Phone</FormLabel>
                    <Input
                        type="text"
                        name="phone"
                        value={this.state.todo.phone}
                        onChange={this.onInputChange}
                    />
                    <Button
                        colorScheme="teal"
                        size="sm"
                        type="submit">
                        Save
                    </Button>
                    <button type="reset" onClick={this.props.onHide}>Cancel</button>
                </FormControl>
            </form>
        );
    }
}

export default ContactForm;