import React, { Fragment, useRef } from "react";
import classes from "./ItemLocal.module.css";
import Button from "../GlobalComponents/Button";
import Input from "../GlobalComponents/Input";
import Card from "../GlobalComponents/Card";

const ItemLocal = (props) => {
  const costRef = useRef();
  const locationRef = useRef();
  const lowlimitRef = useRef();
  const recStockRef = useRef();
  const lotAmountRef = useRef();

  const clickHandler = () => {
    const inputCost = costRef.current.value;
    const inputLocation = locationRef.current.value;
    const inputLowLimit = lowlimitRef.current.value;
    const inputRecStock = recStockRef.current.value;
    const inputLotAmount = lotAmountRef.current.value;

    props.onAdd({
      ItemCode: props.item.ItemCode,
      NumberInStock: 0,
      NumberInOrder: 0,
      LowLimitWarning: inputLowLimit,
      RolledCost:inputCost,
      RecStock:inputRecStock,
      LotAmount:inputLotAmount,
      Location:inputLocation,
    });
  };

  return (
    <Fragment>
      <Card>
        <div className={classes.itemlocal}>
          <h3> {props.item.ItemCode} </h3>
          <h4> {props.item.partName} </h4>
          <p> {props.item.FullName} </p>
          <p> {props.item.Detail} </p>
          <p> {props.item.Unit} </p>
          <p> {`ราคา ${props.item.Price1} บาท`} </p>
          <p> {`ราคา ${props.item.Price2} บาท`} </p>
          <p> {`ราคา ${props.item.Price3} บาท`} </p>
          <p> {`bonus:  ${props.item.BonusFactor} X factor`}</p>
          <span> {`barcode: ${props.item.Barcode}`} </span>
          <Button>edit..</Button>
        </div>
      </Card>
      <br />
      <Card>
        <div className={classes.itemlocal2}>
          <Input
            label="จำนวนก่อนเตือน"
            input={{
              id: "lowlimitwarning",
              type: "number",
            }}
            ref={lowlimitRef}
          />
          <Input
            label="สต๊อกแนะนำ"
            input={{
              id: "recStock",
              type: "number",
            }}
            ref={recStockRef}
          />

          <Input
            label="จำนวนต่อล็อต"
            input={{
              id: "lotAmount",
              type: "number",
            }}
            ref={lotAmountRef}
          />
          <Input
            label="ต้นทุน"
            input={{
              id: "cost",
              type: "number",
            }}
            ref={costRef}
          />

          <Input
            label="location"
            input={{
              id: "location",
              type: "text",
            }}
            ref={locationRef}
          />
          <br />
          <Button onClick={clickHandler}>+Add</Button>
        </div>
      </Card>
    </Fragment>
  );
};
export default ItemLocal;
