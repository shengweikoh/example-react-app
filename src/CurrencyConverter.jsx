import './CurrencyConverter.css'

import { useState, useEffect, useContext } from 'react'
import CurrencyContext from './contexts/CurrencyContext'

const CurrencyConverter = () => {
    const currencyContextValue = useContext(CurrencyContext)
    const { fromCurrency, toCurrency } = currencyContextValue
    const [fromAmount, setFromAmount] = useState(1)
    const [toAmount, setToAmount] = useState(2)

    // How often/When should the API request be executed?
    // This should run whenever the user changes a currency
    useEffect(() => {
        fetch(`https://v6.exchangerate-api.com/v6/f8b4bd6c4f8064fb7d2906ea/pair/${fromCurrency}/${toCurrency}/${fromAmount}`)
        .then(response => {
            return response.json()
        })
        .then(data => {
            setToAmount(data.conversion_result)
        })
    }, [fromCurrency, toCurrency, fromAmount])

    return (
        <div className="container">
            <input
                value={fromAmount}
                placeholder="Enter amount"
                className="converter-input"
                onChange={(event) => {
                    setFromAmount(event.target.value)

                    // Replace this with the result from the conversion API request
                    // setToAmount(2 * event.target.value)
                }}
            />
            <p>{fromCurrency}</p>
            <p>=</p>
            <p>{toAmount}</p>
            <p>{toCurrency}</p>
        </div>
    )
}

export default CurrencyConverter