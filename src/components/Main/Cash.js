import React, { useContext, useState } from 'react'
import { BudgetContext } from '../context/BudgetContext'
import BudgetInput from './BudgetInput'

// dopisat izmen budjeta

function Cash({ currency }) {
  const [cash, setCash] = useState(false)
  const [value, setValue] = useState('')
  const { budget, dispatch } = useContext(BudgetContext)

  const cashHandler = () => {
    if (cash && value.length > 0) {
      dispatch({
        type: 'CHANGE_BUDGET',
        budget: value
      })
    }

    setValue('')
    setCash(prev => !prev)
  }

  return (
    <div className="budget__cash budget__item">
      { cash 
        ?<BudgetInput 
          currency={currency} 
          value={value}
          setValue={setValue}
          setCash={setCash}
        />
        :<span>Budget: { budget }{ currency }</span>
      }
      <button 
        onClick={() => cashHandler()}
        className="budget__button"
      >
        { cash ? <span>Save</span> : <span>Edit</span>}
      </button>
    </div>
  )
}

export default Cash