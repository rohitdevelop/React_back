// import React , { useState } from 'react';

// import axios from "axios";
// const Home = () => {
//   const [users, setUsers] = useState([]);

//   async function handle() {
//     const deta = await axios.get("https://picsum.photos/v2/list");
//     const user = deta.data;
//     setUsers(user);
//   }
//   return (
// <div className="">

//    <button onClick={handle} className="bg-amber-900 text-amber-50 py-4 px-2">
//         click me{" "}
//       </button>
//       <div className="flex flex-wrap gap-9 justify-around items-center mt-2 p-14">
//         {users.map((item, idx) => {
//             const R = Math.floor(Math.random() * 256);
//             const G = Math.floor(Math.random() * 256);
//             const B = Math.floor(Math.random() * 256);
//             return (
//                 <div
//                 style={{ backgroundColor: `rgb(${R},${G},${B})` }}
//                 className=" text-amber-50 w-28 h-28 text-center p-6 rounded-2xl"
//                 key={idx}
//                 >
//               <h1>{item.author}</h1>
//             </div>
//           );
//         })}
//       </div>
//         </div>
//   );
// };

// export default Home;

import React from "react";
import { Link } from "react-router-dom";
const Home = () => {
  return (
    <div className="bg-black h-screen w-full text-white flex flex-col justify-center items-center gap-3">
      <h1 className="text-5xl font-extrabold">Get all products</h1>
      <Link to={"/products"}>
        <button className="px-9 py-2.5 text-xl bg-blue-500 text-white rounded-2xl cursor-pointer">
          Show products
        </button>
      </Link>
    </div>
  );
};

export default Home;
