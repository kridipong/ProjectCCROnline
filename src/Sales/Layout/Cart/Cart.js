import React, { useContext, useState } from "react";
import InvoiceContext from "../../Store/invoice-context";
import Card from "../../Components/Card";
import CartItem from "./CartItem";
import PopupPrice from "../../Popup/PopupPrice";
import classes from './Cart.module.css';

const Cart = (props) => {
  const ctx = useContext(InvoiceContext);

  const onAddItemHandler = (item) => {
    ctx.onAddItem({ ...item, addAmount: 1 });
  };

  const onRemoveItemHandler = item => {
    ctx.onRemoveItem(item);
  }

  const [showEditPrice, setShowEditPrice] = useState(false);
  const [focusItem, setFocusItem] = useState();

  const priceEditHandler = (item) => {
    setShowEditPrice(true);
    setFocusItem(item);
  };
  const listCart = ctx.items.map((item) => (
    <CartItem
      key = {item.itemcode}
      item={item}
      onAdd={onAddItemHandler.bind(null, item)}
      onRemove={onRemoveItemHandler.bind(null,item)}
      onPriceEdit={priceEditHandler.bind(null, item)}
    />
  )); //without binding we cannot send value into function from this callback, that's why we need the  .bind(null,item)

  const hidePriceEditHandler = (event) => {
    setShowEditPrice(false);
  };

  return (
    <Card className = {classes.cart}>
      {showEditPrice && (
        <PopupPrice onClose={hidePriceEditHandler} item={focusItem} />
      )}
      <ul>
      {listCart}
      </ul>
    </Card>
  );
};
export default Cart;
