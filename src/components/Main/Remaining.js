import React from 'react'
import useRemaining from '../hooks/useRemaining'

function Remaining({ currency }) {
  const { remaining } = useRemaining()


  return (
    <div className="budget__remaining budget__item">
      <span>Remaining: { remaining }{ currency }</span>
    </div>
  )
}

export default Remaining