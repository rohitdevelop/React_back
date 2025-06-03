import React, { useContext } from "react";
import { UserContexttest } from "./UserContext";

const UseCountexttest = () => {
  const { tasks } = useContext(UserContexttest); // ✅ Correct usage

  return (
    <div className="text-center mt-4">
      <p className="text-white text-lg">
        You have <span className="font-bold text-amber-400">{tasks.length}</span> tasks
      </p>
    </div>
  );
};

export default UseCountexttest;
