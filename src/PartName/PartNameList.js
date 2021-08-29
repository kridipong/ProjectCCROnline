import React from "react";
import Card from "../GlobalComponents/Card";
import Button from "../GlobalComponents/Button";

const PartNameList = (props) => {
  const modeName = (modecode) => {
    const modeIndex = props.modes.findIndex((mode) => mode.ModeCode === modecode);
    const modename =props.modes[modeIndex].ModeName;

    return modename;
  };
  const content = props.partnames.map((partname) => {
    return (
      <div>
        <span>{modeName(partname.ModeCode)}</span>
        <span>{partname.PartCode}</span>
        <span>{partname.PartName}</span>
      </div>
    );
  });

  const fetchPartnameHandler =()=> {
    props.onFetch();
  }


  return (
    <Card>
      <Button onClick={fetchPartnameHandler}>fetch</Button>
      {content}
    </Card>
  );
};
export default PartNameList;
