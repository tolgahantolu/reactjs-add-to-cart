import { useContext } from "react";
import CartContext from "../../store/cart-context";
import classes from "./Header.module.css";

const Header = (props) => {
  const cartCtx = useContext(CartContext);
  console.log(cartCtx);

  const cartItemCounter = cartCtx.items.reduce((currentNum, item) => {
    return currentNum + item.amount;
  }, 0);

  return (
    <header className={classes.header}>
      <h1>Tolgahan</h1>
      <button className={classes.cart} onClick={props.onShowCart}>
        <span>Your Cart</span>
        <span> {cartItemCounter} </span>
      </button>
    </header>
  );
};

export default Header;
