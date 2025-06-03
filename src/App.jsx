import React, { useState, useEffect, createContext } from "react";
import { Routes, Route } from "react-router-dom";
import UseEffect from "./UseEffect.jsx";
import UseContextComponent from "./UseContextComponent.jsx";
import Navbar from "./Navbar.jsx";
import Home from "./Home.jsx";

// Create context
export const UserContext = createContext();

const App = () => {
  // ✅ Define task state
  const [text, setText] = useState("");
  const [tasks, setTasks] = useState(() => {
    const saved = localStorage.getItem("tasks");
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  // ✅ Define functions
  const btntask = () => {
    if (text.trim() === "") return;
    setTasks([...tasks, { text, completed: false }]);
    setText("");
  };

  const btnDelete = (index) => {
    setTasks(tasks.filter((_, i) => i !== index));
  };

  const toggleComplete = (index) => {
    const updatedTasks = tasks.map((task, i) =>
      i === index ? { ...task, completed: !task.completed } : task
    );
    setTasks(updatedTasks);
  };
const editTask = (index, newText) => {
  const updatedTasks = tasks.map((task, i) =>
    i === index ? { ...task, text: newText } : task
  );
  setTasks(updatedTasks);
};

  return (
    < >
      <UserContext.Provider value={{editTask, tasks, text, setText, btntask, btnDelete, toggleComplete }}>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/useeffect" element={<UseEffect />} />
          <Route path="/alltasks" element={<UseContextComponent />} />
        </Routes>
      </UserContext.Provider>
    </ >
  );
};

export default App;
