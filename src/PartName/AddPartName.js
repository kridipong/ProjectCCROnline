import React, { useRef, useState } from "react";
import Card from "../GlobalComponents/Card";
import Input from "../GlobalComponents/Input";
import Button from '../GlobalComponents/Button';

const AddPartName = (props) => {
  const partCodeRef = useRef();
  const partNameRef = useRef();
  const [modeCode, setModeCode] = useState();

  const listOptions = props.modes.map((mode) => (
    <option value={mode.ModeCode} key={mode.ModeCode}>
      {mode.ModeName}
    </option>
  ));

  const modeChangeHandler=(event)=>{
    event.preventDefault();
    setModeCode(event.target.value);
  }

  const addNewPartNameHandler =()=> {
    const enteredPartCode=partCodeRef.current.value;
    const enteredPartName= partNameRef.current.value;
    props.onAddPartName({PartCode:enteredPartCode, PartName:enteredPartName, ModeCode:modeCode});
    console.log(enteredPartCode, enteredPartName, modeCode);
  }


  return (
    <Card>

      <label htmlFor="หมวด">หมวด </label>
      <select name="หมวด" onChange={modeChangeHandler}>
        {listOptions}
      </select>

        <Input
          label="PartCode"
          input={{ id: "PartCode", type: "text" }}
          ref={partCodeRef}
        />
        <Input
          ref={partNameRef}
          label="PartName"
          input={{
            id: "PartName",
            type: "text",
          }}
        />
        <Button onClick={addNewPartNameHandler}>+Add PartName</Button>
    </Card>
  );
};
export default AddPartName;
