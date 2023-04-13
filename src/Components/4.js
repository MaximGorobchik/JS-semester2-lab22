import React, { useState } from 'react';

function Task_4() {
    const [cities, setCities] = useState([]);
    const [selectedCity, setSelectedCity] = useState('');

    const handleAddCity = () => {
        const input = document.getElementById('cityInput');
        const newCity = input.value;
        setCities([...cities, newCity]);
        input.value = '';
    };

    const handleCitySelect = (event) => {
        setSelectedCity(event.target.value);
    };

    return (
        <div className="Tasks">
            <input type="text" id="cityInput" />
            <button onClick={handleAddCity}>Add City</button>
            <select value={selectedCity} onChange={handleCitySelect}>
                {cities.map((city, index) => (
                    <option key={index} value={city}>
                        {city}
                    </option>
                ))}
            </select>
            <p>{selectedCity ? selectedCity : "Select city!"}</p>
        </div>
    );
}

export default Task_4;