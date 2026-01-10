import React, { useContext } from "react";
import { ProductContextDeta } from "../context/ProductContext";
import { Link } from "react-router-dom";

const Products = () => {
  const products = useContext(ProductContextDeta);

  // Safety check
  if (!products) {
    return <p className="text-3xl text-center">Context not connected</p>;
  }

  return (
    <div className="w-full min-h-screen flex flex-wrap gap-6 justify-center p-6">
      {products.length > 0 ? (
        products.map((product) => (
          // ✅ KEY MUST BE HERE
          <Link key={product.id} to={`/products/${product.id}`}>
            <div className="border p-4 cursor-pointer rounded-2xl w-72 hover:shadow-lg transition">
              <img
                className="w-full h-48 object-contain"
                src={product.image}
                alt={product.title}
              />

              <h1 className="text-sm font-semibold line-clamp-2 mt-2">
                {product.title}
              </h1>

              <p className="text-lg font-bold text-green-600 mt-2">
                ₹ {product.price}
              </p>
            </div>
          </Link>
        ))
      ) : (
        <p className="text-4xl font-bold">Loading...</p>
      )}
    </div>
  );
};

export default Products;
