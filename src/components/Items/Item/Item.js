import ItemForm from "./ItemForm";
import classes from "./Item.module.css";

const Item = (props) => {
  const price = `$${props.price.toFixed(2)}`;
  return (
    <li className={classes.item}>
      <div>
        <h3>{props.name}</h3>
        <div className={classes.description}>{props.description}</div>
        <div className={classes.price}>{price}</div>
      </div>
      <ItemForm />
    </li>
  );
};

export default Item;
