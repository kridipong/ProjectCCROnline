import React from "react";
import classes from './ModeItem.module.css';

const ModeItem = (props) => {
  return (
    <div className= {classes.modeitem} key={props.mode.ModeCode}>
      <h2> {props.mode.ModeCode} </h2>
      <h2> {props.mode.ModeName} </h2>
      <button>...</button>
    </div>
  );
};
export default ModeItem;
