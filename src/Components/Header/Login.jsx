import React, { useState } from 'react'
import Header from './Header'

const Login = () => {
  const [isLogin,setIsLogin] = useState(false)

  const toggleLog = (e) => {
    e.preventDefault()
    setIsLogin(!isLogin)
  }

  return (
    <div className=''>
      <div>
        <Header />
      </div>
      <form className='w-3/12 bg-slate-900 p-12 m-16 mx-auto left-0 right-0 border-2 border-yellow-700'>
      <h1 className='px-4 m-2 text-center font-bold text-2xl text-white'>
        {!isLogin ? "Login" : "SignUp"}
      </h1>
      <div className='p-4'>
            <input className='p-3'
            type="text"
            placeholder='email'
            />
        </div>
        <div className='p-4'>
            <input className='p-3'
            type="password"
            placeholder='password'
            />
        </div>
        <button className='p-3 px-20 m-5 bg-black text-white rounded-md border-2 border-yellow-700'>
          {!isLogin ? "Login" : "SignUp"}
        </button>
        <p className='text-white p-2 mx-3 cursor-pointer' onClick={toggleLog}>
          {!isLogin ? "New User? SingUp" : "Allready registred? Login"}
        </p>
      </form>  
    </div>
  )
}

export default Login
