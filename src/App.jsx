// // import React, { useState, useEffect } from "react";
// // import Card from "./components/Card";
// // import Home from "./components/Home";
// // import axios from "axios";
// // const App = () => {
// //   const [pokemon, setPokemon] = useState([]);

// //   const deta = async () => {
// //     let respose = await axios.get("https://pokeapi.co/api/v2/pokemon");
// //     let resposdeta = respose.data.results;
// //     setPokemon(resposdeta);
// //   };
// //   useEffect(() => {
// //     deta();
// //   }, []);
// //   return (
// //     <div>
// //       {/* <Card /> */}
// //       {/* <Home /> */}
// //       <button onClick={deta} className="py-3 px-7">click me</button>
// //       <div className="">
// //         {pokemon.map((item, idx) => (
// //           <h1 key={idx}>{item.name}</h1>
// //         ))}
// //       </div>
// //     </div>
// //   );
// // };

// // export default App;

// import React from "react";
// import { Routes, Route } from "react-router-dom";
// import Card from "./components/Card";
// import Home from "./components/Home";
// import Navbar from "./components/Navbar";
// import Shinup from "./components/Shinup";
// import Login from "./components/Login";
// import QueryParams from "./components/QueryParams";
// const App = () => {
  
  
  //   return (
    //     <div>
    //       <Navbar />
    //       <br />
    //       <Routes>
    //         <Route path={"/"} element={<Home />} />
    //         <Route path={"/card"} element={<Card />} />
    //         <Route path={"/login"} element={<Login />} />
    //         <Route path={"/shinup/:userid"} element={<Shinup />} />
    //         <Route path={"/queryparams"} element={<QueryParams />} />
    //       </Routes>
    //     </div>
    //   );
    // };
    
    // export default App;
    
    
    import React from 'react'
   import Navbar from "./components/Navbar";
   import AllSection from "./components/AllSection";
   import Footer from "./components/Footer";
const App = () => {
  return (
    <div>
      <Navbar>
 <div>
  <section>
    <h1>hello </h1>
  </section>
 </div>
        </Navbar>
      <AllSection>
        <h1>hello re</h1>
        <h1>helluu re</h1>
      </AllSection>
      <Footer/>
    </div>
  )
}

export default App
