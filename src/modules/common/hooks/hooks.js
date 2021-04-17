import axios from "axios";
import { useEffect, useState } from "react";
import { DEFAULT_URL } from "../../constans";

export default function useList(URI) {
    const [value, setValue] = useState([]);

    useEffect(() => {
        axios.get(DEFAULT_URL + '/' + URI).then(({data}) => {
            setValue(data);
        })
    }, [URI])

    return [value, setValue]
}
