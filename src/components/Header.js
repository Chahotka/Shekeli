import React from 'react'
import '../styles/header.scss'
import Currency from './Currency'
import { CurrencyProvider } from './context/CurrencyContext'

function Header() {
  return (
      <header className="header">
        <div className="header__container container">
          <div className="header__title">Shekeli</div>
          <Currency />
        </div>
      </header>
  )
}

export default Header