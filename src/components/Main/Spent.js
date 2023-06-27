import React, { useContext } from 'react'
import { BudgetContext } from '../context/BudgetContext'

function Spent({ currency }) {
  const { expenses } = useContext(BudgetContext)

  return (
    <p className='budget__spent budget__item'>
      Spent: { expenses.reduce((acc, val) => acc + val.cost, 0) }{ currency }
    </p>
  )
}

export default Spent