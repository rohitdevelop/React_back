import React, { useState, useCallback } from 'react';

// Expensive calculation function
const heavyCalculation = (num) => {
  console.log('Expensive Calculation Running...');
  let result = 0;
  for (let i = 0; i < 1000000000; i++) {
    result += i;
  }
  return result + num;
};

const ExpensiveCalculation = () => {
  const [count, setCount] = useState(0);
  const [otherCount, setOtherCount] = useState(0);

  // 🔁 useCallback to memoize the expensive calculation
  const calculate = useCallback(() => {
    return heavyCalculation(count);
  }, [count]); // Runs only when count changes

  return (
    <div className="text-center mt-20 text-2xl">
      <p>COUNT: {count}</p>
      <p>OTHER COUNT: {otherCount}</p>

      <button
        onClick={() => setCount(count + 1)}
        className="border-2 border-blue-500 p-2 m-4"
      >
        Calculate Heavy Task
      </button>

      <button
        onClick={() => setOtherCount(otherCount + 1)}
        className="border-2 border-green-500 p-2 m-4"
      >
        Increase Other Count
      </button>

      <p className="mt-6 text-4xl font-bold">Result: {calculate()}</p>
    </div>
  );
};

export default ExpensiveCalculation;


