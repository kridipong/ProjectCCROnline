import React from "react";
import classes from './CartItem.module.css';

const CartItem = (props) => {
  return (
    <li className=  {classes.cartitem}>
      <span> {props.item.itemcode} </span>
      <span className={classes.summary}> {props.item.fullname} </span>
      <span className ={classes.price}> {props.item.price} </span>
      <span className={classes.amount}> {props.item.addAmount} </span>
      <span className={classes.amount} > {props.item.addAmount * props.item.price} </span>
      <button onClick = {props.onPriceEdit}>/</button>
      <button onClick = {props.onAdd}>+</button>
      <button onClick = {props.onRemove}>-</button>
    </li>
  );
};

export default CartItem;
