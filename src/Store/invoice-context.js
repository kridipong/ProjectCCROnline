import React from 'react';




const InvoiceContext = React.createContext({
customer:{},
user:{},
date:Date(),
items:[],
onAdd:(item)=>{},
onRemove:(item)=>{},
totalAmount:0,
});

export default InvoiceContext;