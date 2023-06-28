import React, { useContext } from 'react'
import '../../styles/expenses.scss'
import ExpenseItem from './ExpenseItem'
import { BudgetContext } from '../context/BudgetContext'

function Expenses({ currency }) {
  const { expenses, dispatch } = useContext(BudgetContext)

  const deleteHandler = (id) => {
    const newExpenses = expenses.filter(expense => {
      return expense.id !== id
    })

    dispatch({
      type: 'DELETE_EXPENSE',
      expenses: newExpenses,
    })
  }

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
              currency={currency}
              deleteHandler={deleteHandler}
            />
          )
        }))}
      </ul>
    </>
  )
}

export default Expenses