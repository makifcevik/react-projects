import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash } from '@fortawesome/free-solid-svg-icons';

function Expense({ expenseItem, deleteExpense }) {
    return (
        <div className='flex justify-between bg-white mt-2 rounded-md p-3 shadow-md'>
            {/* Left Section: Title & Amount */}
            <div className='text-left'>
                <h1 className='text-lg font-semibold'>{expenseItem.title}</h1>
                <p className={`text-md font-bold ${expenseItem.amount > 0 ? 'text-green-500' : 'text-red-500'}`}>
                    ₺{expenseItem.amount}
                </p>
            </div>

            {/* Right Section: Trash Icon (Top Right) & Category (Bottom Right) */}
            <div className='flex flex-col justify-between items-end'>
                {/* Trash Icon - Always at Top Right */}
                <FontAwesomeIcon 
                    icon={faTrash} 
                    className='cursor-pointer text-red-500 hover:text-red-700 transition-colors duration-200'
                    onClick={() => deleteExpense(expenseItem.id)} 
                />

                {/* Category - Always at Bottom Right */}
                <p className='text-gray-600 text-sm mt-auto'>{expenseItem.category}</p>
            </div>
        </div>
    )
}

export default Expense;
