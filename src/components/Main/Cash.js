import React, { useContext } from 'react'
import { BudgetContext } from '../context/BudgetContext'
import { CurrencyContext } from '../context/CurrencyContext'

function Cash() {
  const { budget } = useContext(BudgetContext)
  const { currency } = useContext(CurrencyContext)
  console.log(currency)

  return (
    <p className="budget__cash budget__item">Budget: { budget }{ currency }</p>
  )
}

export default Cash