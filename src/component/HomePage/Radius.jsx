import React, { useState, useRef } from 'react';

const Redius= () => {
  const [inputNumber, setInputNumber] = useState('');
  const [count, setCount] = useState(0);
  const numberInputRef = useRef(null);

  const addNumber = () => {
    const enteredNumber = parseFloat(numberInputRef.current.value);

    if (!isNaN(enteredNumber)) {
      setCount(count + 1); // Increment the count

      // Clear the input field after adding
      numberInputRef.current.value = '';
    } else {
      // Handle invalid input
      alert('Please enter a valid number.');
    }
  };

  return (
    <div className="count-numbers-component">
      <h2>Count Numbers</h2>
      <input
        type="number"
        ref={numberInputRef}
        placeholder="Enter a number"
      />
      <button onClick={addNumber}>Count</button>
      <p>Count: {count}</p>
    </div>
  );
};

export default Redius;
