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
  const fullNameRef = useRef();
  const detailRef = useRef();
  const [newItemCode, setNewItemCode] = useState("0000000001");

  const listGrades = grades.map((grade) => (
    <option key={grade.GradeCode} value={grade.GradeCode}>
      {grade.GradeName}
    </option>
  ));

  return (
    <Card className={classes.control}>
      <label> Grade </label>
      <select name="grade"> {listGrades} </select>
      <br />
      <br />
      <Input
        label="ItemCode"
        input={{
          id: "ItemCode",
          type: "text",
          value: newItemCode,
          readOnly: true,
        }}
      />
      <Input
        label="FullName"
        input={{ id: "FullName", type: "text", className: classes.fullname }}
        ref={fullNameRef}
      />
      <Input
        label="Detail"
        input={{ id: "Detail", type: "text", className: classes.fullname }}
        ref={detailRef}
      />

      <Input label="หน่วย" input={{ id: "unit", type: "text" }} />

      <Input label="Price1" input={{ id: "price1", type: "number" }} />

      <Input label="Price2" input={{ id: "price2", type: "number" }} />

      <Input label="Price3" input={{ id: "price3", type: "number" }} />

      <Input label="bonus" input={{ id: "bonus", type: "number" }} />

      <Input label="barcode" input={{ id: "barcode", type: "text" }} />
<br />
      <Button> Add ITEM </Button>
    </Card>
  );
};
export default ItemDetail;
