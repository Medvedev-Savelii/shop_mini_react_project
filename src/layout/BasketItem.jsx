import React from "react";

const BasketItem = (props) => {
  const { id, name, price, quantity } = props;

  return (
    <ul>
      <li className="collection-item">
        {name} x {quantity} = {price}
        <span className="pricesecondary-content">
          <i className="material-icons basket-delet">close</i>
        </span>
      </li>
    </ul>
  );
};

export default BasketItem;
