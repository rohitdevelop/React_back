import React, { useContext } from "react";
import { ProductContextDeta } from "../context/ProductContext";
import { useParams } from "react-router-dom";

const ProductsDetails = () => {
  const products = useContext(ProductContextDeta);
  const { productID } = useParams(); // ✅ must match route param

  if (!products || products.length === 0) {
    return <p className="text-2xl text-center">Loading...</p>;
  }

  const selectedProduct = products.find(
    (product) => product.id === Number(productID)
  );

  if (!selectedProduct) {
    return <p className="text-2xl text-center">Product not found</p>;
  }

  return (
    <div className="min-h-screen flex justify-center items-center p-6">
      <div className="border p-6 rounded-2xl max-w-md shadow">
        <img
          className="w-full h-64 object-contain"
          src={selectedProduct.image}
          alt={selectedProduct.title}
        />

        <h1 className="text-xl font-bold mt-4">
          {selectedProduct.title}
        </h1>

        <p className="text-green-600 text-lg font-semibold mt-2">
          ₹ {selectedProduct.price}
        </p>

        <p className="text-sm mt-3 text-gray-600">
          {selectedProduct.description}
        </p>
      </div>
    </div>
  );
};

export default ProductsDetails;
