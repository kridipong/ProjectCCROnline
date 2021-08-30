import React from "react";
import classes from './DropDown.module.css';


const DropDown = (props) => {

    const listOptions = props.options.map((choice)=><option key={choice.id} value={choice.id}>{choice.name}</option>);


  return (
    <div className= {classes.dropdown}>
      <label> {props.label} </label>
      <select name={props.label} onChange={props.onChange}>
        {listOptions}
      </select>
    </div>
  );
};
export default DropDown;
