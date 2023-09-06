import { createContext, useReducer } from "react";

const DUMMY_EXPENSES = [
    {
      id: "e1",
      description: "A pair of shoes",
      amount: 59.99,
      date: new Date("2021-12-19"),
    },
    {
      id: "e2",
      description: "A pair of boos",
      amount: 69.99,
      date: new Date("2021-01-19"),
    },
    {
      id: "e3",
      description: "A pair of noos",
      amount: 79.99,
      date: new Date("2021-08-19"),
    },
    {
      id: "e4",
      description: "A pair of noos",
      amount: 79.99,
      date: new Date("2021-08-19"),
    },
    {
      id: "e5",
      description: "A pair of noos",
      amount: 79.99,
      date: new Date("2021-08-19"),
    },
    {
      id: "e6",
      description: "A pair of shoes",
      amount: 59.99,
      date: new Date("2021-12-19"),
    },
    {
      id: "e7",
      description: "A pair of boos",
      amount: 69.99,
      date: new Date("2021-01-19"),
    },
    {
      id: "e8",
      description: "A pair of noos",
      amount: 79.99,
      date: new Date("2021-08-19"),
    },
    {
      id: "e9",
      description: "A pair of noos",
      amount: 79.99,
      date: new Date("2021-08-19"),
    },
    {
      id: "e10",
      description: "A pair of noos",
      amount: 79.99,
      date: new Date("2021-08-19"),
    },
    {
        id: "e11",
        description: "A pair of shoes",
        amount: 59.99,
        date: new Date("2021-9-2"),
      },
  ];

export const ExpenseContext = createContext({
  expenses: [],
  addExpense: ({ description, amount, date }) => {},
  deleteExpense: (id) => {},
  updateExpense: (id, { description, amount, date }) => {},
});

function expensesReducer(state, action) {
  switch (action.type) {
    case "ADD":
      const id = new Date().toString() + Math.random().toString();
      return [{ ...action.payload, id: id }, ...state];
    case "UPDATE":
        const updatableExpenseIndex= state.findIndex((expense)=> expense.id === action.payload.id);
        const updatableExpense=state[updatableExpenseIndex];
        const updatedItem ={...updatableExpense,...action.payload.data};
        const updatedExpenses=[...state];
        updatedExpenses[updatableExpenseIndex]=updatedItem;
        return updatedExpenses;
    case "DELETE":
        return state.filter((expense)=> expense.id !== action.payload);
    default:
      return state;
  }
}
function ExpenseContextProvider({ children }) {
  const [expenseState, dispatch] = useReducer(expensesReducer,DUMMY_EXPENSES);
  function addExpense({ expenseData }) {
    dispatch({ type: "ADD", payload: expenseData });
  }
  function deleteExpense(id) {
    dispatch({ type: "DELETE", payload: id });
  }
  function updateExpense(id, expenseData) {
    dispatch({ type: "UPDATE", payload: { id: id, data: expenseData } });
  }
   
  const value ={
    expenses:expenseState,
    addExpense: addExpense,
    deleteExpense: deleteExpense,
    updateExpense: updateExpense
  };
  return <ExpenseContext.Provider value={value}>{children}</ExpenseContext.Provider>;
}

export default ExpenseContextProvider;
