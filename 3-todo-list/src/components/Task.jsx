import React from 'react'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import { faPenToSquare, faTrash } from '@fortawesome/free-solid-svg-icons';

function Task({taskItem, deleteTask, editTask, toggleCompleted}) {
    return (
        <div className={`flex items-center justify-between mt-3 p-2 text-left rounded-md 
            ${taskItem.isCompleted ? "bg-blue-900" : "bg-blue-700" }`}
        >
            <p className={`text-white text-xl max-sm:text-sm font-semibold ml-3 
                ${taskItem.isCompleted ? "line-through" : ""}`}
                onClick={() => toggleCompleted(taskItem.id)}
            >
                {taskItem.value}
            </p>
            <div className='flex items-center space-x-4 mr-1'>
                <FontAwesomeIcon icon={faPenToSquare} className='text-white hover:text-yellow-500 cursor-pointer' 
                    onClick={() => editTask(taskItem.id, taskItem.value)}
                />
                <FontAwesomeIcon icon={faTrash} className='text-white hover:text-red-500 cursor-pointer'
                    onClick={() => deleteTask(taskItem.id)}
                />
            </div>
        </div>

  )
}

export default Task;
