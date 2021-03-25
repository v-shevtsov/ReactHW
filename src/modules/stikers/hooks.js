import { useState } from "react";


export function useAsync(cb, defaultValue = []) {
    const [status, setStatus] = useState('pending');
    const [data, setData] = useState(defaultValue);

    function run() {
        setStatus('pending');

        cb()
            .then(data => {
                setStatus('success');
                setData(data);
                return data;
            })
            .catch(error => {
                setStatus('error');
                return Promise.reject(error)
            })
    }

    return {
        status,
        data,
        setData,
        run
    }
}