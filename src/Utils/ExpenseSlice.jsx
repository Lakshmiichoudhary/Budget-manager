import { createSlice } from "@reduxjs/toolkit";

const expenseSlice = createSlice({
  name: "expenses",
  initialState: {
    expenses: [],
  },
  reducers: {
    addExpense: (state, action) => {
      state.expenses.push(action.payload);
    },
    removeExpense: (state, action) => {
      state.expenses = state.expenses.filter((expense) => expense.id !== action.payload);
    },
  },
  updateExpense: (state, action) => {
    const { id, updatedExpense } = action.payload;
    const index = state.expenses.findIndex((expense) => expense.id === id);
    if (index !== -1) {
      state.expenses[index] = updatedExpense;
    }
  },
});

export const { addExpense, removeExpense,updateExpense } = expenseSlice.actions;
export default expenseSlice.reducer;
