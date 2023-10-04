import React from "react";
import { ShopContext } from "../../context/shop-context";
import { useContext } from "react";

export const CartItem = (props) => {
  const { id, productName, price, productImage } = props.data;
  const { cartItems,addToCart, removeFromCart, updateCartItemCount } = useContext(ShopContext);

  return (
    <div className="cartItem">
      <img src={productImage}></img>
      <div className="productName">
        <h3>{productName}</h3>
        <br></br>
        <h5>${price}</h5>
        <div className="countHandler">
            <button onClick={() => removeFromCart(id)}>-</button>
            <input value={cartItems[id]} onChange={(e) => updateCartItemCount(Number(e.target.value), id)}></input>
            <button onClick={() => addToCart(id)}>+</button>
        </div>
      </div>
    </div>
  );
};  
