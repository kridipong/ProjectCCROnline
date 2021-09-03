import React, { useRef, useState } from "react";
import Card from "../GlobalComponents/Card";
import classes from "./ItemDetail.module.css";
import Input from "../GlobalComponents/Input";
import Button from "../GlobalComponents/Button";

const grades = [
  { GradeCode: "0", GradeName: "กรุณาเลือกเกรด" },
  { GradeCode: "1", GradeName: "แท้ห้าง" },
  { GradeCode: "2", GradeName: "เกรด A" },
  { GradeCode: "3", GradeName: "เกรด B" },
  { GradeCode: "4", GradeName: "เกรด C" },
];

// const units = ["หน่วย", "ลูก", "ชิ้น", "ชุด", "กล.", "กป.", "อัน"];

const ItemDetail = (props) => {
  const itemcodeRef = useRef();
  const fullNameRef = useRef();
  const detailRef = useRef();
  const unitRef = useRef();
  const price1Ref = useRef();
  const price2Ref = useRef();
  const price3Ref = useRef();
  const bonusRef = useRef();
  const barcodeRef = useRef();
  const [gradeCode,setGradeCode] = useState("0");
  // const [clearInput,setClearInput] = useState({
  //   FullName: '',
  //   Detail: '',
  //   Unit: '',
  //   Price1: 0,
  //   Price2: 0,
  //   Price3: 0,
  //   BonusFactor: 1,
  //   Barcode: '',
  // });

  const listGrades = grades.map((grade) => (
    <option key={grade.GradeCode} value={grade.GradeCode}>
      {grade.GradeName}
    </option>
  ));

  const changeGradeHandler=event=> {
    setGradeCode(event.target.value);
  }

  const submitHandler = () => {
    const genItemCode = itemcodeRef.current.value;
    const enteredFullName = fullNameRef.current.value;
    const enteredDetail = detailRef.current.value;
    const enteredUnit = unitRef.current.value;
    const enteredPrice1 = price1Ref.current.value;
    const enteredPrice2 = price2Ref.current.value;
    const enteredPrice3 = price3Ref.current.value;
    const enteredBonus = bonusRef.current.value;
    const enteredBarcode = barcodeRef.current.value;

  

    props.onAdd({
      ItemCode: genItemCode,
      FullName: enteredFullName,
      Grade:gradeCode,
      Detail: enteredDetail,
      Unit: enteredUnit,
      Price1: enteredPrice1,
      Price2: enteredPrice2,
      Price3: enteredPrice3,
      BonusFactor: enteredBonus,
      Barcode: enteredBarcode,
    });


  };




  return (
    <Card className={classes.control}>
      <h4> {props.partName }</h4>
      <label> Grade </label>
      <select name="grade" onChange={changeGradeHandler}> {listGrades} </select>
      <br />
      <br />
      <Input
        label="ItemCode"
        input={{
          id: "ItemCode",
          type: "text",
          value: props.itemCode,
          readOnly: true,
        }}
        ref={itemcodeRef}
      />
      <Input
        label="FullName"
        input={{ id: "FullName", type: "text" }}
        ref={fullNameRef}

      />
      <Input
        label="Detail"
        input={{ id: "Detail", type: "text" }}
        ref={detailRef}
      />

      <Input label="หน่วย" input={{ id: "unit", type: "text" }} ref={unitRef} />

      <Input label="Price1" input={{ id: "price1", type: "number" }} ref = {price1Ref} />

      <Input label="Price2" input={{ id: "price2", type: "number" }} ref= {price2Ref} />

      <Input label="Price3" input={{ id: "price3", type: "number" }} ref = {price3Ref} />

      <Input label="bonus" input={{ id: "bonus", type: "number" }} ref= {bonusRef} />

      <Input label="barcode" input={{ id: "barcode", type: "text" }} ref = {barcodeRef} />
      <br />
      <Button onClick={submitHandler}> Add ITEM </Button>
    </Card>
  );
};
export default ItemDetail;
