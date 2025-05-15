
import React, { useState } from 'react'
import { Edit, Pencil, Save, Trash2 } from 'lucide-react';

function EnableDisableInput() {
    const [isEditable, setIsEditable] = useState(false);
    const [value, setValue] = useState('Editable Todo');
    return (
        <div className='w-full h-screen flex items-center'>
            <div className='w-full bg-slate-100 flex px-10 py-2 justify-between'>

                <input type="text" value={value} onChange={(e) => setValue(e.target.value)} disabled={!isEditable} readOnly={!isEditable} className={`w-[50%] h-full bg-transparent outline-none border-2 rounded-md ${isEditable ? "border-black " : "border-none"} p-1`} placeholder='Enter your input' />
                <div className='flex gap-4'>
                    <button onClick={() => setIsEditable(prev => !prev)}>
                        {!isEditable ? <Pencil /> : <Save />}
                    </button>
                    <Trash2 />
                </div>
            </div>
        </div>
    )
}

export default EnableDisableInput