import React from "react";
import Basket from "../Components/basket/Basket";

const Cart = ({ cartItems, handleAddToCart, handleRemove, clearItems }) => {
  return (
    <Basket
      cartItems={cartItems}
      handleAddToCart={handleAddToCart}
      handleRemove={handleRemove}
      clearItems={clearItems}
    />
  );
};

export default Cart;
