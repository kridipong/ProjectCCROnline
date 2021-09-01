import React, { useState, useEffect } from "react";
import PartNameList from "./PartNameList";
import AddPartName from "./AddPartName";
import classes from "./PartName.module.css";

const PartName = (props) => {
  const [modes, setModes] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [partnames, setPartnames] = useState([]);
  const [newPartCode, setNewPartCode] = useState();
  const [error, setError] = useState(null);

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
      console.log(transformedData);
      setIsLoading(false);
    } catch (error) {
      setError(error.message);
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchMode();
    // fetchPartNameList();
  }, []);

  const addPartNameHandler = async (partName) => {
    setIsLoading(true);
    setError(null);
    try {
      const response = await fetch(
        "https://ccrol-75eef-default-rtdb.asia-southeast1.firebasedatabase.app/partname.json",
        {
          method: "POST",
          body: JSON.stringify(partName),
          header: { "Context-Type": "application/JSON" },
        }
      );

      if (!response.ok) {
        throw new Error("cannot add partname into dataBase   " + response.status);
      }
      const data = await response.json();
      console.log(data);
      fetchPartNameList();
      setIsLoading(false);
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

  const lastPartCode = (partnames) => {
    const lastPartcode = partnames[partnames.length - 1].PartCode;
    const newPartCode = formatNumberToText(+lastPartcode + 1, 3);
    setNewPartCode(newPartCode);
    console.log(newPartCode);
  };

  const fetchPartNameList = async () => {
    setError(null);
    setIsLoading(true);
    try {
      const response = await fetch(
        "https://ccrol-75eef-default-rtdb.asia-southeast1.firebasedatabase.app/partname.json"
      );

      if (!response.ok) {
        throw new Error ("cannot fetch partname from the dataBase   " + response.status)
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

      setPartnames(transformedData);
      lastPartCode(transformedData);
      setIsLoading(false);
    } catch (error) {
      setError(error.message);
      setIsLoading(false);
    }
  };

  return (
    <div className={classes.control}>
      <AddPartName
        modes={modes}
        onAddPartName={addPartNameHandler}
        newPartCode={newPartCode}
      />
      <br />


      <PartNameList
        modes={modes}
        partnames={partnames}
        onFetch={fetchPartNameList}
        isLoading ={isLoading}
        hasError = {error}
      ></PartNameList>
    </div>
  );
};
export default PartName;
