import React, { useState, useEffect } from "react";

const App = () => {
  const [count, setCount] = useState(0);
  const [text, setText] = useState("hello world");

  useEffect(() => {
    const timer = setTimeout(() => {
      setText(`You clicked ${count} times`);
    }, 3000);

    return () => clearTimeout(timer); // cleanup to avoid overlaps
  }, [count]); // run when count changes

  return (
    <div className="bg-black text-white p-4">
      <h1>{text}</h1>
      <button onClick={() => setCount(count + 1)}>Click me</button>
      <p>Count: {count}</p>
    </div>
  );
};

export default App;
