import React from 'react'
import { useCounter } from '../context/CounterContext'

function Test() {

    const { counter } = useCounter();
    return (
        <div>
            Counter Value in Test:{counter}
        </div>
    )
}

export default Test