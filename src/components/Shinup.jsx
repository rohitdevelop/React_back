// import axios from 'axios';
// import { useState } from 'react';
// import { useNavigate } from 'react-router-dom';

// const Signup = () => {
//   const [form, setForm] = useState({ name: '', email: '', password: '' });
//   const navigate = useNavigate();

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const res = await axios.post("http://localhost:4000/api/signup", form);
//       alert(res.data.message); // "Signup successful"
//       navigate('/login');
//     } catch (err) {
//       alert(err.response.data.message); // "User already exists" etc.
//     }
//   };

//   return (
//     <div className="min-h-screen flex items-center justify-center bg-gray-100">
//       <form onSubmit={handleSubmit} className="bg-white p-8 rounded-md shadow-md w-full max-w-md">
//         <h2 className="text-2xl font-bold mb-6 text-center">Sign Up</h2>

//         <input
//           type="text"
//           placeholder="Name"
//           className="w-full mb-4 px-4 py-2 border rounded"
//           onChange={(e) => setForm({ ...form, name: e.target.value })}
//         />
//         <input
//           type="email"
//           placeholder="Email"
//           className="w-full mb-4 px-4 py-2 border rounded"
//           onChange={(e) => setForm({ ...form, email: e.target.value })}
//         />
//         <input
//           type="password"
//           placeholder="Password"
//           className="w-full mb-6 px-4 py-2 border rounded"
//           onChange={(e) => setForm({ ...form, password: e.target.value })}
//         />

//         <button
//           type="submit"
//           className="w-full bg-cyan-500 hover:bg-cyan-600 text-white py-2 rounded"
//         >
//           Sign Up
//         </button>
//       </form>
//     </div>
//   );
// };

// export default Signup;

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const [userid, setUserid] = useState("");
  const navigate = useNavigate();

  const handleSubmit = () => {
    if (userid.trim() === "") return;
    navigate(`/shinup/${userid}`);
  };

  return (
    <div className="mt-32">
      <input
        type="text"
        placeholder="Enter User ID"
        value={userid}
        onChange={(e) => setUserid(e.target.value)}
        className="border p-2"
      />

      <button
        onClick={handleSubmit}
        className="ml-2 bg-blue-500 text-white px-4 py-2"
      >
        Go
      </button>

      <div className="">
        <h1>hello {userid}</h1>
      </div>
    </div>
  );
};

export default Home;

