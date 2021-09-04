import Header from './Layout/Header/Header';
import Item from "./Layout/Item/Item";
import Cart from "./Layout/Cart/Cart";
import Summary from "./Layout/Header/Summary";
import InvoiceContextProvider from "./Store/invoice-context-provider";
import React from "react";
import classes from './Sales.module.css';

function Sales() {
  return (
    <InvoiceContextProvider>
      <div  style={{ display: "flex", flexWrap: "wrap"  } }>
      <div className = {classes.header} >
        <Header />
      </div>
      <div className = {classes.summary}>
        <Summary />
      </div>
      </div> 
      <br />
      <Item></Item>
      <Cart></Cart>
   
    </InvoiceContextProvider>
  );
}

export default Sales;
