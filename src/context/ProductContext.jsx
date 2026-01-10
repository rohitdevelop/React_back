import React, { createContext, useState, useEffect } from "react";
import axios from "axios";

export const ProductContextDeta = createContext();

const ProductContext = (props) => {
  const [deta, setdeta] = useState([]);
  async function alldeta() {
    let respose = await axios.get("https://fakestoreapi.com/products");
    setdeta(respose.data);
  }
  useEffect(() => {
    alldeta();
  }, []);

  return (
    <div>
      <ProductContextDeta.Provider value={deta}>
        {props.children}
      </ProductContextDeta.Provider>
    </div>
  );
};

export default ProductContext;
