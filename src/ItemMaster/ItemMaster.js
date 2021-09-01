import React,{useState} from "react";
import PartNamePart from "./PartNamePart";
import classes from "./ItemMaster.module.css";
import ItemDetail from './ItemDetail';

const ItemMaster = (props) => {

  const  [phase,setPhase] =useState("1");
  

  return (
    <div  className = {classes.header} >
    <div>
      <PartNamePart></PartNamePart>
    </div>
    <br />
    <div>
      <ItemDetail></ItemDetail>
    </div>
    </div>
  );
};
export default ItemMaster;
