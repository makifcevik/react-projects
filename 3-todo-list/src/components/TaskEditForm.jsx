import React from 'react'
import { useState } from 'react';

function TaskEditForm({taskItem, editTask}) {

    const [value, setValue] = useState(taskItem.value);

    const handleSubmit = (e) => {
        e.preventDefault();
        editTask(taskItem.id, value);
    }

    return (
        <form onSubmit={handleSubmit}>
            <input type='text' value={value} onChange={e => setValue(e.target.value)}
                className='text-white border-2 border-blue-700 bg-blue-950 rounded-md p-2 w-36 md:w-64 lg:w-96 max-sm:text-xs'
            >
                
            </input>
            <button type='submit'
                className='py-2 px-4 mt-6 ml-1 mb-3 rounded-md text-white bg-blue-700 max-sm:text-xs
                hover:bg-green-600 transition-colors ease-in-out duration-200'
            >
                Update
            </button>
        </form>
    );
}

export default TaskEditForm;
