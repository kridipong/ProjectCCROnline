import InvoiceContext from "./invoice-context";
import React, { useState, useReducer } from "react";

const cartReducer = (state, action) => {
  if (action.type === "ADD") {
    const existingCartItemIndex = state.items.findIndex(
      (item) => item.itemcode === action.item.itemcode
    );
    const existingCartItem = action.items[existingCartItemIndex];

    let updatedItems;
    let updatedItem;

    if (!existingCartItem == null) {
      updatedItem = {
        ...existingCartItem,
        amount: existingCartItem.amount + action.item.addAmount,
      };
      updatedItems = [...state.items];
      updatedItems[existingCartItemIndex] = updatedItem;
    } else {
      updatedItems = state.items.concat(action.item);
    }
    const updatedTotalAmount = state.totalAmount+action.item.addAmount;
    const updatedTotalPrice = state.totalAmount+action.item.price*action.item.addAmount;
    
    return {items:updatedItems, totalAmount:updatedTotalAmount, totalPrice:updatedTotalPrice }


}

};

const InvoiceContextProvider = (props) => {
  const [cartState, dispacthCartAction] = useReducer(cartReducer, {
    items: [],
    totalAmount: 0,
    totalPrice: 0,
  });

  const addCartHandler = (item) => {
    dispacthCartAction({ type: "ADD", item: item });
  };

  const removeCartHandler = (id) => {
    dispacthCartAction({ type: "REMOVE", id: id });
  };

  return {
    // customer:{},
    // user:{},
    // date:Date(),
    items: cartState.items,
    onAddItem: addCartHandler,
    onRemoveItem: removeCartHandler,
    totalAmount: cartState.totalAmount,
    totalPrice: cartState.totalPrice,
  };
};
export default InvoiceContextProvider;
