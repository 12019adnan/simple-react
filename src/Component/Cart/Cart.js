import React from "react";
import "./Cart.css";
const Cart = ({handleAddToCart,product}) => {

  const { image, name, price, brand } = product;
// console.log(product)
  // const popup = (pup) =>{
  //   swal(pup)
  //  }
  return (
    <div className="product-card">
      <div className="cards">
        <img className="product-image" src={image} alt="" />
        {/* <button onClick={()=>popup(lol)}>lol</button> */}
        <div className="product-card-detail">
          <a  href="https://www.gigabyte.com/Motherboard">Brand: {brand}</a>
          <a href="">Name: {name}</a>
          <a href="">Price: {price}</a>
        </div>
      </div>
      <button onClick={()=>handleAddToCart(product)} className="button">Add To Cart</button>
    </div>
  );
};

export default Cart;
