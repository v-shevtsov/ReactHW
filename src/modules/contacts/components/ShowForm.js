import React, { useState } from 'react';
import ContactForm from "./ContactForm";
import { Button } from "@chakra-ui/react";
import { useTheme } from "../hooks/useContacts";

export default function ShowForm({onSave}) {
    const [state, setState] = useState({show: false})
    const {theme} = useTheme();

    function toggleForm() {
        setState({show: !state.show});
    }

    return (
        <div>
            <Button
                onClick={toggleForm}
                colorScheme={theme}
                size="sm"
            >
                {state.show ? 'Hide' : 'Show'} form
            </Button>
            {state.show
                ? <ContactForm
                    onSave={onSave}
                    onHide={toggleForm}
                />
                : null
            }
        </div>
    );
}

