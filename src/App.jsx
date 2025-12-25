import React, { useState } from "react";

const App = () => {
  const [count, setCount] = useState(0);

  return (
    <div className="text-center flex gap-10">
      <h1 className="text-5xl font-extrabold ">{count}</h1>
      <button
        className="py-2 px-20 border-2 border-amber-800"
        onClick={() => setCount(count + 1 )}
      >
        increse
      </button>
      <button
        className="py-2 px-20 border-2 border-amber-800"
        onClick={() => setCount(count - 1)}
      >
        decrec
      </button>
      <button
        className="py-2 px-20 border-2 border-amber-800"
        onClick={() => setCount(count + 5 ) }
      >
        jumo 5 time{" "}
      </button>
    </div>
  );
};

export default App;
