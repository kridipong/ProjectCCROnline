import React from 'react';


const InvoiceContext = React.createContext({
// customer:{},
// user:{},
// date:Date(),
items:[],
onAddItem:(item)=>{}, //{itemcode:'', fullname:'',detail:'', addAmount:'', bonusFactor:0,price:0, cost:0, stk:0 }
onRemoveItem:(item)=>{},
totalAmount:0,
totalPrice:0,
});

export default InvoiceContext;