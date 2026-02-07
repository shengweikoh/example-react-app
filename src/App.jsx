import './App.css'

import { useState } from 'react' 

import CurrencyDropdown from './CurrencyDropdown';
import CurrencyContext from './contexts/CurrencyContext.jsx'

function App() {
  const [fromCurrency, setFromCurrency] = useState('AED')
  const [toCurrency, setToCurrency] = useState('AED')

  return (
    <>
    <CurrencyContext.Provider value={{ fromCurrency, setFromCurrency, toCurrency, setToCurrency }}>
      <h1>Currency Converter</h1>
      <CurrencyDropdown />
    </CurrencyContext.Provider>
    </>
  )
}

export default App;
