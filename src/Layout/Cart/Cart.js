import React, {  useContext } from "react";
import InvoiceContext from "../../Store/invoice-context";
import Card from '../../Components/Card';
import CartItem from "./CartItem";

const Cart = (props) => {
  const ctx = useContext(InvoiceContext);

    const onAddItemHandler= (item)=>{
        ctx.onAddItem({...item, addAmount:1});
    }

    const listCart = ctx.items.map((item)=> <CartItem item={item} onAdd = {onAddItemHandler.bind(null,item)} /> ); //without binding we cannot send value into function from this callback, that's why we need the  .bind(null,item)


  return (
    <Card>
        {listCart}
    </Card>
  );
};
export default Cart;
