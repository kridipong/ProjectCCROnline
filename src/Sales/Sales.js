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
      <div className = {classes.control}>
      <div>
        <Header />
      </div>
      <br />
      <span>
        <Summary />
      </span>
      <br />
      <Item></Item>
      <Cart></Cart>
      </div>
    </InvoiceContextProvider>
  );
}

export default Sales;
