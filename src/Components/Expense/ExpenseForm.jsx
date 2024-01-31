import React, { useEffect, useState } from 'react';
import { collection, addDoc, getDocs, doc, deleteDoc, updateDoc} from '@firebase/firestore';
import { db } from '../../Utils/Firebase';
import { useDispatch, useSelector } from 'react-redux';
import { activatePremium } from '../../Utils/authSlice';

const ExpenseForm = () => {
  const [amount, setAmount] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");
  const [expense,setExpense] = useState([]);
  const [id,setId] = useState("")
  const [show,setShow] = useState(false)

  const dispatch = useDispatch();
  const expenses = useSelector((state) => state.expenses.expenses);
  const totalExpenses = expenses.reduce((total, expense) => total + expense.amount, 0);
  const isPremium = useSelector((state) => state.auth.isPremium);


  const expenseCollection = collection(db, "exp")

  useEffect(() => {
    const getData = async () => {
        const dbexp = await getDocs(expenseCollection)
        setExpense(dbexp.docs.map(doc=>({...doc.data(),id:doc.id})))
    }
    getData()
  },[])

  const handleAddExpense = async (e) => {
    e.preventDefault(); 
  
    await addDoc(expenseCollection, {
      amount: amount,
      description: description,
      category: category,
    });
  
    setAmount('');
    setDescription('');
    setCategory('');
  };
  
    const handleDelete = async (id) => {
        const deleteData = doc(db, 'exp', id);
        await deleteDoc(deleteData)
    }

    const handleEdit = async (id,amount,description,category) => {
        setAmount(amount)
        setDescription(description)
        setCategory(category)
        setId(id)
        setShow(true)
    }

    const handleUpdate = async (e) => {
        e.preventDefault()
        const updateData = doc(db,"exp",id)
        await updateDoc(updateData,{amount:amount,description:description,category:category})
        setShow(false)
        setAmount(""),
        setDescription(""),
        setCategory("")
    }

    const handlePremiumActivation = () => {
      dispatch(activatePremium());
    };
  
  return (
    <div className='flex'>
    <form className=' bg-slate-900 p-12 text-white m-8 mx-28 border-2 border-yellow-700'>
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
                onChange={(e) => setDescription(e.target.value)}
                />
        </div>
        <div className='p-2 m-2'>
        <label>category</label>   
        <select className='text-black m-2 p-2 ml-3'
            id="category"
            name="category"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            >
            <option value="">select category</option>
            <option value="food">Food</option>
            <option value="petrol">Petrol</option>
            <option value="salary">Salary</option>
        </select>
        </div>
        {!show ? <button className='p-2 px-6 rounded-lg m-2 bg-black text-white border-2 border-yellow-700'
            onClick={handleAddExpense}>
              Add Expense
        </button> :
        <button className='p-2 px-6 rounded-lg m-2 bg-black text-white border-2 border-yellow-700'
            onClick={handleUpdate}>
            update
        </button>}
        {totalExpenses >= 10000 && !isPremium && (
        <button className="p-2 px-6 rounded-lg m-2 bg-black text-white border-2 border-yellow-700" 
          onClick={handlePremiumActivation}>
          Activate Premium
        </button>
      )}
    </form>
    <div className='w-5/12 bg-slate-900 p-12 text-white m-8 mx-28 border-2 border-yellow-700' >
      <h1 className='m-1 border-b-2 border-black p-2 font-bold text-center'>Expense</h1>
        {expense.map((expenseItem) => (
          <ul className='flex border-b-2 border-black p-4 m-2' key={expenseItem.id}>
            <li className='m-2'>Amount {expenseItem.amount}</li>
            <li className='m-2'>Description {expenseItem.description}</li>
            <li className='m-2'>Category {expenseItem.category}</li>
            <button className='p-2 m-2 bg-red-800 rounded-lg' onClick={() => handleDelete(expenseItem.id)}>
                Delete
            </button>
            <button className='p-3 m-2 bg-lime-700 rounded-lg' onClick={() => handleEdit(
                expenseItem.id,
                expenseItem.amount,
                expenseItem.description,
                expenseItem.category
                )}>Edit
            </button>
          </ul>
        ))}
      </div>
    </div>
  );
};

    
export default ExpenseForm
