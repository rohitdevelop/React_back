import React, { useState } from "react";

const Card = () => {
  const [allusers, setAllusers] = useState([]);

  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [role, setRole] = useState("");
  const [subject, setSebject] = useState("");

  function handlesubmit(e) {
    e.preventDefault();
    let users = setAllusers((prev) => [
      ...prev,
      { name, description, role, subject },
    ]);

    console.log(users);
    setName("");
    setRole("");
    setSebject("");
    setDescription("");
  }
  function handleremove(index) {
    setAllusers((prev) => prev.filter((_, i) => index !== i));
  }
  return (
    <>
      <div className="w-full h-[100%] bg-gray-900">
        <form
          action="Submit"
          onSubmit={handlesubmit}
          className="bg-gray-800 p-8 rounded-2xl shadow-lg w-full space-y-5"
        >
          <div className="flex justify-around w-[100%] items-center gap-5">
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Name"
              className="w-full py-3 px-4 rounded-lg border border-amber-500 bg-transparent text-amber-50 focus:outline-none focus:ring-2 focus:ring-amber-500"
            />

            <input
              type="text"
              placeholder="role"
              value={role}
              onChange={(e) => setRole(e.target.value)}
              className="w-full py-3 px-4 rounded-lg border border-amber-500 bg-transparent text-amber-50 focus:outline-none focus:ring-2 focus:ring-amber-500"
            />
          </div>

          <div className="flex justify-around items-center w-[100%]  gap-5">
            <input
              type="text"
              placeholder="Subject"
              onChange={(e) => setSebject(e.target.value)}
              value={subject}
              className="w-full py-3 px-4 rounded-lg border border-amber-500 bg-transparent text-amber-50 focus:outline-none focus:ring-2 focus:ring-amber-500"
            />

            <input
              type="text"
              placeholder="Message"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="w-full py-3 px-4 rounded-lg border border-amber-500 bg-transparent text-amber-50 focus:outline-none focus:ring-2 focus:ring-amber-500"
            />
          </div>
          <button className="w-full active:scale-90 cursor-pointer bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-xl px-6 py-3 transition">
            Submit
          </button>
        </form>

        <div className="h-screen w-full">
          {allusers.map((user, index) => (
            <div
              key={index}
              className="max-w-4xl mx-auto bg-amber-50 mb-7 rounded-2xl shadow-md p-6 space-y-3"
            >
              {/* Name */}
              <h1 className="text-3xl font-bold text-center text-gray-900">
                {user.name}
              </h1>

              {/* Description */}
              <p className="text-gray-700 text-lg leading-relaxed">
                {user.description}
              </p>

              {/* Extra Info */}
              <h2 className="text-xl font-semibold text-gray-800">
                {user.role}
              </h2>

              <h2 className="text-gray-600">{user.subject}</h2>

              {/* Action */}
              <div className="flex justify-end pt-2">
                <button
                  onClick={() => handleremove(index)}
                  className="bg-red-500 hover:bg-red-600 text-white px-5 py-2 rounded-xl font-semibold transition"
                >
                  Remove
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Card;
