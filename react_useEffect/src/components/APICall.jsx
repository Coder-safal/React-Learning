import React from 'react'
import { useEffect } from 'react';

function APICall() {

    const fetchData = () => {

        fetch('https://jsonplaceholder.typicode.com/posts').then((value) => {
            console.log("value is: ", value);
            return value.json();
        }).then((val) => {
            console.log("value on json formats: ", val);
        }).catch((error) => { console.log("Error is: ", error) });
    }
    fetchData();

    const handleClick = () => {

    }


    return (
        <div>
            APICall
            <button onClick={handleClick}>Click to fetch</button>
        </div>

    )
}

export default APICall