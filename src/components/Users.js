import UsersList from "./UsersList";
import { useState } from "react";
import { Alert, AlertTitle } from "@material-ui/lab";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
    alert: {
        position: 'absolute',
        top: 10,
        left: "calc(50% - 200px)",
        width: 400,
        boxShadow: "1px 2px 2px 0 rgba(0, 0, 0, .5)"
    }
});

function Users({ list, removeUser }) {
    const [alert, setAlert] = useState(false);
    const classes = useStyles();

    return (
        <>
            {alert ?
                <Alert
                    severity='success'
                    className={classes.alert}
                >
                    <AlertTitle>Success</AlertTitle>
                    The user has been removed from the list!
                </Alert>
                : null
            }
            <UsersList
                list={list}
                removeUser={removeUser}
                setAlert={setAlert}
            />
        </>
    );
}


export default Users;