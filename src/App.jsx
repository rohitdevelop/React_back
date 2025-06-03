import React, { useState,useEffect } from "react";
 import UseEffect from "./UseEffect.jsx";
 const App = () => {
  const [text, setText] = useState("");
  const [tasks, setTasks] = useState([]);

  useEffect(()=>{
    localStorage.setItem("tasks" ,JSON.stringify(tasks))
 
  },[tasks])

  // Add task
  const btntask = () => {
    if (text.trim() === "") return; // ignore empty task
    setTasks([...tasks, { text: text, completed: false }]);
    setText("");
  };

  // Delete task
  const btnDelete = (index) => {
    setTasks(tasks.filter((_, i) => i !== index));
  };

  // Toggle complete
  const toggleComplete = (index) => {
    const updatedTasks = tasks.map((task, i) =>
      i === index ? { ...task, completed: !task.completed } : task
    );
    setTasks(updatedTasks);
  };



   return (
     <div>
       {/* <UseEffect /> */}
 <div className="bg-red-500 min-h-[400px] w-full max-w-md mx-auto p-8 mt-10 rounded-lg shadow-lg">
        <h1 className="text-2xl font-bold text-white mb-4">📝 ToDo List</h1>
         <div className="flex gap-2 mb-4">
          <input
            placeholder="Enter your task"
            type="text"
            value={text}
            onChange={(e) => setText(e.target.value)}
            className="h-10 w-full px-2 rounded"
          />
          <button
            className="h-10 px-4 border-2 border-amber-500 hover:bg-amber-800 text-white rounded"
            onClick={btntask}
          >
            Add
          </button>
        </div>

        <ul>
          {tasks.map((task, index) => (
            <li
              key={index}
              className="flex justify-between items-center bg-black text-white px-3 py-2 rounded mb-2"
            >
              <div className="flex gap-2 items-center">
                <input
                  type="checkbox"
                  checked={task.completed}
                  onChange={() => toggleComplete(index)}
                />
                <span
                  className={`${
                    task.completed ? "line-through text-gray-400" : ""
                  }`}
                >
                  {task.text}
                </span>
              </div>
              <span
                className="text-red-400 cursor-pointer hover:text-red-600"
                onClick={() => btnDelete(index)}
              >
                Delete
              </span>
            </li>
          ))}
        </ul>
      </div>
   


     </div>
   )
 }
 
 export default App
 

 