import { signOut } from 'firebase/auth'
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { auth } from '../../Utils/Firebase'
import ExpenseForm from './ExpenseForm'
import ExpenseList from './ExpenseList'

const Expense = () => {
  const navigate = useNavigate()
  const [expenses,setExpenses] = useState([])

  const handleAddExpense = (newExpense) => {
    setExpenses([...expenses, newExpense]);
  };

  const handleSignOut = () => {
    signOut(auth)
    .then(()=>{
      navigate("/")
    })
    .catch((error) => {

    })
  } 
  return (
    <div>
    <div className='flex justify-between  bg-slate-900 p-6  h-20'>
    <h1 className='text-yellow-700 text-2xl'>Welcome To expense Tracker</h1>
    <div className='flex mx-4'>
    <p className='flex text-yellow-700'>Your Profile is Incomplete.
        <Link to="/profile" className='cursor-pointer text-blue-600'>Complete Now</Link>
    </p>
    <button className='mx-4 p-1 text-white' onClick={handleSignOut}>
      LogOut
    </button>
    </div>
    </div>
      <ExpenseForm onAddExpenses={handleAddExpense} />
      <ExpenseList expenses={expenses}/>
    </div>
  )
}

export default Expense
