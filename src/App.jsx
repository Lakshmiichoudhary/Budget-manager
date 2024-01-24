import Login from "./Components/Header/Login"
import { useDispatch } from "react-redux"
import { useEffect } from "react"
import { onAuthStateChanged } from "firebase/auth"
import { auth } from "./Utils/Firebase"
import { addUser, removeUser } from "./Utils/userSlice"

function App() {
  const dispatch = useDispatch()

  useEffect(() => {
    onAuthStateChanged(auth,(user) => {
      if(user){
        const {uid,email}= user
        dispatch(addUser({uid:uid,email:email}))
       
      }else{
        dispatch(removeUser())
       
      }
    })
  },[])

  return (
      <Login />
  )
}

export default App
