import React, { useState } from "react";
import Cart from "./components/Cart/Cart";
import Header from "./components/Layouts/Header";
import Meal from "./components/Meals/Meal";

function App() {
  const [showCart, setShowCart] = useState(false);

  const showCartHandler = () => {
    setShowCart(true);
  };
  const hideCartHandler = () => {
    setShowCart(false);
  };

  return (
    <>
      {showCart && <Cart onClose={hideCartHandler} />}
      <Header onShowCart={showCartHandler} />
      <main>
        <Meal />
      </main>
    </>
  );
}

export default App;
