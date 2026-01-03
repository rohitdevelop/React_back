import React , { useState } from 'react';
 
import axios from "axios";
const Home = () => {
  const [users, setUsers] = useState([]);

  async function handle() {
    const deta = await axios.get("https://picsum.photos/v2/list");
    const user = deta.data;
    setUsers(user);
  }
  return (
<div className="">

   <button onClick={handle} className="bg-amber-900 text-amber-50 py-4 px-2">
        click me{" "}
      </button>
      <div className="flex flex-wrap gap-9 justify-around items-center mt-2 p-14">
        {users.map((item, idx) => {
            const R = Math.floor(Math.random() * 256);
            const G = Math.floor(Math.random() * 256);
            const B = Math.floor(Math.random() * 256);
            return (
                <div
                style={{ backgroundColor: `rgb(${R},${G},${B})` }}
                className=" text-amber-50 w-28 h-28 text-center p-6 rounded-2xl"
                key={idx}
                >
              <h1>{item.author}</h1>
            </div>
          );
        })}
      </div>
        </div>
  );
};

export default Home;
