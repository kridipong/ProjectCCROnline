import React, { useState, useCallBack } from "react";
import PartNameList from "./PartNameList";
import AddPartName from "./AddPartName";

const PartName = (props) => {
  const [modes, setModes] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

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

  return (
    <div>
      <button onClick={fetchMode}>fetch</button>
      <AddPartName modes={modes} />
    </div>
  );
};
export default PartName;
