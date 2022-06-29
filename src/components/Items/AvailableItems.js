import Item from "./Item/Item";
import Card from "../UI/Card";

import classes from "./AvailableItems.module.css";

const DUMMY_ITEMS = [
  {
    id: "i1",
    name: "iPhone 13",
    description: "Super Super Super Phone!",
    price: 1099.99,
  },
  {
    id: "i2",
    name: "Samsung Galaxy",
    description: "Imagine the Possibilities!",
    price: 1000.0,
  },
  {
    id: "i3",
    name: "Apple Macbook",
    description: "The American Classic",
    price: 2699.99,
  },
  {
    id: "i4",
    name: "Lenovo Ideapad 320",
    description: "	Innovation Never Stands Still",
    price: 765.9,
  },
];

const AvailableItems = () => {
  const itemsList = DUMMY_ITEMS.map((item) => {
    return (
      <Item
        id={item.id}
        key={item.id}
        name={item.name}
        description={item.description}
        price={item.price}
      />
    );
  });

  return (
    <section className={classes.items}>
      <Card>
        <ul>{itemsList}</ul>
      </Card>
    </section>
  );
};

export default AvailableItems;
