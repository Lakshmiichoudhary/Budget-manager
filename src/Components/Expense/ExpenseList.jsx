import React from 'react'

const ExpenseList = ({expenses}) => {
  return (
    <div className='w-4/12 bg-slate-900 p-12 text-white m-8 mx-28 border-2 border-yellow-700'>
      <h1>Expense</h1>
      <div>
        {expenses.map((expense,id) => (
          <ul key={id}>
            <li key={id}>{expense.amount}</li>
            <li key={id}>{expense. description}</li>
            <li key={id}>{expense.category}</li>
          </ul>
        ))}
      </div>
    </div>
  )
}

export default ExpenseList
