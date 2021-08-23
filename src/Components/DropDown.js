import React, { Fragment } from "react";


const DropDown = (props) => {

    const listOptions = props.options.map((choice)=><option key = {props.key} value={choice.id}>{choice.name}</option>);


  return (
    <Fragment>
      <label> {props.label} </label>
      <select name={props.label} onChange={props.onChange}>
        {listOptions}
      </select>
    </Fragment>
  );
};
export default DropDown;
