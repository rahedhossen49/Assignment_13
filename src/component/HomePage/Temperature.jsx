import React, { useState, useRef } from 'react';

const Temperature = () => {
  const [celsius, setCelsius] = useState('');
  const [fahrenheit, setFahrenheit] = useState('');
  const celsiusInputRef = useRef(null);

  const convertToFahrenheit = () => {
    const enteredCelsius = parseFloat(celsiusInputRef.current.value);

    if (!isNaN(enteredCelsius)) {
      const convertedFahrenheit = (enteredCelsius * 9/5) + 32;
      setFahrenheit(convertedFahrenheit.toFixed(2)); // Round to two decimal places
    } else {
      setFahrenheit('Please enter a valid temperature in Celsius.');
    }
  };

  return (
    <div className='home-component-page'>
      <h2>Celsius to Fahrenheit</h2>
      <input
        type="text"
        ref={celsiusInputRef}
        placeholder="Enter temperature in Celsius"
      />
      <button onClick={convertToFahrenheit}>Convert</button>
      <p>Fahrenheit: {fahrenheit}°F</p>
    </div>
  );
};

export default Temperature;

