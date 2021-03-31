import React, { useEffect, useState } from 'react';
import ContactTable from "./ContactTable";
import { createContact, deleteContact, getContacts } from "../services/contactsService";
import ShowForm from "./ShowForm";

function Contacts() {
    const [list, setList] = useState([]);

    useEffect(() => {
        getContacts().then(list => setList(list));
    }, [])

    function deleteItem(id) {
        deleteContact(id);

        setList(list.filter(
            item => item.id !== id
        ));
    }

    function createItem(newItem) {
        createContact(newItem).then(data => {
            setList(() => [...list, data])
        })

    }

    return (
        <>
            <ContactTable
                list={list}
                onDelete={deleteItem}
            />
            <ShowForm
                onSave={createItem}
            />
        </>
    );
}

export default Contacts;