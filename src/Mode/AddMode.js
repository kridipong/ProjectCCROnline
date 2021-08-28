import Card from '../GlobalComponents/Card';
import React, {useRef} from "react";
import Input from "../GlobalComponents/Input";
import classes from './AddMode.module.css';
import Button from '../GlobalComponents/Button';


const AddMode = (props) => {

    const modeCodeRef = useRef();
    const modeNameRef = useRef();

    const addHandler =()=>{
        const enteredCode = modeCodeRef.current.value;
        const enteredName= modeNameRef.current.value;
        console.log(enteredCode+enteredName);
        props.onAdd({ModeCode: enteredCode , ModeName: enteredName });
    }

  return (
    <Card >
      <div className = {classes.input}>
      <Input className={classes.input} label="ModeCode" input={{className:classes.input , id: "ModeCode", type: "text" }} ref= {modeCodeRef} />
      <Input className ={classes.input}
        ref={modeNameRef}
        label="ModeName"
        input={{
          id: "ModeName",
          type: "text",
        }}
      />
      <Button onClick = {addHandler}>+Add Mode </Button>
      </div>
</Card>
  );
};
export default AddMode;
