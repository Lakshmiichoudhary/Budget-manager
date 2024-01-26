import { signOut } from 'firebase/auth'
import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { auth, database } from '../../Utils/Firebase'
import ExpenseForm from './ExpenseForm'
import ExpenseList from './ExpenseList'
import { onValue, ref } from 'firebase/database'

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

  useEffect(() => {
    // Fetch expenses from Firebase on component mount
    const expensesRef = ref(database, 'expenses');
    onValue(expensesRef, (snapshot) => {
      const expensesData = snapshot.val();
      if (expensesData) {
        const expensesArray = Object.values(expensesData);
        setExpenses(expensesArray);
      }
    });
  }, []); 

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
    <div className='flex'>
      <ExpenseForm onAddExpenses={handleAddExpense} />
      <ExpenseList expenses={expenses}/>
    </div>  
    </div>
  )
}

export default Expense
