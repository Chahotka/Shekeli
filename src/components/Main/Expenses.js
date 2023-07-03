import React, { useContext, useState } from 'react'
import '../../styles/expenses.scss'
import ExpenseItem from './ExpenseItem'
import { BudgetContext } from '../context/BudgetContext'

function Expenses({ currency }) {
  const [value, setValue] = useState('')
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
      <input 
        value={value}
        onChange={(e) => setValue(e.target.value)}
        className='expenses__input' 
        placeholder='Search for expense' 
        type="text" 
      />
      <ul className='expenses__list'>
        {expenses.filter(expense => expense.name.toLocaleLowerCase().includes(value))
        .map((expense => {
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