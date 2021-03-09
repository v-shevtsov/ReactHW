import React, { Component } from 'react';
import { Button, FormControl, FormLabel, Input, Flex, Center } from "@chakra-ui/react";

class ContactForm extends Component {
    state = {
        contact: {
            name: '',
            surname: '',
            phone: '',
        }
    }

    onFormSubmit = (e) => {
        e.preventDefault();

        this.props.onSave(this.state.contact);
        this.setState({
            contact: {
                name: '',
                surname: '',
                phone: '',
            }
        });
    }

    onInputChange = (e) => {
        this.setState({contact: {...this.state.contact, [e.target.name]: e.target.value}})
    }

    render() {
        return (
            <Center>
                <form onSubmit={this.onFormSubmit}>
                    <FormControl isRequired>
                        <Flex direction="column">
                        <FormLabel>Name</FormLabel>
                        <Input
                            type="text"
                            name="name"
                            value={this.state.contact.name}
                            onChange={this.onInputChange}
                            w='350px'
                        />
                        <FormLabel>Surname</FormLabel>
                        <Input
                            type="text"
                            name="surname"
                            value={this.state.contact.surname}
                            onChange={this.onInputChange}
                            w='350px'
                        />
                        <FormLabel>Phone</FormLabel>
                        <Input
                            type="text"
                            name="phone"
                            value={this.state.contact.phone}
                            onChange={this.onInputChange}
                            w='350px'
                        />
                        <Button
                            type="submit"
                            colorScheme="teal"
                            size="sm"
                            mt={3}
                            mb={3}
                        >
                            Save
                        </Button>
                        <Button
                            type="reset"
                            onClick={this.props.onHide}
                            colorScheme="red"
                            size="sm"
                        >Cancel</Button>
                        </Flex>
                    </FormControl>
                </form>
            </Center>
        );
    }
}

export default ContactForm;