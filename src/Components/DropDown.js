import React, { Fragment } from "react";


const DropDown = (props) => {

    const listOptions = props.options.map((choice)=><option value={choice.id}>{choice.name}</option>);
    console.log(listOptions);
    console.log(props.options);

  return (
    <Fragment>
      <label> {props.label} </label>
      <select name={props.label}>
        {listOptions}
      </select>
    </Fragment>
  );
};
export default DropDown;
