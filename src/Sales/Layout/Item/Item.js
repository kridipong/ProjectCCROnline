import React, { useState, useContext } from "react";
import InvoiceContext from '../../Store/invoice-context';
import Card from "../../Components/Card";
import classes from "../Item/item.module.css";


const Item = (props) => {
  const item = {
    itemcode: "0000000012",
    fullname: "test item",
    detail: "test details",
    stk: 1,
    price1: 300,
    price2: 280,
    price3: 260,
    cost: 200,
    bonusfactor: 1,
  };

  const ctx = useContext(InvoiceContext);

  function getPrice(customerType) {
    if (customerType === "1") {
      return item.price1;
    }
    if (customerType === "2") {
      return item.price2;
    }
    if (customerType === "3") {
      return item.price3;
    }
    return item.price1;
  }


  const suggestedPrice = getPrice("2");

  const [amount, setAmount] = useState(suggestedPrice);
  const [addAmount, setAddAmount] = useState(1);

  const changeAmountHandler = (event) => {
    event.preventDefault();
    setAmount(event.target.value * suggestedPrice);
    setAddAmount(+event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    // const amount = amountInputRef;

    ctx.onAddItem({
     itemcode:item.itemcode,
     fullname:item.fullname,
     detail:item.detail,
     addAmount:addAmount,
     price:suggestedPrice,
     bonusfactor:item.bonusfactor ,
    })

  };



  return (
    <Card className={classes.item} >
      <form onSubmit={submitHandler } >
        <span className={classes.lineitem}> {`${item.itemcode}  `} </span>
        <span className={classes.lineitem}> {`${item.fullname}`}</span>
        <span className={classes.lineitem}> {`${item.detail}`}</span>
        <span className={classes.lineitem}>{suggestedPrice} </span>
        <span className={classes.lineitem}>{amount.toFixed(2)}</span>
        <input
          
          className={classes.amount}
          type="number"
          min="1"
          step="1"
          defaultValue="1"
          onChange={changeAmountHandler}
        />
        <button className={classes.button}>
          Add+
        </button>
      </form>
    </Card>
  );
};

export default Item;
