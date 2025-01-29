import React, { useState } from 'react'
import ExpenseList from "./ExpenseList";
import ExpenseSummary from "./ExpenseSummary";
import ExpenseForm from "./ExpenseForm";

function ExpenseFormWrapper() {

    const [expenses, setExpenses] = useState([]);
    const [id, setId] = useState(0);

    const addExpense = (title, amount, category) => {
        setExpenses([...expenses, {id: id, title: title, amount: amount, category: category}]);
        setId(prev => prev + 1);
    }

    const deleteExpense = (id) => {
        setExpenses(expenses.filter(expense => expense.id !== id));
    }

    return (
        <div className='mt-5'>
            <ExpenseSummary expenses={expenses}/>
            <ExpenseForm addExpense={addExpense}/>
            <ExpenseList expenses={expenses} deleteExpense={deleteExpense}/>
        </div>
    )
}

export default ExpenseFormWrapper
