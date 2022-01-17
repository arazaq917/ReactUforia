import React from "react";
import mealImg from "../../assets/meals.jpg";
import CartButton from "./CartButton";
import classes from "./Header.module.css";

const Header = (props) => {

  return (
    <>
      <header className={classes.header}>
        <h1>React Meal</h1>
        <CartButton onClick={props.onShowCart} />
      </header>
      <div className={classes["main-image"]}>
        <img src={mealImg} alt=" This is Header" />
      </div>
    </>
  );
};

export default Header;
