import React, { useContext } from "react";
import { usercontext } from "../context/UserContext";
const AllSection = () => {
  const [theme] = useContext(usercontext);

  return (
    <div className={`${theme == 'light'? 'bg-white text-black': 'bg-black text-white'} text-center w-full h-[90vh]`}>
      <h1>helo everuone</h1>
      {theme}
    </div>
  );
};

export default AllSection;
