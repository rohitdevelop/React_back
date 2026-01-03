import React, { useState, useEffect } from "react";
// import Card from "./components/Card";
// import Home from "./components/Home";
import axios from "axios";
const App = () => {
  const [pokemon, setPokemon] = useState([]);

  const deta = async () => {
    let respose = await axios.get("https://pokeapi.co/api/v2/pokemon");
    let resposdeta = respose.data.results;
    setPokemon(resposdeta);
  };
  useEffect(() => {
    deta();
  }, []);
  return (
    <div>
      {/* <Card /> */}
      {/* <Home /> */}
      <button onClick={deta} className="py-3 px-7">click me</button>
      <div className="">
        {pokemon.map((item, idx) => (
          <h1 key={idx}>{item.name}</h1>
        ))}
      </div>
    </div>
  );
};

export default App;
