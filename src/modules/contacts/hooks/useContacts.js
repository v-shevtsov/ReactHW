import api from "../contactsApi";
import { useContext, useEffect, useState } from "react";
import { themeContext } from "../contects/themeContext";

export function useTheme() {
    return useContext(themeContext);
}

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
        api.post('', newItem)
            .then(({data}) =>
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