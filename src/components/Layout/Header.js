import { useContext, useEffect, useState } from "react";
import CartContext from "../../store/cart-context";
import classes from "./Header.module.css";

const Header = (props) => {
  const [btnIsBump, setBtnIsBump] = useState(false);
  const cartCtx = useContext(CartContext);
  //  console.log(cartCtx);

  const { items } = cartCtx;

  const cartItemCounter = items.reduce((currentNum, item) => {
    return currentNum + item.amount;
  }, 0);

  const btnClasses = `${classes.cart} ${btnIsBump ? classes.bump : ""}`;

  useEffect(() => {
    if (items.length === 0) {
      return;
    }

    setBtnIsBump(true);

    const timer = setTimeout(() => {
      setBtnIsBump(false);
    }, 300); //an,masyon süresi'de 300ms

    //!clean-up
    return () => {
      clearTimeout(timer);
    };
  }, [items]);

  return (
    <header className={classes.header}>
      <h1>Tolgahan</h1>
      <button className={btnClasses} onClick={props.onShowCart}>
        <span>Your Cart</span>
        <span> {cartItemCounter} </span>
      </button>
    </header>
  );
};

export default Header;
