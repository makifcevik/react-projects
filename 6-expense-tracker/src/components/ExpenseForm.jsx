import React, { useState } from 'react'

function ExpenseForm({addExpense}) {

    const [expenseName, setExpenseName] = useState("");
    const [expenseAmount, setExpenseAmount] = useState("");
    const [expenseCategory, setExpenseCategory] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        addExpense(expenseName, Number(expenseAmount), expenseCategory);
        setExpenseName("");
        setExpenseAmount("");
        setExpenseCategory("");
    }

    return (
        <form onSubmit={handleSubmit} className='flex flex-col mt-2'>
            <label id='title' className='text-left'>Title</label>
            <input type='text' value={expenseName} placeholder='Enter Expense Name' 
                onChange={e => setExpenseName(e.target.value)} id='title'
                className='rounded-sm p-1 mb-2'
            >

            </input>


            <label id='amount' className='text-left'>Amount</label>
            <input type='text' value={expenseAmount} placeholder='Enter Amount' 
                onChange={e => setExpenseAmount(e.target.value)} id='amount'
                className='rounded-sm p-1 mb-2'
            >

            </input>


            <label id='category' className='text-left'>Category</label>
            <input type='text' value={expenseCategory} placeholder='Enter Category Name' 
                onChange={e => setExpenseCategory(e.target.value)} id='category'
                className='rounded-sm p-1 mb-2'
            >

            </input>


            <button type='submit' className='bg-blue-500 text-white p-1 rounded-sm mt-3'>Add Expense</button>
        </form>
    )
}

export default ExpenseForm
