import { onAuthStateChanged, signOut } from 'firebase/auth'
import { Link, useNavigate } from 'react-router-dom'
import { auth, } from '../../Utils/Firebase'
import ExpenseForm from './ExpenseForm'
import { addUser, removeUser } from '../../Utils/authSlice'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import { toggleTheme } from '../../Utils/themeSlice'

const Expense = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const isDarkTheme = useSelector((state) => state.theme.isDarkTheme);

  const handleToggleTheme = () => {
    dispatch(toggleTheme());
  };

  useEffect(() => {
    onAuthStateChanged(auth,(user) => {
      if(user){
        const {uid,email}= user
        dispatch(addUser({uid:uid,email:email}))
        navigate("/expense")
      }else{
        dispatch(removeUser())
        navigate("/")
      }
    })
  },[])

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        navigate("/")
      })
      .catch((error) => {
        alert("something went wrong", error)
      })
  }

  return (
    <div>
      <div className='flex justify-between bg-slate-950 p-6 h-20'>
        <h1 className='text-yellow-700 text-2xl'>Welcome To expense Tracker</h1>
        <div className='flex mx-4'>
          <p className='flex text-yellow-700'>Your Profile is Incomplete.
            <Link to="/profile" className='cursor-pointer text-blue-600'>Complete Now</Link>
          </p>
          <button
            onClick={handleToggleTheme}
            className={`mx-4 p-1 rounded-full ${isDarkTheme ? "bg-gray-300 text-gray-800" : "bg-gray-800 text-white"}`}
          >
            Toggle Theme
          </button>
          <button className='mx-4 p-1 text-white' onClick={handleSignOut}>
            LogOut
          </button>
        </div>
      </div>
      <div className='flex'>
        <ExpenseForm />
      </div>
    </div>
  )
}

export default Expense;
