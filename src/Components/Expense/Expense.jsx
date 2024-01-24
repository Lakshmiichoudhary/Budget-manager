import React from 'react'
import { Link } from 'react-router-dom'

const Expense = () => {
  return (
    <div className='flex justify-between  bg-slate-900 p-6  h-20'>
    <h1 className='text-yellow-700 text-2xl'>Welcome To expense Tracker</h1>
    <p className='flex text-yellow-700'>Your Profile is Incomplete.
        <Link to="/profile" className='cursor-pointer text-blue-600'>Complete Now</Link>
      </p>
    </div>
  )
}

export default Expense
