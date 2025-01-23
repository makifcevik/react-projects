import React from 'react'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import { faPenToSquare, faTrash } from '@fortawesome/free-solid-svg-icons';

function Task({taskItem}) {
    return (
        <div className='flex items-center justify-between mt-3 p-2 bg-blue-700 text-left rounded-md'>
            <p className='text-white text-xl max-sm:text-sm font-semibold ml-3'>
                {taskItem.value}
            </p>
            <div className='flex items-center space-x-4 mr-1'>
                <FontAwesomeIcon icon={faPenToSquare} className='text-white hover:text-yellow-500 cursor-pointer' />
                <FontAwesomeIcon icon={faTrash} className='text-white hover:text-red-500 cursor-pointer'/>
            </div>
        </div>

  )
}

export default Task;
