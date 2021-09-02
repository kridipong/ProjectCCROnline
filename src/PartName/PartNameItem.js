
import React from "react";
import EditIcon from "../GlobalComponents/EditIcon";
import classes from './PartNameItem.module.css';

const PartNameItem = (props) => {
  return (
    <div key={props.partname.PartCode} className ={classes.partnameitem}>
      <span className={classes.modename}>{props.modename}</span>
      <span className={classes.partcode}>{props.partname.PartCode}</span>
      <span className={classes.partname} >{props.partname.PartName}</span>
 
      <button   >
        <EditIcon />
        ...
    </button>
    </div>
  );
};
export default PartNameItem;
