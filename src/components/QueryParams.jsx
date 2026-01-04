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
  const theme = searchParams.get("theme");

  return (
    <div style={{ padding: "20px" }}>
      <h1>Query Params Practice</h1>

      {/* Example 1: Read query params */}
      <h2>1️⃣ Read Params</h2>
      <p>Name: {name}</p>
      <p>Age: {age}</p>

      {/* Example 2: Set query params */}
      <h2>2️⃣ Set Params</h2>
      <button
        onClick={() =>
          setSearchParams({ name: "rohit", age: 20 })
        }
      >
        Set Name & Age
      </button>

      {/* Example 3: Filter */}
      <h2>3️⃣ Filter Example</h2>
      <button
        onClick={() =>
          setSearchParams({ category: "mobile", price: "low" })
        }
      >
        Cheap Mobiles
      </button>
      <p>Category: {category}</p>
      <p>Price: {price}</p>

      {/* Example 4: Theme Toggle */}
      <h2>4️⃣ Theme Toggle</h2>
      <button onClick={() => setSearchParams({ theme: "dark" })}>
        Dark
      </button>
      <button onClick={() => setSearchParams({ theme: "light" })}>
        Light
      </button>
      <p>Theme: {theme}</p>

      {/* Example 5: Pagination */}
      <h2>5️⃣ Pagination</h2>
      <button
        onClick={() =>
          setSearchParams({ page: Number(page) - 1 })
        }
        disabled={page <= 1}
      >
        Prev
      </button>

      <span style={{ margin: "0 10px" }}>
        Page: {page}
      </span>

      <button
        onClick={() =>
          setSearchParams({ page: Number(page) + 1 })
        }
      >
        Next
      </button>

      {/* Example 6: Clear params */}
      <h2>6️⃣ Clear Params</h2>
      <button onClick={() => setSearchParams({})}>
        Clear All
      </button>
    </div>
  );
};

export default QueryParams;
