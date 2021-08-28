import Header from './Layout/Header/Header';
import Item from "./Layout/Item/Item";
import Cart from "./Layout/Cart/Cart";
import Summary from "./Layout/Header/Summary";
import InvoiceContextProvider from "./Store/invoice-context-provider";
import React from "react";


function Sales() {
  return (
    <InvoiceContextProvider>
      <span>
        <Header />
      </span>
      <span>
        <Summary />
      </span>
      <Item></Item>
      <Cart></Cart>
    </InvoiceContextProvider>
  );
}

export default Sales;