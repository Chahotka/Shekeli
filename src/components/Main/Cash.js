import React, { useContext } from 'react'
import { BudgetContext } from '../context/BudgetContext'

function Cash({ currency }) {
  const { budget } = useContext(BudgetContext)

  return (
    <p className="budget__cash budget__item">Budget: { budget }{ currency }</p>
  )
}

export default Cash