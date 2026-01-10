import React,{useContext} from 'react'
 import { ProductContextDeta } from "../context/ProductContext";
 import {useParams} from "react-router-dom"
const ProductsDetails = () => {

    const response = useContext(ProductContextDeta)
    const {productID}= useParams()
    const choosedeta = response.find((elem)=> productID==elem.id)
    console.log(choosedeta);
    
  return (
    <div>
    <div className="">
        <img src={choosedeta.image} alt="" />
        <p> {choosedeta.title}</p>
    </div>
    </div>
  )
}

export default ProductsDetails
