import React, { useState } from 'react'
import { CircleCheck, CircleOff } from 'lucide-react'

function MapDemo() {

    const list = [1, 2, 3, 4, 5];
    const [todo, setTodo] = useState([{ name: "This is todo 1", complete: false, isEditable: false }, { name: "This is todo 2", complete: true, isEditable: false }])

    return (
        <div className='flex flex-col gap-2'>
            {
                todo.map((value, index) => {
                    return (
                        <p key={index} className='bg-orange-200 w-fit px-10 py-2'>
                            {value.name}
                            <span> {value?.complete ? <CircleCheck /> : <CircleOff />} </span>
                        </p>
                    )
                })
            }
        </div>
    )
}

export default MapDemo