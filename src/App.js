import { useState } from "react";

import Cart from "./components/Cart/Cart";
import Header from "./components/Layout/Header";
import Items from "./components/Items/Items";

function App() {
  const [CartIsShow, setCartIsShow] = useState(false);

  const showCartHandler = () => {
    setCartIsShow(true);
  };

  const hideCartHandler = () => {
    setCartIsShow(false);
  };

  return (
    <>
      {CartIsShow && <Cart onClose={hideCartHandler} />} {/*JS short circuit */}
      <Header onShowCart={showCartHandler} />
      <main>
        <Items />
      </main>
    </>
  );
}

export default App;
