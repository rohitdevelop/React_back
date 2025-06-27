import React, { useState } from "react";

const App = () => {
  const [count, setCount] = useState(0);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-purple-700 to-indigo-900 text-white">
      <h1 className="text-4xl font-bold mb-6">Tailwind Counter</h1>
      <p className="text-6xl font-semibold mb-8">{count}</p>
      <div className="flex gap-4">
        <button
          onClick={() => setCount(count - 1)}
          className="bg-red-500 hover:bg-red-600 px-6 py-3 rounded-lg text-white font-semibold shadow-md active:scale-95 transition"
        >
          Decrease
        </button>
        <button
          onClick={() => setCount(0)}
          className="bg-yellow-500 hover:bg-yellow-600 px-6 py-3 rounded-lg text-white font-semibold shadow-md active:scale-95 transition"
        >
          Reset
        </button>
        <button
          onClick={() => setCount(count + 1)}
          className="bg-green-500 hover:bg-green-600 px-6 py-3 rounded-lg text-white font-semibold shadow-md active:scale-95 transition"
        >
          Increase
        </button>
      </div>
    </div>
  );
};

export default App;
