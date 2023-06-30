import React, { useEffect, useState } from 'react'

const PREFIX = 'chat-app-';

const useLocalStorage = (key, initialValue) => {
    const prefixedkey = PREFIX + key;
    const [value, setValue] = useState(() => {
        const jsonValue = localStorage.getItem(prefixedkey);
        if (jsonValue !== null) return JSON.parse(jsonValue)
        if(typeof(initialValue) === 'function') {
            return initialValue();
        } else {
            return initialValue;
        }
    })

    useEffect(() => {
        localStorage.setItem(prefixedkey, JSON.stringify(value))
    }, [prefixedkey, value])

    return [value, setValue]

}

export default useLocalStorage;
