import { createContext, useReducer } from "react"


const BudgetReducer = (state, action) => {
  switch(action.type) {
    case 'ADD_EXPENSE':
      localStorage.setItem('expenses', JSON.stringify([...state.expenses, action.expense]))
      return {
        ...state,
        expenses: JSON.parse(localStorage.getItem('expenses'))
      }
    
      case 'DELETE_EXPENSE':
      localStorage.setItem('expenses', JSON.stringify(action.expenses))

      return {
        ...state,
        expenses: JSON.parse(localStorage.getItem('expenses'))
      }
    default:
      return state
  }
}

const initialState = {
  budget: 2000,
  expenses : JSON.parse(localStorage.getItem('expenses'))
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

