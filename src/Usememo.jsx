import React, { useState, useMemo } from 'react';

const Usememo = () => {
  const [num, setNum] = useState(0);
  const [plus, setPlus] = useState(0);

function conter() {
  if (plus === 0) {
    setNum(num + 1);
  } else {
    setNum(num + dhamal);
  }
}


  function doublefun(cont) {
    console.log('Heavy Calculation Running...');
    let result = 0;
    for (let i = 0; i < 1000000000; i++) { // Heavy loop to simulate slow process
      result = cont * 2;
    }
    return result;
  }

  const dhamal = useMemo(() => doublefun(plus), [plus]);

  return (
    <div className="min-h-screen flex justify-center items-center bg-gradient-to-r from-blue-100 to-purple-200">
      <div className="bg-white p-8 rounded-xl shadow-lg text-center space-y-6 w-11/12 max-w-md">
        <h1 className="text-3xl font-bold text-gray-800 mb-4">React Counter with useMemo</h1>

        <button
          onClick={conter}
          className="bg-blue-500 text-white px-6 py-3 rounded-md hover:bg-blue-600 transition duration-300 font-semibold shadow"
        >
          CLICK ME
        </button>

        <p className="text-2xl font-semibold text-gray-700">
          COUNTER: <span className="text-blue-600">{num}</span>
        </p>

        <input
          type="number"
          placeholder="Enter a number"
          onChange={(e) => setPlus(Number(e.target.value))}
          className="w-full border border-gray-300 px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        <p className="text-2xl font-semibold text-gray-700">
          DOUBLE: <span className="text-purple-600">{dhamal}</span>
        </p>
      </div>
    </div>
  );
};

export default React.memo(Usememo);
