import axios from 'axios';


export const alldeta = async ()=> {
    let respose = await axios.get("https://fakestoreapi.com/products");
    return respose.data
   }