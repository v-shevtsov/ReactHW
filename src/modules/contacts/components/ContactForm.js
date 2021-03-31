import React, { useState } from 'react';
import { Button, Center, Flex, FormControl, FormLabel, Input } from "@chakra-ui/react";

export default function ContactForm({onHide, onSave}) {
    const [contact, setContact] = useState({name: '', surname: '', phone: '',})

    function onFormSubmit(e) {
        e.preventDefault();

        onSave(contact);
        setContact({
            name: '',
            surname: '',
            phone: '',
        });
    }

    function onInputChange(e) {
        setContact({...contact, [e.target.name]: e.target.value});
    }

    return (
        <Center>
            <form onSubmit={onFormSubmit}>
                <FormControl isRequired>
                    <Flex direction="column">
                        <FormLabel>Name</FormLabel>
                        <Input
                            type="text"
                            name="name"
                            value={contact.name}
                            onChange={onInputChange}
                            w='350px'
                        />
                        <FormLabel>Surname</FormLabel>
                        <Input
                            type="text"
                            name="surname"
                            value={contact.surname}
                            onChange={onInputChange}
                            w='350px'
                        />
                        <FormLabel>Phone</FormLabel>
                        <Input
                            type="text"
                            name="phone"
                            value={contact.phone}
                            onChange={onInputChange}
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
                            onClick={onHide}
                            colorScheme="red"
                            size="sm"
                        >Cancel</Button>
                    </Flex>
                </FormControl>
            </form>
        </Center>
    );
}
