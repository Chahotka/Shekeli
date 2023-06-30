import React, { useContext } from 'react'
import { BudgetContext } from '../context/BudgetContext'

function Spent({ currency }) {
  const { expenses } = useContext(BudgetContext)

  return (
    <div className="budget__spent budget__item">
      <span>
        Spent: { expenses.length > 0 ? expenses.reduce((acc, val) => acc + val.cost, 0) : 0 }{ currency }
      </span>
    </div>
  )
}

export default Spent