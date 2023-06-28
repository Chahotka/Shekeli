import { createContext, useReducer } from "react"

const CurrencyReducer = (state, action) => {
  switch(action.type) {
    case 'SET_CURRENCY':
      return {
        ...state,
        currency: action.value,
      }
    default:
      return state
  }
}

const initialState = {
  currency: '₽',
  currencyList: ['₽', '€', '$', '£', '¥', '₩']
}

export const CurrencyContext = createContext()

export const CurrencyProvider = (props) => {
  const [state, dispatch] = useReducer(CurrencyReducer, initialState)

  return (
    <CurrencyContext.Provider
      value={{
        currency: state.currency,
        currencyList: state.currencyList,
        dispatch
      }}
    >
      { props.children }
    </CurrencyContext.Provider>
  )
}