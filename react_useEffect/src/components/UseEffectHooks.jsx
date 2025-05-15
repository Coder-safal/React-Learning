import React, { useEffect, useState } from 'react'

function UseEffectHooks() {

    const [count, setCount] = useState(0);
    const [value, setValue] = useState(98);
    // callback function dependency
    useEffect(() => {
        console.log("Hello this is learning platform , with depandency value");
    },[])

    useEffect(() => {
        console.log(" with no dependency");
    },[]);
    useEffect(() => {
        console.log("Dependancy of value");
    },[]);



    // console.log("Hello this is learning platform"); 




    return (
        <>
            <div>
                <h1>UseEffectHooks</h1>
                <h2>Count is: {count}</h2>
                <button onClick={() => { setCount(prev => prev + 1) }}>Increment</button>
            </div>
            <div>
                <h1>value</h1>
                <h2> value is: {value}</h2>
                <button onClick={() => { setValue(prev => prev - 1) }}>Decrement</button>
            </div>
        </>
    )
}

export default UseEffectHooks