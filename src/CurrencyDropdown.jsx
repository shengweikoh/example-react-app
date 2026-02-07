// don't forget your imports
import { useEffect, useState, useContext } from 'react'

import './CurrencyDropdown.css'
import CurrencyContext from './contexts/CurrencyContext.jsx'

import CurrencyConverter from './CurrencyConverter.jsx'

const CurrencyDropdown = () => {
    const currencyContextValue = useContext(CurrencyContext)
    const { setFromCurrency, setToCurrency } = currencyContextValue
    const [currencyList, setCurrencyList] = useState([])

    const mockData = {
        "supported_codes": [
            [
                "AED",
                "UAE Dirham"
            ],
            [
                "AFN",
                "Afghan Afghani"
            ],
            [
                "ALL",
                "Albanian Lek"
            ],
            [
                "XPF",
                "CFP Franc"
            ],
            [
                "ZWG",
                "Zimbabwean Dollar"
            ],
            [
                "ZWL",
                "Zimbabwean Dollar"
            ]
        ]
    }

    // how do I fetch the list of currencies?
    // which API do I use?
    // how many times should the useEffect hook run?
    useEffect(() => {
        // fetch("https://v6.exchangerate-api.com/v6/f8b4bd6c4f8064fb7d2906ea/codes")
        //     .then(response => {
        //         return response.json()
        //     })
        //     .then(data => {
        //         setCurrencyList(data.supported_codes)
        //     })

        setCurrencyList(mockData.supported_codes)
    }, [])

    // [
    //     "AED",
    //     "UAE Dirham"
    // ],
    const renderDropdownOptions = () => {
        return currencyList.map(currencyArray => {
            return <option value={currencyArray[0]}>{currencyArray[1]}</option>
        })
    }

    return (
        <>
        <div className="container">
            <p>I want to convert</p>
            <select 
              name="currency"
              id="currencySelect"
              onChange={(event) => {
                setFromCurrency(event.target.value)
              }}
            >
                {renderDropdownOptions()}
            </select>
            <p>to</p>
            <select 
                name="currency"
                id="currencySelect"
                onChange={(event) => {
                    setToCurrency(event.target.value)
                }}
            >
                {renderDropdownOptions()}
            </select>
        </div>
        <CurrencyConverter 
            // fromCurrency={fromCurrency}
            // toCurrency={toCurrency}
        />
        </>
    )
}

export default CurrencyDropdown