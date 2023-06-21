import { createContext, useReducer } from "react"

const BudgetReducer = (state, action) => {
  switch(action.type) {
    default:
      return state
  }
}

const initialState = {
  budget: 2000,
  expenses : [
    { id: 12, name: 'shopping', cost: 40 },
    { id: 13, name: 'holiday', cost: 230 },
    { id: 14, name: 'care', cost: 450 }
  ]
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

    </BudgetContext.Provider>
  )
}