import React, { useContext } from "react";
import Card from "../../../GlobalComponents/Card";
import InvoiceContext from "../../Store/invoice-context";

const Summary = (props) => {
  const ctx = useContext(InvoiceContext);

  return (
    <Card>
      <p>{`count ${ctx.totalAmount}`} </p>
      <p>{`total Amount : ${ctx.totalPrice} bath`}</p>
      <p>{`total Bonus : ${ctx.totalBonus} bath`} </p>
    </Card>
  );
};
export default Summary;
