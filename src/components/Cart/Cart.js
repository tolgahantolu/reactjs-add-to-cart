import Modal from "../UI/Modal";
import classes from "./Cart.module.css";

const Cart = (props) => {
  const itemsList = (
    <ul className={classes["cart-items"]}>
      {[
        {
          id: "i1",
          name: "iPhone 13",
          amount: 1,
          price: "$1099.99",
        },
      ].map((item) => {
        return <li key={item.id}>{item.name}</li>;
      })}
    </ul>
  );

  return (
    <Modal onClose={props.onClose}>
      <div className={classes.cart}>
        {itemsList}
        <div className={classes.total}>
          <span>Total Amount</span>
          <span>$1099.99</span>
        </div>
        <div className={classes.actions}>
          <button className={classes["button--alt"]} onClick={props.onClose}>
            Close
          </button>
          <button className={classes.button}>Order</button>
        </div>
      </div>
    </Modal>
  );
};

export default Cart;
