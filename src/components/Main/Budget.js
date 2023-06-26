import React from 'react'
import '../../styles/budget.scss'
import { BudgetProvider } from '../context/BudgetContext'
import Cash from './Cash'
import Expenses from './Expenses'
import ExpenseForm from './ExpenseForm'
import Remaining from './Remaining'
import Spent from './Spent'
import { CurrencyProvider } from '../context/CurrencyContext'

function Budget() {
  return (
    <BudgetProvider>
      <main className="main">
        <div className="main__container container">
          <section className="budget">
            <CurrencyProvider>
              <Cash />
              <Remaining />
              <Spent />
            </CurrencyProvider>
          </section>
          <section className="expenses">
            <Expenses />
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