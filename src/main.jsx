import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import {createBrowserRouter,RouterProvider} from 'react-router-dom'
import './index.css'
import Expense from './Components/Expense/Expense.jsx'

  const approuter = createBrowserRouter([
    {
      path: "/",
      element: <App />
    },
    {
      path: "expense",
      element: <Expense />
    }
  ])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={approuter} />
  </React.StrictMode>,
)
