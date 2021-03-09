import React, { Component } from 'react';
import ContactForm from "./ContactForm";

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
                <button onClick={this.toggleForm}>{this.state.show ? 'Hide' : 'Show'} form</button>
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