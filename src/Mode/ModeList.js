import React from "react";
import Card from "../GlobalComponents/Card";
import Button from "../GlobalComponents/Button";
import ModeItem from "./ModeItem";

const ModeList = (props) => {
  const content = props.modes.map((mode) => {
    return <ModeItem mode={mode} />;
  });

  const fetchHandler = () => {
    props.onFetch();
  };

  return (
    <Card>
      <Button onClick={fetchHandler}>FETCH</Button>
      {props.hasError && <p> there is errror on posting </p>}
      {props.isLoading && <p> fetching .. </p>}
      {content}
    </Card>
  );
};

export default ModeList;
