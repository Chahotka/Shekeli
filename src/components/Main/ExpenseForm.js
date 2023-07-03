import React, { useContext, useState } from 'react'
import '../../styles/expense-form.scss'
import { BudgetContext } from '../context/BudgetContext'
import { v4 } from 'uuid'

function ExpenseForm() {
  const [name, setName] = useState('')
  const [cost, setCost] = useState('')
  const { dispatch } = useContext(BudgetContext)

  const onSubmit = (e) => {
    e.preventDefault()

    if (name.length < 1 || cost.length < 1) {
      return
    }

    const expense = {
      id: v4(),
      name: name.trim(),
      cost: parseInt(cost)
    }

    dispatch({
      type: 'ADD_EXPENSE',
      expense
    })

    setName('')
    setCost('')
  }


  return (
    <>
      <h2 className='expenses__title'>Add expense</h2>
      <form onSubmit={onSubmit} className='form'>
        <div className="form__field">
          <label className='form__label' htmlFor='name'>Name</label>
          <input 
            id='name'
            type='text'
            value={name}
            className='form__input'
            autoComplete='off'
            placeholder='Enter an expense name'
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="form__field">
          <label className='form__label' htmlFor='cost'>Cost</label>
          <input 
            id='cost'
            type='number' 
            value={cost}
            className='form__input'
            placeholder='Enter cost'
            onChange={(e) => setCost(e.target.value)}
          />
        </div>
        <button type='submit' className='form__button'>Add</button>
      </form>
    </>
  )
}

export default ExpenseForm