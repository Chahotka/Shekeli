import { createContext, useReducer } from "react"

const BudgetReducer = (state, action) => {
  switch(action.type) {
    case 'ADD_EXPENSE':
      return {
        ...state,
        expenses: [...state.expenses, action.expense]
      }
    default:
      return state
  }
}

const initialState = {
  budget: 2000,
  expenses : []
}

export const BudgetContext = createContext();

export const BudgetProvider = (props) => {
  const [state, dispatch] = useReducer(BudgetReducer, initialState)

  return (
    <BudgetContext.Provider 
      value={{
        budget: state.budget,
        expenses: state.expenses,
        dispatch
      }}
    >
      { props.children }
    </BudgetContext.Provider>
  )
}

