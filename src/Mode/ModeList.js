import React from "react";
import Card from "../GlobalComponents/Card";

const ModeList = (props) => {
  const content = props.modes.map((mode) => {
    return (
      <div key ={mode.ModeCode }>
        <span> {mode.ModeCode} </span>
        <span> {mode.ModeName} </span>
        <button>...</button>
      </div>
    );
  });

  return (
    <Card>
      {content}
    </Card>
  );
};

export default ModeList;
