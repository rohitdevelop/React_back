import React, { useState, useEffect } from "react";

const UseEffect = () => {
  const [count, setCount] = useState(0);
  const [seconds, setSeconds] = useState(0);
  const [isRunning, setIsRunning] = useState(false); 

  const countbtn = () => {
    setCount(count + 1);
  };

  const secbtn = () => {
    setIsRunning(true);
  };

  useEffect(() => {
    console.log(`Counter changed: ${count}`);
  }, [count]);

  useEffect(() => {
    if (isRunning) {
      const interval = setInterval(() => {
        console.log("Timer is running...");
        setSeconds((s) => s + 1);
      }, 1000);

      return () => {
        clearInterval(interval);
        console.log("Timer stopped.");
      };
    }
  }, [isRunning]);

  return (
    <div className="flex flex-col items-center justify-center gap-4 p-6 bg-gray-100 rounded-2xl shadow-xl w-fit mx-auto mt-10">
      <p className="text-xl font-semibold text-gray-800">
        Count is: <span className="text-amber-700 font-bold">{count}</span>
      </p>

      <button
        className="bg-amber-700 text-white text-lg font-bold px-6 py-2 rounded-lg hover:bg-amber-800 active:scale-110"
        onClick={countbtn}
      >
        Click to Change Count
      </button>

      <p className="text-lg text-gray-700">
        Seconds: <span className="font-medium">{seconds}</span>
      </p>

      <button
        onClick={secbtn}
        className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition duration-300"
      >
        Start Timer
      </button>
    </div>
  );
};

export default UseEffect;
