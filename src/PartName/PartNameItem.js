
import React from "react";
import EditIcon from "../GlobalComponents/EditIcon";
import classes from './PartNameItem.module.css';

const PartNameItem = (props) => {
  return (
    <div key={props.partname.PartCode} className ={classes.partnameitem}>
      <span className={classes.summary}>{props.modename}</span>
      <span className={classes.summary}>{props.partname.PartCode}</span>
      <span>{props.partname.PartName}</span>
      <button   >
        <EditIcon  className = {classes.icon}/>
    </button>
    </div>
  );
};
export default PartNameItem;
