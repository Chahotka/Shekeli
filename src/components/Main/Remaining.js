import React, { useContext } from 'react'
import useRemaining from '../hooks/useRemaining'

function Remaining() {
  const { remaining } = useRemaining()

  return (
    <p className='budget__remaining budget__item'>Remaining: { remaining }</p>
  )
}

export default Remaining