import React from "react";
import { useSearchParams } from "react-router-dom";

const QueryParams = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  // READ query params
  const name = searchParams.get("name");
  const age = searchParams.get("age");
  const category = searchParams.get("category");
  const price = searchParams.get("price");
  const page = searchParams.get("page") || 1;
  const theme = searchParams.get("theme") || "light";

  // Dynamic theme styles
  const isDark = theme === "dark";
  const bgColor = isDark ? "bg-gray-900" : "bg-gray-50";
  const textColor = isDark ? "text-white" : "text-gray-900";
  const cardBg = isDark ? "bg-gray-800" : "bg-white";
  const borderColor = isDark ? "border-gray-700" : "border-gray-200";

  return (
    <div className={`min-h-screen ${bgColor} ${textColor} transition-colors duration-300 p-8`}>
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-8 bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
          Query Params Practice
        </h1>

        {/* Example 1: Read query params */}
        <div className={`${cardBg} rounded-lg shadow-lg p-6 mb-6 border ${borderColor}`}>
          <h2 className="text-2xl font-semibold mb-4 flex items-center gap-2">
            <span className="text-blue-500">1️⃣</span> Read Params
          </h2>
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <span className="font-medium text-gray-500">Name:</span>
              <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">
                {name || "Not set"}
              </span>
            </div>
            <div className="flex items-center gap-2">
              <span className="font-medium text-gray-500">Age:</span>
              <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm">
                {age || "Not set"}
              </span>
            </div>
          </div>
        </div>

        {/* Example 2: Set query params */}
        <div className={`${cardBg} rounded-lg shadow-lg p-6 mb-6 border ${borderColor}`}>
          <h2 className="text-2xl font-semibold mb-4 flex items-center gap-2">
            <span className="text-green-500">2️⃣</span> Set Params
          </h2>
          <button
            onClick={() => setSearchParams({ name: "rohit", age: 20 })}
            className="px-6 py-3 bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-lg font-medium hover:from-blue-600 hover:to-blue-700 transition-all shadow-md hover:shadow-lg transform hover:-translate-y-0.5"
          >
            Set Name & Age
          </button>
        </div>

        {/* Example 3: Filter */}
        <div className={`${cardBg} rounded-lg shadow-lg p-6 mb-6 border ${borderColor}`}>
          <h2 className="text-2xl font-semibold mb-4 flex items-center gap-2">
            <span className="text-purple-500">3️⃣</span> Filter Example
          </h2>
          <button
            onClick={() => setSearchParams({ category: "mobile", price: "low" })}
            className="px-6 py-3 bg-gradient-to-r from-purple-500 to-purple-600 text-white rounded-lg font-medium hover:from-purple-600 hover:to-purple-700 transition-all shadow-md hover:shadow-lg transform hover:-translate-y-0.5 mb-4"
          >
            🔍 Cheap Mobiles
          </button>
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <span className="font-medium text-gray-500">Category:</span>
              <span className="px-3 py-1 bg-purple-100 text-purple-800 rounded-full text-sm">
                {category || "Not set"}
              </span>
            </div>
            <div className="flex items-center gap-2">
              <span className="font-medium text-gray-500">Price:</span>
              <span className="px-3 py-1 bg-pink-100 text-pink-800 rounded-full text-sm">
                {price || "Not set"}
              </span>
            </div>
          </div>
        </div>

        {/* Example 4: Theme Toggle */}
        <div className={`${cardBg} rounded-lg shadow-lg p-6 mb-6 border ${borderColor}`}>
          <h2 className="text-2xl font-semibold mb-4 flex items-center gap-2">
            <span className="text-yellow-500">4️⃣</span> Theme Toggle
          </h2>
          <div className="flex gap-3 mb-4">
            <button
              onClick={() => setSearchParams({ ...Object.fromEntries(searchParams), theme: "dark" })}
              className={`px-6 py-3 rounded-lg font-medium transition-all shadow-md hover:shadow-lg transform hover:-translate-y-0.5 ${
                isDark
                  ? "bg-gray-700 text-white ring-2 ring-yellow-400"
                  : "bg-gray-200 text-gray-700 hover:bg-gray-300"
              }`}
            >
              🌙 Dark
            </button>
            <button
              onClick={() => setSearchParams({ ...Object.fromEntries(searchParams), theme: "light" })}
              className={`px-6 py-3 rounded-lg font-medium transition-all shadow-md hover:shadow-lg transform hover:-translate-y-0.5 ${
                !isDark
                  ? "bg-yellow-400 text-gray-900 ring-2 ring-yellow-500"
                  : "bg-gray-700 text-gray-300 hover:bg-gray-600"
              }`}
            >
              ☀️ Light
            </button>
          </div>
          <div className="flex items-center gap-2">
            <span className="font-medium text-gray-500">Theme:</span>
            <span className="px-3 py-1 bg-yellow-100 text-yellow-800 rounded-full text-sm">
              {theme}
            </span>
          </div>
        </div>

        {/* Example 5: Pagination */}
        <div className={`${cardBg} rounded-lg shadow-lg p-6 mb-6 border ${borderColor}`}>
          <h2 className="text-2xl font-semibold mb-4 flex items-center gap-2">
            <span className="text-red-500">5️⃣</span> Pagination
          </h2>
          <div className="flex items-center gap-4">
            <button
              onClick={() => setSearchParams({ ...Object.fromEntries(searchParams), page: Number(page) - 1 })}
              disabled={page <= 1}
              className="px-6 py-3 bg-gradient-to-r from-red-500 to-red-600 text-white rounded-lg font-medium hover:from-red-600 hover:to-red-700 transition-all shadow-md hover:shadow-lg transform hover:-translate-y-0.5 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none disabled:shadow-none"
            >
              ← Prev
            </button>
            <span className="px-6 py-3 bg-gradient-to-r from-gray-100 to-gray-200 text-gray-900 rounded-lg font-bold text-lg shadow-inner">
              Page {page}
            </span>
            <button
              onClick={() => setSearchParams({ ...Object.fromEntries(searchParams), page: Number(page) + 1 })}
              className="px-6 py-3 bg-gradient-to-r from-red-500 to-red-600 text-white rounded-lg font-medium hover:from-red-600 hover:to-red-700 transition-all shadow-md hover:shadow-lg transform hover:-translate-y-0.5"
            >
              Next →
            </button>
          </div>
        </div>

        {/* Example 6: Clear params */}
        <div className={`${cardBg} rounded-lg shadow-lg p-6 border ${borderColor}`}>
          <h2 className="text-2xl font-semibold mb-4 flex items-center gap-2">
            <span className="text-orange-500">6️⃣</span> Clear Params
          </h2>
          <button
            onClick={() => setSearchParams({})}
            className="px-6 py-3 bg-gradient-to-r from-orange-500 to-red-500 text-white rounded-lg font-medium hover:from-orange-600 hover:to-red-600 transition-all shadow-md hover:shadow-lg transform hover:-translate-y-0.5"
          >
            🗑️ Clear All
          </button>
        </div>
      </div>
    </div>
  );
};

export default QueryParams;