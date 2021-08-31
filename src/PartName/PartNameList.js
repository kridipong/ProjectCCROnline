import React from "react";
import Card from "../GlobalComponents/Card";
import Button from "../GlobalComponents/Button";
import PartNameItem from "./PartNameItem";

const PartNameList = (props) => {
  const modeName = (modecode) => {
    const modeIndex = props.modes.findIndex(
      (mode) => mode.ModeCode === modecode
    );
    let modename = "";
    if (modeIndex !== -1) {
      modename = props.modes[modeIndex].ModeName;
    } else {
      modename = "error";
    }

    return modename;
  };

  const content = props.partnames.map((partname) => {
    return (
      <PartNameItem
        partname={partname}
        modename={modeName(partname.ModeCode)}
      />
    );
  });

  const fetchPartnameHandler = () => {
    props.onFetch();
  };

  return (
    <Card>
      <Button onClick={fetchPartnameHandler}>fetch</Button>
      {content}
    </Card>
  );
};
export default PartNameList;
