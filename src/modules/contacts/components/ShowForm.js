import React, { Component } from 'react';
import ContactTable from "./ContactTable";

class ShowForm extends Component {
    state = {
        show: true
    }

    toggleForm = () => {
        this.setState({ show: !this.state.show });
    }

    render() {
        return (
            <div>
                <button onClick={this.toggleForm}>{this.state.show ? 'Hide' : 'Show'} form</button>
                {
                    this.state.show
                        ? <ContactForm onSave={this.props.onSave}/>
                        : null
                }
            </div>
        );
    }
}

export default ShowForm;