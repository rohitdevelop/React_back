import React, { useContext, useState } from "react";
import { UserContext } from "./App";

const UseContextComponent = () => {
  const { tasks, editTask,dltbtn } = useContext(UserContext);
  const [editIndex, setEditIndex] = useState(null);
  const [editText, setEditText] = useState("");

  const handleEdit = (index, currentText) => {
    setEditIndex(index);
    setEditText(currentText);
  };
 
  const handleSave = () => {
    if (editText.trim() !== "") {
      editTask(editIndex, editText);
      setEditIndex(null);
      setEditText("");
    }
  };

  return (
    <div className="bg-white p-6 rounded-2xl shadow-lg text-center mt-10 max-w-md mx-auto border border-gray-200">
 <p className="text-sm text-gray-800 mb-4">
  You have <span className="font-bold text-blue-600">{tasks.length}</span> tasks. 
  <span 
    className="ml-2 text-red-500 hover:text-red-700 cursor-pointer font-semibold transition duration-300"
   onClick={dltbtn}
  >
    Delete All
  </span>
</p>


      <ul className="space-y-4">
        {tasks.map((task, index) => (
          <li
            key={index}
            className="flex justify-between items-center bg-gray-100 px-4 py-3 rounded-md text-gray-800 shadow-sm"
          >
            {editIndex === index ? (
              <input
                type="text"
                value={editText}
                onChange={(e) => setEditText(e.target.value)}
                className="flex-1 mr-2 p-1 rounded border"
              />
            ) : (
              <span>
                <span className="font-semibold mr-2">{index + 1}.</span>
                {task.text}
              </span>
            )}
            {editIndex === index ? (
              <button
                onClick={handleSave}
                className="bg-green-600 hover:bg-green-700 text-white font-semibold px-3 py-1 rounded-md shadow-sm ml-2"
              >
                Save
              </button>
            ) : (
              <button
                onClick={() => handleEdit(index, task.text)}
                className="bg-red-600 hover:bg-red-700 text-white font-semibold px-3 py-1 rounded-md shadow-sm ml-2"
              >
                Edit
              </button>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UseContextComponent;
