import React from 'react'
import useRemaining from '../hooks/useRemaining'

function Remaining({ currency }) {
  const { remaining } = useRemaining()

  return (
    <p className='budget__remaining budget__item'>Remaining: { remaining }{ currency }</p>
  )
}

export default Remaining