import { useState } from "react"
import React from 'react'


function TaskForm({addTask}) {

    const [value, setValue] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        addTask(value);
        setValue('');
    }

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" value={value} onChange={e => setValue(e.target.value)} placeholder="What's the task?"
                className='text-white border-2 border-blue-700 bg-blue-950 rounded-md p-2 w-36 md:w-64 lg:w-96 max-sm:text-xs'
            >

            </input>
            <button type="submit" className='py-2 px-4 ml-1 mb-5 rounded-md text-white bg-blue-700 max-sm:text-xs
                hover:bg-green-600 transition-colors ease-in-out duration-200'>
                Add Task
            </button>
        </form>
    );
}

export default TaskForm;
