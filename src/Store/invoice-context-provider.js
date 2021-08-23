import InvoiceContext from "./invoice-context";
import React, {  useReducer } from "react";

const cartReducer = (state, action) => {
  if (action.type === "ADD") {

    const existingCartItemIndex = state.items.findIndex(
      (item) => item.itemcode === action.item.itemcode
    );
    const existingCartItem = state.items[existingCartItemIndex];

    let updatedItems;
    let updatedItem;

    if (existingCartItem) {

      updatedItem = {
        ...existingCartItem,
        addAmount: existingCartItem.addAmount + action.item.addAmount,
      };
      updatedItems = [...state.items];
      updatedItems[existingCartItemIndex] = updatedItem;
    } else {
      updatedItems = [...state.items];
      updatedItems.unshift(action.item);
    }
    const updatedTotalAmount = state.totalAmount + action.item.addAmount;
    const updatedTotalPrice =
      state.totalPrice + action.item.price * action.item.addAmount;
    const updatedTotalBonus = state.totalBonus+ action.item.bonusfactor*action.item.price*action.item.addAmount;

    return {
      items: updatedItems,
      totalAmount: updatedTotalAmount,
      totalPrice: updatedTotalPrice,
      totalBonus:updatedTotalBonus,
    };
  }
};

const InvoiceContextProvider = (props) => {
  const [cartState, dispacthCartAction] = useReducer(cartReducer, {
    items: [    {
      itemcode: "0000000412",
      fullname: "first item order",
      detail: "detail about the first item",
      addAmount: 1,
      price: 500,
      bonusfactor: 1,
      cost: 400,
      stk: 2,
    },
    {
      itemcode: "0000000312",
      fullname: "second item order",
      detail: "detail about the second item",
      addAmount: 2,
      price: 500,
      bonusfactor: 1,
      cost: 400,
      stk: 5,
    },],
    totalAmount: 3,
    totalPrice: 2500,
    totalBonus: 2500,
  });

  const addCartHandler = (item) => {
    dispacthCartAction({ type: "ADD", item: item });
  };

  const removeCartHandler = (id) => {
    dispacthCartAction({ type: "REMOVE", id: id });
  };

  const invoiceContext = {
    // customer:{},
    // user:{},
    // date:Date(),

    items: cartState.items,
    onAddItem: addCartHandler,
    onRemoveItem: removeCartHandler,
    totalAmount: cartState.totalAmount,
    totalPrice: cartState.totalPrice,
    totalBonus: cartState.totalBonus,
  };

  return (
    <InvoiceContext.Provider value={invoiceContext}>
      {props.children}
    </InvoiceContext.Provider>
  );
};
export default InvoiceContextProvider;
