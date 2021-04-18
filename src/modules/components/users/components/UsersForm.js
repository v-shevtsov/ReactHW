import { Button, TextField } from "@material-ui/core";
import { useState } from "react";

export default function UsersForm() {
    const [user, setUser] = useState({
        name: '',
        phone: '',
        email: '',
    });

    const formStyle = {
        display: 'flex',
        'flex-direction': 'column',
        margin: '0 auto',
        width: '50%',
    }

    function onInputChange(e) {
        setUser({...user, [e.target.name]: e.target.value})
    }

    function onSave() {
        console.log('save')
    }

    function onCancel() {
        console.log('cancel')
    }


    return (
        <form id='users-form' noValidate autoComplete="off" style={formStyle}>
            <TextField
                label="Name"
                variant="outlined"
                margin='dense'
                name='name'
                value={user.name}
                onChange={onInputChange}
            />
            <TextField
                label="Phone"
                variant="outlined"
                margin='dense'
                name='phone'
                value={user.phone}
                onChange={onInputChange}
            />
            <TextField
                label="Email"
                variant="outlined"
                margin='dense'
                name='email'
                value={user.email}
                onChange={onInputChange}
            />
            <div style={{textAlign: 'right'}}>
                <Button variant="contained" color="primary" size='small' style={{marginRight: 10}} onClick={onSave}>
                    Save
                </Button>
                <Button variant="contained" color="secondary" size='small' onClick={onCancel}>
                    Cancel
                </Button>
            </div>
        </form>
    )
}

