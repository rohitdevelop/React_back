import React, { useState } from "react";

const App = () => {
  const [count, setCount] = useState(0);
  const [text, setText] = useState("");

  function incrbtn() {
    setCount((prev) => prev + 1);
    setText(' ')
  }

  function decrbtn() {
    if (count > 0) {
      setCount((prev) => prev - 1);
    } else {
      setText("bas kr bhat");
    }
  }
  function rebtn() {
    setCount(0);
    setText(' ')
  }
  return (
    <div>
      <h1>change the number</h1>
      <p>{count}</p>
      <span>{text}</span>
      <button onClick={incrbtn}>increment</button>
      <button onClick={rebtn}>resent</button>
      <button onClick={decrbtn}>decrement</button>
    </div>
  );
};

export default App;
