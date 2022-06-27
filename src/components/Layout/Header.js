import classes from "./Header.module.css";

const Header = (props) => {
  return (
    <>
      <header className={classes.header}>
        <h1>Tolgahan</h1>
        <button className={classes.cart} onClick={props.onShowCart}>
          <span>Your Cart</span>
          <span>3</span>
        </button>
      </header>
    </>
  );
};

export default Header;
