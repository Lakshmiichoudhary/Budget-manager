import React, { useRef } from 'react'
import Header from '../Header/Header'
import { sendPasswordResetEmail } from 'firebase/auth'
import { auth } from '../../Utils/Firebase'

const ResetPasswoed = () => {
    const email = useRef(null)
    
    const handleResetPassword = () => {
        sendPasswordResetEmail(auth,email.current.value)
        .then(()=>{
            alert("Sent a link to reset Email")
        })
        .catch((error)=>{
            console.error("failed to send reset email link",error)
        })
    }

  return (
    <div>
        <Header />
        <div className='flex flex-col justify-center ml-72 mt-20 font-bold'>
            <label>Enter the registred email :</label>
            <input className='p-2 w-60 mt-2 border-2 border-black rounded-md' 
            type='text'
            ref={email}/>
        </div>
        <button className='p-3 bg-black m-2 rounded-md text-white ml-72 border-2 border-yellow-700'
            onClick={handleResetPassword}>
            Send Link
        </button>
    </div>
  )
}

export default ResetPasswoed
