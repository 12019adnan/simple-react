import React from "react";
import './Calculate.css'

const Calculate = (props) => {
  // console.log(props)
  // let name = ['']
  let total = 0;
  let tax = 0;
  let grantedTotal = total + tax;
  props.cart.forEach(cartProduct => {
    let price = cartProduct.price
    console.log(price)
     total = parseInt(total) + parseInt(price)  
     console.log(total)
     tax = total * 0.1
     grantedTotal = total + tax;
  })
  return (
    <div className="cal-group">
      <p>Selected item: {props.cart.length}</p>
      <p>total:  {total} tk</p>
      <p>tax:  {tax.toFixed(2)} tk</p>
      <p>
        granted-total: {grantedTotal.toFixed(2)} tk
      </p>
    </div>
  );
};

export default Calculate;
