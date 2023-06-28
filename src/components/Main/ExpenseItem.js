import React from 'react'

// Написать стили для списка, добавить крест для удаления трат

function ExpenseItem({id, name, cost, currency, deleteHandler }) {


  return (
    <li 
      className='expenses__expense'
    >
      <span className="expenses__name">{ name }</span>
      <div className="expenses__cost-box">
        <span className="expenses__cost">{ cost }{ currency }</span>
        <div 
          onClick={(e) => deleteHandler(id)}
          className="expenses__delete"
        />
      </div>
    </li>
  )
}

export default ExpenseItem