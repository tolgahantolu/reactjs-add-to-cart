import classes from "./Header.module.css";

const Header = () => {
  return (
    <>
      <header className={classes.header}>
        <h1>Tolgahan</h1>
        <button className={classes.cart}>
          <span>Your Cart</span>
          <span>3</span>
        </button>
      </header>
    </>
  );
};

export default Header;
