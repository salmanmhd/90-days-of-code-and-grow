import { createContext, useContext, useReducer } from 'react';
const initialState = {
  balance: 3000,
  totalIncome: 5000,
  totalExpense: 2000,
  incomes: [
    {
      amount: 5000,
      date: '2022-01-01',
      source: 'pocket money',
      id: 1,
    },
    {
      amount: 20000,
      date: '2024-01-01',
      source: 'free lancing',
      id: 2,
    },
  ],
  expenses: [
    {
      amount: 500,
      expense: 'Groceries',
      category: 'food',
      date: '2022-01-01',
      id: 1,
    },
    {
      amount: 200,
      expense: 'Dinner',
      category: 'food',
      date: '2024-01-02',
      id: 2,
    },
    {
      amount: 100,
      expense: 'banana',
      category: 'health',
      date: '2023-01-03',
      id: 3,
    },
  ],
};
const BankContext = createContext();

function reducer(state, action) {
  switch (action.type) {
    case 'addIncome':
      return {
        ...state,
        totalIncome: state.totalIncome + action.payload.amount,
        balance: state.balance + action.payload.amount,
        incomes: [...state.incomes, action.payload],
      };
    case 'AddExpense':
      return {
        ...state,
        expenses: [...state.expenses, action.payload],
        balance: state.balance - action.payload.amount,
        totalExpense: state.totalExpense + action.payload.amount,
      };

    default:
      throw new Error('Invalid action');
  }
}

function BankProvider({ children }) {
  const [{ balance, totalIncome, totalExpense, expenses, incomes }, dispatch] =
    useReducer(reducer, initialState);
  return (
    <BankContext.Provider
      value={{
        balance,
        totalIncome,
        totalExpense,
        expenses,
        dispatch,
        incomes,
      }}
    >
      {children}
    </BankContext.Provider>
  );
}

function useBank() {
  const context = useContext(BankContext);
  if (!context) {
    throw new Error('useBank must be used within a BankProvider');
  }
  return context;
}
export { useBank, BankProvider };
