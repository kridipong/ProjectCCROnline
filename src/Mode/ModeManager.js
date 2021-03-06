import React, { useState } from "react";
import AddMode from "./AddMode";
import ModeList from "./ModeList";
import Button from "../GlobalComponents/Button";
import classes from "./ModeManager.module.css";

const ModeManager = (props) => {
  const [modes, setModes] = useState([]);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  async function onAddModeHandler(mode) {
    setError(null);
    setIsLoading(true);
    try {
      const response = await fetch(
        "https://ccrol-75eef-default-rtdb.asia-southeast1.firebasedatabase.app/mode.json",
        {
          method: "POST",
          body: JSON.stringify(mode),
          header: {
            "Constext-Type": "application/json",
          },
        }
      );

      if (!response.ok) {
        throw new Error("cannot add item to the dataBase " + response.status);
      }
      const data = await response.json();
      console.log(data);
      fetchModeListHandler();
    } catch (error) {
      setError(error.message);
    }
  }

  async function fetchModeListHandler() {
    setIsLoading(true);
    setError(null);

    try {
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
      setIsLoading(false);
    } catch (error) {
      setError(error.message);
      setIsLoading(false);
    }
  }
  return (
    <div className={classes.control}>
      <AddMode onAdd={onAddModeHandler} />

      <br />
      <ModeList
        modes={modes}
        onFetch={fetchModeListHandler}
        isLoading={isLoading}
        hasError={error}
      ></ModeList>
    </div>
  );
};
export default ModeManager;
