import React from 'react'

function CurrencyItem({ currency }) {

  return (
    <option className='header__option' value={currency}>{ currency }</option>
  )
}

export default CurrencyItem