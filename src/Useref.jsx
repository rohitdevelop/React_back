import React, { useRef, useState } from "react";

const Useref = (props) => {
  const headingRef = useRef();
  const [isred, setIsred] = useState(false);

  function btnClick() {
    if (headingRef.current) {
      headingRef.current.style.color = isred ? "red" : "black";
      setIsred(!isred);
    }
  }

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center">
      <h1 ref={headingRef} className="text-4xl font-bold mb-6 text-gray-800">
        Hello useRef
      </h1>
      <button
        onClick={btnClick}
        className="px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition duration-300"
      >
        Click Me to Change Color
      </button>

      <h1 className="text-3xl font-bold mb-4 text-blue-600">State Lifting</h1>

      <input
        type="text"
        onChange={(e) => props.setname(e.target.value)}
        className="border border-gray-300 p-2 rounded w-64 mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
        placeholder="Enter your name"
      />

      <p className="text-lg">Hello, my input is <span className="font-semibold text-green-600">{props.name}</span></p>
    </div>
  );
};

export default Useref;
