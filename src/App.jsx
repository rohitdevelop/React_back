import React from "react";
import { Routes,Route } from "react-router-dom";
import Navbar from "./Navbar";
import Home from "./Home";
import Login from "./components/Login";
import Shinup from "./components/Shinup";
const App = () => {
  return (
    <>
    <Navbar name={"rohit singh"} />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Shinup />} />
    </Routes>
    </>
  );
};

export default App;
