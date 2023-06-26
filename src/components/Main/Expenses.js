import React, { useContext } from 'react'
import '../../styles/expenses.scss'
import ExpenseItem from './ExpenseItem'
import { BudgetContext } from '../context/BudgetContext'

function Expenses() {
  const { expenses } = useContext(BudgetContext)

  return (
    <>
      <h2 className='expenses__title'>Expenses</h2>
      <ul className='expenses__list'>
        {expenses.map((expense => {
          return (
            <ExpenseItem 
              id={expense.id} 
              key={expense.id}
              name={expense.name} 
              cost={expense.cost} 
            />
          )
        }))}
      </ul>
    </>
  )
}

export default Expenses