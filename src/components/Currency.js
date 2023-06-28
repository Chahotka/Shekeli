import React, { useContext } from 'react'
import { CurrencyContext } from './context/CurrencyContext'
import CurrencyItem from './CurrencyItem'

function Currency() {
  const { currencyList, dispatch } = useContext(CurrencyContext)

  const handleChange = (e) => {
    dispatch({
      type: `SET_CURRENCY`,
      value: e.target.value
    })
  }

  return (
    <select 
      onChange={(e) => handleChange(e)}
      className='header__select' 
      name="currency"
    >
      {currencyList.map((currency) => {
        return (
          <CurrencyItem 
            key={currency}
            currency={currency}
          />
        )
      })}
    </select>
  )
}

export default Currency