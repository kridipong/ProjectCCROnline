import React, { useContext } from "react";
import Card from "../../../GlobalComponents/Card";
import InvoiceContext from "../../Store/invoice-context";
import classes from './Summary.module.css';

const Summary = (props) => {
  const ctx = useContext(InvoiceContext);

  return (
    <Card className = {classes.control}>
      <div>
        <p>{`count ${ctx.totalAmount}`} </p>
        <p>{`total Amount : ${ctx.totalPrice} bath`}</p>
        <p>{`total Bonus : ${ctx.totalBonus} bath`} </p>
      </div>
    </Card>
  );
};
export default Summary;
