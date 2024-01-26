import { push, ref } from 'firebase/database'
import React, { useState } from 'react'
import { database } from '../../Utils/Firebase'

const ExpenseForm = ({onAddExpenses}) => {
    const [amount,setAmount]= useState("")
    const [description,setdescription]= useState("")
    const [category,setcategory]= useState("")

    const handleSubmit = (e) => {
        e.preventDefault()
        if(!amount || !description || !category){
        alert("Please enter all the fields")
        return
    }

    const newExpense = {
        amount,
        description,
        category
    }

    const expensesRef = ref(database, 'expenses');
    push(expensesRef, newExpense);


    onAddExpenses(newExpense)
        setAmount("")
        setdescription("")
        setcategory("")

    }
  return (
    <form className='w-4/12 bg-slate-900 p-12 text-white m-8 mx-28 border-2 border-yellow-700'>
        <div className='p-2 m-2'>
        <label>Money Spent</label>
            <input className='m-1 ml-2 p-2 text-black'
                type="number"
                id="amount"
                name="amount"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}/>
        </div>
        <div className='p-2 m-2 '>
        <label>Description</label>
            <input className='m-1 ml-3 p-2 text-black'
                type="text"
                id="description"
                name="description"
                value={description}
                onChange={(e) => setdescription(e.target.value)}
                />
        </div>
        <div className='p-2 m-2'>
        <label>category</label>   
        <select className='text-black m-2 p-2 ml-3'
            id="category"
            name="category"
            value={category}
            onChange={(e) => setcategory(e.target.value)}
            >
            <option value="">select category</option>
            <option value="food">Food</option>
            <option value="petrol">Petrol</option>
            <option value="salary">Salary</option>
        </select>
        </div>
        <button className='p-2 px-6 rounded-lg m-2 bg-black text-white border-2 border-yellow-700'
            onClick={handleSubmit}>
            Add
        </button>
    </form>
  )
}

export default ExpenseForm
