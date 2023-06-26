import React from 'react'

// Написать стили для списка, добавить крест для удаления трат

function ExpenseItem({ id, name, cost}) {
  return (
    <li 
      className='expenses__expense'
    >
      <span className="expenses__name">{ name }</span>
      <span className="expenses__cost">{ cost }</span>
    </li>
  )
}

export default ExpenseItem