import { useContext } from "react";

import ItemForm from "./ItemForm";
import classes from "./Item.module.css";
import CartContext from "../../../store/cart-context";

const Item = (props) => {
  const cartCtx = useContext(CartContext);

  const addToCartHandler = (amount) => {
    cartCtx.addItem({
      id: props.id,
      name: props.name,
      amount,
      price: props.price,
    });
  };

  const price = `$${props.price.toFixed(2)}`;
  return (
    <li className={classes.item}>
      <div>
        <h3>{props.name}</h3>
        <div className={classes.description}>{props.description}</div>
        <div className={classes.price}>{price}</div>
      </div>
      <ItemForm onAddToCart={addToCartHandler} />
    </li>
  );
};

export default Item;
