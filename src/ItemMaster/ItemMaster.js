import React, { useState, useEffect } from "react";
import PartNamePart from "./PartNamePart";
import classes from "./ItemMaster.module.css";
import ItemDetail from "./ItemDetail";
import Card from '../GlobalComponents/Card';

const ItemMaster = (props) => {
  const [phase, setPhase] = useState("1");
  const [partCode, setPartCode] = useState("");
  const [showDetail, setShowDetail] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [newItemCode, setNewItemCode] = useState("0000000001");

  useEffect(() => {
    console.log(partCode);
    if (partCode !== "") {
      setShowDetail(true);
    }
  }, [partCode]);

  const partNameSelectHandler =(partcode) =>{
    setPartCode(partcode);
    fetchNewItem();
  }

  const addItemHandler = async (item) => {
    setIsLoading(true);
    setError(null);
    const newItem = {...item, PartCode:partCode};
    try {
      const response = await fetch(
        "https://ccrol-75eef-default-rtdb.asia-southeast1.firebasedatabase.app/Itemdetail.json",
        {
          method: "POST",
          body: JSON.stringify(newItem),
          header: { "Context-Type": "application/JSON" },
        }
      );

      if (!response.ok) {
        throw new Error("cannot add partname into dataBase   " + response.status);
      }
      const data = await response.json();
      console.log(data);
      setIsLoading(false);
      setShowDetail(false);
      setPhase("2");
    } catch (error) {
      setError(error.message);
      setIsLoading(false);
    }

  };


  function formatNumberToText(num, size) {
    var s = num + "";
    while (s.length < size) s = "0" + s;
    return s;
  }

  const fetchNewItem = async () => {
    setError(null);
    setIsLoading(true);
    try {
      const response = await fetch(
        "https://ccrol-75eef-default-rtdb.asia-southeast1.firebasedatabase.app/Itemdetail.json"
      );

      if (!response.ok) {
        throw new Error ("cannot fetch partname from the dataBase   " + response.status)
      }

      const data = await response.json();

      const transformedData = [];

      for (const key in data) {
        transformedData.push({
          ItemCode: data[key].ItemCode,
          FullName: data[key].FullName,
          Detail:data[key].Detail,
          PartCode: data[key].PartCode,
          Price1: data[key].Price1,
          Price2: data[key].Price2,
          Price3: data[key].Price3,
          Bonus: data[key].BonusFactor,
          Unit:data[key].Unit,
          Barcode:data[key].Barcode,
        });
      }
      
      const lastItem = transformedData[transformedData.length-1]
      const newItemcode = formatNumberToText(+lastItem.ItemCode+1,10 );
      console.log(lastItem);

      setNewItemCode(newItemcode);

      setIsLoading(false);
    } catch (error) {
      console.log(error.message);
      setError(error.message);
      setIsLoading(false);
    }
  };


  return (
    <div className={classes.header}>
      <div>
        <PartNamePart onSelect={partNameSelectHandler}></PartNamePart>
      </div>
      <br />
      <div>
        {phase ==="1" && !showDetail && <p> Please Choose Mode and Partname to continue.. </p> }
        {phase ==="1" && showDetail && <ItemDetail itemCode={newItemCode} onAdd={addItemHandler}></ItemDetail>}
        {phase ==="1" &&  isLoading && <Card> <p> adding new item to dataBase .... </p> </Card> }

        {phase === "2" && <Card> <p> phase 2 .... </p> </Card>  }
      </div>
    </div>
  );
};
export default ItemMaster;
