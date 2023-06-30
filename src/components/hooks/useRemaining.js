import React, { useContext, useEffect, useState } from 'react'
import { BudgetContext } from '../context/BudgetContext'

function useRemaining() {
  const [remaining, setRemaining] = useState(0)
  const { budget, expenses } = useContext(BudgetContext)

  useEffect(() => {
    setRemaining(
      budget - expenses.reduce((acc, val) => acc + val.cost, 0)
    )
  }, [expenses, budget])

  return { remaining }
}

export default useRemaining