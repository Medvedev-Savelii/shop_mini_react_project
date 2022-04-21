import React from "react";

const BasketItem = (props) => {
  const {
    id,
    name,
    price,
    quantity,
    removeFromBasket = Function.prototype,
    decQuantity = Function.prototype,
    incQuantity = Function.prototype,
  } = props;

  return (
    <ul>
      <li className="collection-item">
        {name}{" "}
        <i
          className="material-icons basket-quantity"
          onClick={() => decQuantity(id)}
        >
          remove
        </i>{" "}
        x {quantity}{" "}
        <i
          className="material-icons basket-quantity"
          onClick={() => incQuantity(id)}
        >
          add
        </i>{" "}
        = {price * quantity} Rub
        <span
          className="secondary-content"
          onClick={() => removeFromBasket(id)}
        >
          <i className="material-icons basket-delet">close</i>
        </span>
      </li>
    </ul>
  );
};

export default BasketItem;
