import React, { createContext, useState, useEffect } from "react";
 import {alldeta} from '../Api/productApi.js'
export const ProductContextDeta = createContext();
 const ProductContext = (props) => {
 const [deta, setDeta] = useState([]);

const productdeta = async () => {
 let res = await alldeta()
 setDeta(res)
}

  useEffect(() => {
    productdeta();
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
