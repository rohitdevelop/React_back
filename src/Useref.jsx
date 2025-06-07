import React, { useRef,useState } from 'react';

const Useref = () => {
  const headingRef = useRef();
const [isred , setIsred] = useState(false)



  function btnClick() {
    if (headingRef.current) {
      headingRef.current.style.color = isred ? 'red' : "black"
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
    </div>
  );
};

export default Useref;
