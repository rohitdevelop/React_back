import React, { useContext } from "react";
import { usercontext } from "../context/UserContext";
const AllSection = () => {
  const deta = useContext(usercontext);

  return (
    <div className="bg-black text-amber-50 text-center w-full h-[90vh]">
      <h1>helo everuone</h1>
      {deta}
    </div>
  );
};

export default AllSection;
