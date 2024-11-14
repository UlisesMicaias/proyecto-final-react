import React from "react";
import { useCart } from "./CartContext";

const CartWidget = () => {
  const { cart } = useCart();
  const itemCount = cart.reduce((total, item) => total + item.quantity, 0);

  return (
    <div>
      <span>🛒 {itemCount}</span>
    </div>
  );
};

export default CartWidget;


