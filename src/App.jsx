import React, { useState, useEffect } from "react";

const App = () => {
  const [added, setAdded] = useState("");
  const [tasks, setTasks] = useState([]);

  // Load tasks on mount
  useEffect(() => {
    const storedTasks = localStorage.getItem("tasks");
    if (storedTasks) {
      setTasks(JSON.parse(storedTasks));
    }
  }, []);

  // Save tasks whenever they change
  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const handleChange = (e) => {
    setAdded(e.target.value);
  };

  const handleClick = () => {
    if (added.trim() === "") return;
    setTasks([...tasks, added]);
    setAdded("");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-700 to-indigo-900 text-white px-4">
      <div className="bg-gray-900 p-6 rounded-lg shadow-lg w-full max-w-md">
        <h1 className="text-3xl font-bold mb-6 text-cyan-400 text-center">TODO List</h1>

        <div className="flex gap-4 mb-6">
          <input
            value={added}
            onChange={handleChange}
            type="text"
            placeholder="Enter a task"
            className="flex-1 px-4 py-2 rounded bg-gray-800 text-white border border-gray-600 focus:ring-2 focus:ring-cyan-500"
          />
          <button
            onClick={handleClick}
            className="bg-cyan-500 hover:bg-cyan-600 px-6 py-2 rounded text-white font-semibold"
          >
            Add
          </button>
        </div>

        <ul className="space-y-2">
          {tasks.map((task, index) => (
            <li key={index} className="bg-gray-800 px-4 py-2 rounded border border-gray-700">
              {task}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default App;
