import React from 'react'

const ExpenseList = ({expenses}) => {
  return (
    <div className='w-4/12 bg-slate-900 p-12 text-white m-8 border-2 border-yellow-700'>
      <h1 className='text-center font-bold'>Expense</h1>
      <div>
        {expenses.map((expense) => (
          <ul className='m-2 p-4 flex border-2 border-black' key={expense.id}>
            <li className='ml-4'>Amount  {expense.amount}</li>
            <li className='ml-4'>Description  {expense. description}</li>
            <li className='ml-4'>Category  {expense.category}</li>
          </ul>
        ))}
      </div>
    </div>
  )
}

export default ExpenseList
