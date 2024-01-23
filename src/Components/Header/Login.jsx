import React, { useRef, useState } from 'react'
import Header from './Header'
import validations from '../../Utils/Validations'
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth'
import { auth } from '../../Utils/Firebase'

const Login = () => {
  const [isLogin,setIsLogin] = useState(true)
  const [isError,setIsError] = useState("")
  const email = useRef(null)
  const password = useRef(null)
  const confirmPassword = useRef(null)

  const toggleLog = () => {
    setIsLogin(!isLogin)
  }

  const submitHandler = () => {
    const emailValue = email.current ? email.current.value : '';
    const passwordValue = password.current ? password.current.value : '';
    const confirmPasswordValue = confirmPassword.current ? confirmPassword.current.value : '';
      const message = validations(
        emailValue,
        passwordValue,
        confirmPasswordValue)
      setIsError(message)
      if (message) return

      if(!isLogin){
        createUserWithEmailAndPassword(auth,
          email.current.value,
          password.current.value)
          .then((userCrediential) => {
            const user = userCrediential.user
          })
          .catch((error) => {
            const errorCode = "Email allready registred";
            setIsError(errorCode)
          });
      }else{
        signInWithEmailAndPassword(auth,
          email.current.value,
          password.current.value,)
          .then((userCrediential) => {
            const user = userCrediential.user
          })
          .catch((error) => {
            const errorCode = "enter correct email and password";
            setIsError(errorCode)
          })
      }
  }

  return (
    <div>
      <div>
        <Header />
      </div>
      <form className='w-3/12 bg-slate-900 p-12 m-8 mx-auto left-0 right-0 border-2 border-yellow-700'
        onSubmit={(e) => e.preventDefault()}>
      <h1 className='px-4 m-2 text-center font-bold text-2xl text-white'>
        {!isLogin ? "SignUp" : "Login"}
      </h1>
      <div className='p-4'>
            <input className='p-3'
            ref={email}
            type="text"
            placeholder='email'
            />
        </div>
        <div className='p-4'>
            <input className='p-3'
            ref={password}
            type="password"
            placeholder='password'
            />
        </div>
        {!isLogin && (
        <div className='p-4'>
            <input className='p-3'
            ref={confirmPassword}
            type="password"
            placeholder='confirm password'
            />
        </div>)}
        <p className='mx-4 text-red-800 font-bold'>{isError}</p>
        <button className='p-3 px-20 m-5 bg-black text-white rounded-md border-2 border-yellow-700'
            onClick={submitHandler}>
          {!isLogin ? "signup" : "login"}
        </button>
        <p className='text-white p-2 mx-3 cursor-pointer' onClick={toggleLog}>
          {!isLogin ? "Allready registred? Login": "New User? SingUp"}
        </p>
      </form>  
    </div>
  )
}

export default Login
