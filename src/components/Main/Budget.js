import React, { useContext } from 'react'
import '../../styles/budget.scss'
import { BudgetProvider } from '../context/BudgetContext'
import Cash from './Cash'
import Expenses from './Expenses'
import ExpenseForm from './ExpenseForm'
import Remaining from './Remaining'
import Spent from './Spent'
import { CurrencyContext } from '../context/CurrencyContext'

function Budget() {
  const { currency } = useContext(CurrencyContext)


  return (
    <BudgetProvider>
      <main className="main">
        <div className="main__container container">
          <section className="budget">
            <Cash currency={currency} />
            <Remaining currency={currency} />
            <Spent currency={currency} />
          </section>
          <section className="expenses">
            <Expenses currency={currency}/>
          </section>
          <section className="expenses-form">
            <ExpenseForm />
          </section>
        </div>
      </main>
    </BudgetProvider>
  )
}

export default Budget