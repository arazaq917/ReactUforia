import React from "react";
import CartContext from "./CartContext";

const contextProvider = (props) => {
  const addItemHandler = (item) => {};
  const reomveItemHandler = (id) => {};

  const cartContext = {
    item: [],
    totalAmount: 0,
    addItem: addItemHandler,
    removeItem: reomveItemHandler,
  };

  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};

export default contextProvider;
