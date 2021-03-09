import React, { Component } from 'react';
import ContactForm from "./ContactForm";
import { Button } from "@chakra-ui/react";

class ShowForm extends Component {
    state = {
        show: false
    }

    toggleForm = () => {
        this.setState({show: !this.state.show});
    }

    render() {
        return (
            <div>
                <Button
                    onClick={this.toggleForm}
                    colorScheme="blue"
                    size="sm"
                >
                    {this.state.show ? 'Hide' : 'Show'} form
                </Button>
                {
                    this.state.show
                        ? <ContactForm
                            onSave={this.props.onSave}
                            onHide={this.toggleForm}
                        />
                        : null
                }
            </div>
        );
    }
}

export default ShowForm;