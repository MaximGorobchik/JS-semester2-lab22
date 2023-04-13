import React, { useState } from 'react';

const currencyRates = {
    USD: 1,
    EUR: 0.91,
    GBP: 0.80,
    JPY: 132.54,
};

const Task_5 = () => {
    const [amount, setAmount] = useState(0);
    const [currencyFrom, setCurrencyFrom] = useState('USD');
    const [currencyTo, setCurrencyTo] = useState('EUR');
    const [convertedAmount, setConvertedAmount] = useState(0);

    const handleConvert = () => {
        const rateFrom = currencyRates[currencyFrom];
        const rateTo = currencyRates[currencyTo];
        const converted = (amount / rateFrom) * rateTo;
        setConvertedAmount(converted.toFixed(2));
    };

    return (
        <div>
            <div>
                <label>
                    Amount:
                    <input
                        type="number"
                        value={amount}
                        onChange={(event) => setAmount(event.target.value)}
                    />
                </label>
            </div>
            <div>
                <label>
                    From:
                    <select
                        value={currencyFrom}
                        onChange={(event) => setCurrencyFrom(event.target.value)}
                    >
                        {Object.keys(currencyRates).map((currency) => (
                            <option key={currency} value={currency}>
                                {currency}
                            </option>
                        ))}
                    </select>
                </label>
            </div>
            <div>
                <label>
                    To:
                    <select
                        value={currencyTo}
                        onChange={(event) => setCurrencyTo(event.target.value)}
                    >
                        {Object.keys(currencyRates).map((currency) => (
                            <option key={currency} value={currency}>
                                {currency}
                            </option>
                        ))}
                    </select>
                </label>
            </div>
            <div>
                <button onClick={handleConvert}>Convert</button>
            </div>
            <div>
                {amount} {currencyFrom} = {convertedAmount} {currencyTo}
            </div>
        </div>
    );
};

export default Task_5;