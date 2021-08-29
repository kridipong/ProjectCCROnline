import React, { useState, useCallBack, useEffect } from "react";
import PartNameList from "./PartNameList";
import AddPartName from "./AddPartName";
import Button from "../GlobalComponents/Button";

const PartName = (props) => {
  const [modes, setModes] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [partnames, setPartnames] = useState([]);



  const fetchMode = async () => {
    setIsLoading(true);

    const response = await fetch(
      "https://ccrol-75eef-default-rtdb.asia-southeast1.firebasedatabase.app/mode.json"
    );
    const data = await response.json();

    const transformedData = [];

    for (const key in data) {
      transformedData.push({
        ModeCode: data[key].ModeCode,
        ModeName: data[key].ModeName,
      });
    }

    setModes(transformedData);
    console.log(transformedData);
    setIsLoading(false);
  };

  useEffect(() => {
    fetchMode();
    fetchPartNameList();
  }, []);

  const addPartNameHandler = async (partName) => {
    setIsLoading(true);
    const response = await fetch(
      "https://ccrol-75eef-default-rtdb.asia-southeast1.firebasedatabase.app/partname.json",
      {
        method: "POST",
        body: JSON.stringify(partName),
        header: { "Context-Type": "application/JSON" },
      }
    );

    if (!response.ok) {
      throw new Error("cannot add partname into dataBase" + response.status);
    }
    const data = await response.json();
    console.log(data);
    fetchPartNameList();

  };

  const fetchPartNameList =async ()=>{
    setIsLoading(true);
    const response  = await fetch("https://ccrol-75eef-default-rtdb.asia-southeast1.firebasedatabase.app/partname.json")
    const data = await response.json();

    const transformedData = [];

    for (const key in data) {
      transformedData.push({
        PartCode: data[key].PartCode,
        PartName: data[key].PartName,
        ModeCode: data[key].ModeCode,
      });
    }

    setPartnames(transformedData);
    setIsLoading(false);
  }

  return (
    <div>
      <AddPartName modes={modes} onAddPartName={addPartNameHandler} />
      {isLoading && <p> is Loading ..</p>}

      <PartNameList modes={modes} partnames={partnames} onFetch= {fetchPartNameList}></PartNameList>
    </div>
  );
};
export default PartName;
