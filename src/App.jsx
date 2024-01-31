import { RouterProvider, createBrowserRouter } from "react-router-dom"
import Login from "./Components/Header/Login"
import Expense from "./Components/Expense/Expense"
import Profile from "./Components/Expense/Profile"
import ResetPasswoed from "./Components/Expense/ResetPasswoed"
import { useSelector } from "react-redux"


function App() {
  const isDarkTheme = useSelector((state) => state.theme.isDarkTheme);

  const approuter = createBrowserRouter([
    {
      path: "/",
      element: <Login />
    },
    {
      path: "expense",
      element: <Expense />,
    },  
    {
      path: "profile",
      element: <Profile />
    },
    {
      path: "resetPassword",
      element: <ResetPasswoed />
    } 
  ])


  return (
    <div className={`h-screen ${isDarkTheme ? "bg-white text-gray-800" : " bg-gray-800 text-black"}`}>
    <RouterProvider router={approuter} />
    </div>
  )
}

export default App
