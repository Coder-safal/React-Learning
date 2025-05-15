import React from 'react'
import { useState } from 'react'

function LearnUseState() {

    const [value, setValue] = useState(1);

    // count value ,setCount=>function, to update count

    // arrow function
    // const handelIncrement = () => {

    // }

    function handelIncrement() {

        setValue((prev) => prev + 1); //prev =>previous value

    }

    return (
        <div>
            <h1>This is initial value {value}</h1>
            <button onClick={handelIncrement}>Increment</button>
        </div>
    )
}

export default LearnUseState