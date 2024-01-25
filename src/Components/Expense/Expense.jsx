import { signOut } from 'firebase/auth'
import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { auth } from '../../Utils/Firebase'

const Expense = () => {
  const navigate = useNavigate()

  const handleSignOut = () => {
    signOut(auth)
    .then(()=>{
      navigate("/")
    })
    .catch((error) => {

    })
  } 
  return (
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
  )
}

export default Expense
