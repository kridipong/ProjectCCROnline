import React, { useState, useEffect } from "react";
import Card from "../GlobalComponents/Card";
import classes from "./PartNamePart.module.css";


const PartNamePart = (props) => {
  const [modes, setModes] = useState([]);
  const [partnames, setPartnames] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [selectedMode, setSelectedMode] = useState("01");


  const fetchMode = async () => {
    setError(null);
    setIsLoading(true);
    try {
      const response = await fetch(
        "https://ccrol-75eef-default-rtdb.asia-southeast1.firebasedatabase.app/mode.json"
      );

      if (!response.ok) {
        throw new Error(
          "cannot fetch Mode from the dataBase  " + response.status
        );
      }

      const data = await response.json();

      const transformedData = [];

      for (const key in data) {
        transformedData.push({
          ModeCode: data[key].ModeCode,
          ModeName: data[key].ModeName,
        });
      }

      setModes(transformedData);
      setIsLoading(false);
    } catch (error) {
      setError(error.message);
      setIsLoading(false);
    }
  };

  const modeChangeHandler = (event) => {
    setSelectedMode(event.target.value);
    // fetchPartNameList(event.target.value);

  };

  const partnameChangeHandler = (event) => {
    props.onSelect(event.target.value);

  };

  useEffect(() => {
    fetchMode();
  }, []);

  useEffect(() => {
    fetchPartNameList(selectedMode);
    console.log(selectedMode);
  }, [selectedMode]);

  const fetchPartNameList = async (modecode) => {
    setError(null);
    setIsLoading(true);
    console.log(modecode);
    try {
      const response = await fetch(
        "https://ccrol-75eef-default-rtdb.asia-southeast1.firebasedatabase.app/partname.json"
      );

      if (!response.ok) {
        throw new Error(
          "cannot fetch partname from the dataBase   " + response.status
        );
 
      }

      const data = await response.json();

      const transformedData = [];

      for (const key in data) {
        transformedData.push({
          PartCode: data[key].PartCode,
          PartName: data[key].PartName,
          ModeCode: data[key].ModeCode,
        });
      }

      const filteredPartnames = transformedData.filter(
        (partname) => partname.ModeCode === modecode
      );

      setPartnames(filteredPartnames);
      console.log(filteredPartnames);

      setIsLoading(false);
    } catch (error) {
        console.log("error list partname" + error.message);
      setError(error.message);
      setIsLoading(false);
    }
  };

  const listModes = modes.map((mode) => (
    <option value={mode.ModeCode} key={mode.ModeCode}>
      {mode.ModeName}
    </option>
  ));

  const listPartnames = partnames.map((partname) => (
    <option value={partname.PartCode} key={partname.PartCode}>
      {partname.PartName}
    </option>
  ));

  return (
    <Card>
      <div className={classes.control}>
        <label> Mode </label>
        <select name="mode" onClick={modeChangeHandler} >
          {listModes}
        </select>
      </div>

      <div className={classes.control}>
        <label> PartName </label>
        <select name="partname" onClick={partnameChangeHandler}>
          {listPartnames}
        </select>
      </div>

    </Card>
  );
};
export default PartNamePart;
