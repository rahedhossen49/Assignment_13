import React, { useState, useRef } from 'react';

const LeapYear = () => {
  const [inputNumber, setInputNumber] = useState('');
  const [total, setTotal] = useState(0);
  const numberInputRef = useRef(null);

  const addNumber = () => {
    const enteredNumber = parseFloat(numberInputRef.current.value);

    if (!isNaN(enteredNumber)) {
      setTotal(total + enteredNumber);

      // Clear the input field after adding
      numberInputRef.current.value = '';
    } else {
      // Handle invalid input
      alert('Please enter a valid number.');
    }
  };

  return (
    <div className="sum-numbers-component">
      <h2>Sum Numbers</h2>
      <input
        type="number"
        ref={numberInputRef}
        placeholder="Enter a number"
      />
      <button onClick={addNumber}>Sum</button>
      <p>Total: {total}</p>
    </div>
  );
};

export default LeapYear;
