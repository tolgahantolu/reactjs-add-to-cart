import { useState } from "react";

import CartProvider from "./store/CartProvider";
import Cart from "./components/Cart/Cart";
import Header from "./components/Layout/Header";
import Items from "./components/Items/Items";

function App() {
  const [cartIsShow, setCartIsShow] = useState(false);

  const showCartHandler = () => {
    setCartIsShow(true);
  };

  const hideCartHandler = () => {
    setCartIsShow(false);
  };

  return (
    <CartProvider>
      {cartIsShow && <Cart onClose={hideCartHandler} />} {/*JS short circuit */}
      <Header onShowCart={showCartHandler} />
      <main>
        <Items />
      </main>
    </CartProvider>
  );
}

export default App;
