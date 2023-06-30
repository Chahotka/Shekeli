import React, { useContext, useState } from 'react'
import { BudgetContext } from '../context/BudgetContext'

function BudgetInput({ currency, setCash, value, setValue }) {
  const { dispatch } = useContext(BudgetContext)

  const inputHandler = (e) => {
    if (e.key === 'Escape' || e.key === 'Enter') {
      e.target.blur()
      setCash(false)

      if (value.length > 0) {
        dispatch({
          type: 'CHANGE_BUDGET',
          budget: parseInt(value)
        })
      }
    }
  }

  return (
    <div className="budget__input">
      <label className='budget__label' htmlFor="expenseName">Budget:</label>
      <input 
        autoFocus
        id='expenseName'
        type="number" 
        value={value} 
        onChange={(e) => setValue(e.target.value)} 
        onKeyDown={(e) => inputHandler(e)}
    />
    </div>
  )
}

export default BudgetInput