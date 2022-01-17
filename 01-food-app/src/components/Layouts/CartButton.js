import React, { useContext } from "react";
import CartIcon from "../Cart/CartIcon";
import CartContext from "../../store/CartContext";

import classes from "./CartButton.module.css";

const CartButton = (props) => {
  const cartCtx = useContext(CartContext);
  const noOfCartItems = cartCtx.items.reduce((curNum, item) => {
    return curNum + item.amount;
  }, 0);
  return (
    <>
      <button className={classes.button} onClick={props.onClick}>
        <span className={classes.icon}>
          <CartIcon />
        </span>
        <span>Your Cart</span>
        <span className={classes.badge}>{noOfCartItems}</span>
      </button>
    </>
  );
};

export default CartButton;
