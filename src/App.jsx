import React, { useState, useEffect, createContext } from "react";
import { Routes, Route } from "react-router-dom";
import UseEffect from "./UseEffect.jsx";
import UseContextComponent from "./UseContextComponent.jsx";
import Navbar from "./Navbar.jsx";
import Home from "./Home.jsx";
import Useref from "./Useref.jsx";
import Booking from "./Booking.jsx";
import Usememo from "./Usememo.jsx";

// ✅ Create Contexts
export const UserContext = createContext();
export const Themecontext = createContext();

const App = () => {
  // ✅ Task state
  const [name , setName ] = useState('')
  const [text, setText] = useState("");
  const [tasks, setTasks] = useState(() => {
    const saved = localStorage.getItem("tasks");
    return saved ? JSON.parse(saved) : [];
  });

  function dltbtn() {
setTasks([]);

}
  // ✅ Theme state
  const [isClick, setIsClick] = useState(() => {
    return localStorage.getItem("theme") === "dark";
  });

  // ✅ Save tasks to localStorage
  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  // ✅ Task functions
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
    <Themecontext.Provider value={{ isClick, setIsClick }}>
      <UserContext.Provider
        value={{
          editTask,
          tasks,
          text,
          setText,
          btntask,
          btnDelete,
          toggleComplete,
          dltbtn,
        }}
      >
        <div className={`min-h-screen ${isClick ? "bg-black text-white" : "bg-white text-black"} transition-colors duration-300`}>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/useeffect" element={<UseEffect />} />
            <Route path="/alltasks" element={<UseContextComponent />} />
            <Route path="/useRef" element={<Useref name={name} setname={setName}/>} />
            <Route path="/booking" element={<Booking />} />
            <Route path="/usememo" element={<Usememo />} />
          </Routes>
        </div>
      </UserContext.Provider>
    </Themecontext.Provider>
  );
};

export default App;
