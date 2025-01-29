import React from 'react'
import Expense from './Expense'

function ExpenseList({expenses, deleteExpense}) {

    return (
        <div>
            {Object.keys(expenses).length > 0
                ? <div>
                    <div className='border-b-2 border-black my-4'>
                        <h2 className='text-left text-lg'>History</h2>
                    </div>
                    {expenses.map(expense => 
                        <Expense key={expense.id} expenseItem={expense} deleteExpense={deleteExpense} />
                    )}
                </div> 
                : <p></p>
            }
        </div>
    )
}

export default ExpenseList
