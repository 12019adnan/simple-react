import React, { useEffect } from "react";
import { useState } from "react";
import Calculate from "../Calculate/Calculate";
import Cart from "../Cart/Cart";
import "./Shop.css";
import "../Calculate/Calculate.css";
const Shop = () => {
  const [products, setProduct] = useState([]);

  const [cart, setCart] = useState([]);

  const handleAddToCart = (product) => {
    const newCart = [...cart, product];
    setCart(newCart);
    console.log(newCart);
  };

  useEffect(() => {
    fetch("Product.json")
      .then((res) => res.json())
      .then((data) => setProduct(data));
  }, []);

  return (
    <div className="product-container">
      <div className="product-cards">
        {products.map((product) => (
          <Cart
            key={product.id}
            product={product}
            handleAddToCart={handleAddToCart}
          ></Cart>
        ))}
      </div>
      <div className="cal-container">
        <h2 className="order-summary">Order Summary</h2>
        <div className="cal-container-detail">
          <Calculate cart={cart}></Calculate>
        </div>
      </div>
    </div>
  );
};

export default Shop;
