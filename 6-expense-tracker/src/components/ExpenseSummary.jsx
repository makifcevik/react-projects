import React from 'react'

function ExpenseSummary({expenses}) {

const calculateBalance = () => {
    return calculateIncome() + calculateExpense();
}

const calculateIncome = () => {
    return expenses
        .filter(expense => expense.amount > 0)
        .reduce((sum, expense) => sum += expense.amount, 0);
}

const calculateExpense = () => {
    return expenses
        .filter(expense => expense.amount < 0)
        .reduce((sum, expense) => sum += expense.amount, 0);
}

    return (
        <div className=''>
            <div className='mt-3'>               
                <h2>YOUR BALANCE</h2>
                <h1 className='text-3xl'>₺{calculateBalance()}</h1>
            </div>
            
            <div className='flex justify-center'>
                <div className='my-3 py-5 px-10 bg-white rounded-l-xl'>
                    <h3>INCOME</h3>
                    <h2 className='text-green-500'>₺{calculateIncome()}</h2>
                </div>
                <div className='my-3 py-5 px-10 bg-white rounded-r-xl'>
                    <h3>EXPENSE</h3>
                    <h2 className='text-red-500'>₺{calculateExpense()}</h2>
                </div>
            </div>
        </div>
    )
}

export default ExpenseSummary
