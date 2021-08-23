import React from "react";

const CartItem = (props) => {
  return (
    <li>
      <span> {props.item.itemcode} </span>
      <span> {props.item.fullname} </span>
      <span> {props.item.price} </span>
      <span> {props.item.addAmount} </span>
      <span> {props.item.addAmount * props.item.price} </span>
      <button onClick = {props.onAdd}>+</button>
      <button>-</button>
    </li>
  );
};

export default CartItem;
