import { Button, TextField } from "@material-ui/core";
import Alert from '@material-ui/lab/Alert';
import { useEffect, useState } from "react";
import { useUsers } from "../hooks/hooks";
import { useHistory, useParams } from "react-router-dom";
import api from "../usersAPI";

export default function UsersForm() {
    const [success, setSuccess] = useState(false);
    const [user, setUser] = useState({name: '', phone: '', email: ''});
    const [edit, setEdit] = useState(false);
    const {createUser, editUser} = useUsers();
    const {goBack} = useHistory();
    const {id} = useParams();
    const formStyle = {
        display: 'flex',
        flexDirection: 'column',
        margin: '0 auto',
        width: '50%',
    }

    useEffect(() => {
        async function getCurrentUser(id) {
            if (!id) {
                setEdit(false);
                return;
            }

            const {name, phone, email} = await api.get('', {params: {id}})
                .then(({data}) => data[0]);

            setUser({name, phone, email});
            setEdit(true);
        }

        getCurrentUser(id);
    }, [id])


    function onInputChange(e) {
        setUser({...user, [e.target.name]: e.target.value})
    }

    function onSave() {
        if (!edit) {
            createUser(user);
            showSuccess();
        } else {
            editUser({...user, id});
            showSuccess();
        }
    }

    function showSuccess() {
        setSuccess(true);
        setTimeout(() => {
            setSuccess(false);
        }, 3000);
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
                <Button variant="contained" color="secondary" size='small' onClick={goBack}>
                    Cancel
                </Button>
            </div>
            {success
                ? <Alert severity="success">Data sent to the server!</Alert>
                : null
            }
        </form>
    )
}
