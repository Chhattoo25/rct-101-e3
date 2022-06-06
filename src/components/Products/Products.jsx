import React, { useEffect, useState } from "react";
import Product from "./Product/Product"
import axios from "axios"
const Products = () => {
  const [data,setData]=useState([])

  const getData = async()=>{
    try{
      let res = await axios(`  http://localhost:8080/products`)
      setData(res.data)
      // console.log(res.data)
    }
    catch(err){
      console.log(err)
    }

  }
  useEffect(()=>{
    getData()
  },[])
  return <div>
    {/* {data.map((el)=>{
   
    return  <div key={el.id}>
        <h1>Product No.:{el.id}</h1>
        <h1> Product Name:{el.name}</h1>
        <p>Description:{el.description}</p>
        
      </div>
    })} */}
    <Product></Product>
  </div>;
};

export default Products;
