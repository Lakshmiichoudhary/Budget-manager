import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import {createBrowserRouter,RouterProvider} from 'react-router-dom'
import './index.css'
import Expense from './Components/Expense/Expense.jsx'
import { Provider } from 'react-redux'
import appStore from './Utils/appStore.jsx'
import Profile from './Components/Expense/Profile.jsx'

  const approuter = createBrowserRouter([
    {
      path: "/",
      element: <App />
    },
    {
      path: "expense",
      element: <Expense />,
    },  
    {
      path: "profile",
      element: <Profile />
    } 
  ])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={appStore}>
    <RouterProvider router={approuter} />
    </Provider>
  </React.StrictMode>,
)
