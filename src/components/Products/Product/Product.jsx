import React,{useState,useEffect} from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Product = () => {
  const [data,setData]=useState([])
  const navigate = useNavigate()

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
  const goToCart=(id)=>{

    navigate(`/product/${id}`)
  }

  // Note: this id should come from api
  const product = { id: 1 };
  return (
   
    <div data-cy={`product-${product.id}`}>

      {data.map((el)=>{
        return<div key={el.id}>
      <h3 data-cy="product-name">{el.name}</h3>
      <h6 data-cy="product-description">{el.description}</h6>
      <button data-cy="product-add-item-to-cart-button" onClick={()=>goToCart(el.id)}>add to cart</button>
      <div>
        <button data-cy="product-increment-cart-item-count-button">+</button>
        <span data-cy="product-count">
          {
            // Count here from CartItems
          }
        </span>
        <button data-cy="product-decrement-cart-item-count-button">-</button>
        <button data-cy="product-remove-cart-item-button">remove</button>
      </div>
        </div>
      })}
    </div>
  );
};

export default Product;
