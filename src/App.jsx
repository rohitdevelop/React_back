 import React from 'react'
 import { axios } from "axios";
  // import  Card  from "./components/Card.jsx";
  const App = () => {
 
   async function handle() {
      await axios("deta aa gya")
    }
 
 return (
     <div>
      {/* <Card /> */}
<button onClick={handle} className="bg-amber-900 text-amber-50 py-4 px-4">click me </button>
      {/* <h1>hello </h1> */}
      </div>
   )
 }
 
 export default App
 