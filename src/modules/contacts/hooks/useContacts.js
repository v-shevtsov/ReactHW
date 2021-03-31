import api from "../contactsApi";
import { useEffect, useState } from "react";

export default function useContacts() {
    const [contacts, setContacts] = useState([]);

    useEffect(() => {
        api.get().then(({data}) =>
            setContacts(data)
        );
    }, []);

    function deleteContact(id) {
        api.delete(id);

        setContacts(contacts.filter(
            item => item.id !== id
        ));
    }

    function createItem(newItem) {
        api.post('', newItem).then(({data}) =>
            setContacts([...contacts, data])
        );
    }

    return {
        contacts,
        setContacts,
        deleteContact,
        createItem
    }
}