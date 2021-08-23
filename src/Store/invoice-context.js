import React from "react";

const InvoiceContext = React.createContext({
  // customer:{},
  // user:{},
  // date:Date(),
  items: [
    {
      itemcode: "0000000012",
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
    },
  ],
  onAddItem: (item) => {}, //{itemcode:'', fullname:'',detail:'', addAmount:'', bonusFactor:0,price:0, cost:0, stk:0 }
  onRemoveItem: (item) => {},
  totalAmount: 0,
  totalPrice: 0,
  totalBonus:0,
});

export default InvoiceContext;
