import React from 'react';
import ContactTable from "./ContactTable";
import useContacts from "../hooks/useContacts";
import ShowForm from "./ShowForm";

function Contacts() {
    const {
        contacts,
        deleteContact,
        createItem
    } = useContacts();

    return (
        <>
            <ContactTable
                list={contacts}
                onDelete={deleteContact}
            />
            <ShowForm
                onSave={createItem}
            />
        </>
    );
}

export default Contacts;