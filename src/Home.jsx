import React, { useContext } from "react";
import { UserContext } from "./App";
import { Themecontext } from "./App";

const Home = () => {
  const {tasks, text, setText, btntask, btnDelete, toggleComplete } = useContext(UserContext);
  const {isClick} = useContext(Themecontext);

  return (
    <div className={`bg-red-500 min-h-[400px] w-full max-w-md mx-auto p-8 mt-10 rounded-lg shadow-lg ${isClick ? "bg-white text-black" : "bg-red-500 text-black"}`}>
<h1 className={`text-2xl font-bold mb-4 ${isClick ? 'text-red-500' : 'text-black'}`}>
  📝 ToDo List
</h1>

      <div className="flex gap-2 mb-4">
        <input
          placeholder="Enter your task"
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
          className="h-10 w-full px-2 rounded bg-amber-950 text-white"
        />
        <button
          className="h-10 px-4 border-2 bg-amber-950 border-amber-500 hover:bg-amber-800 text-white rounded"
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
              <span className={task.completed ? "line-through text-gray-400" : ""}>
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
  );
};

export default Home;
