import React, { useState, useEffect } from "react";
import Card from "../../../GlobalComponents/Card";
import Customer from "../Customer/Customer";
import Input from "../../../GlobalComponents/Input";
import classes from "./Header.module.css";

const Header = (props) => {
  const [issueDate, setIssueDate] = useState(Date());

  const changeDateHandler = (event) => {
    event.preventDefault();
    setIssueDate(event.target.value);
  };

useEffect(() => {
    setDate();
}, []);


  const setDate = () => {
    const curr = new Date();
    curr.setDate(curr.getDate + 3);
    setIssueDate(curr.toISOString().substr(0, 10));
  };

  return (
    <Card>
      <div className={classes.header}>
        {/* <label> วันที่ </label>
<input type = "date" onChange = {changeDateHandler} value={issueDate} ></input> */}

        <Input
          label="วันที่"
          input={{ type: "date" }}
          onChange={changeDateHandler}
          value={issueDate}
          style={{ left: "1rem" }}
        ></Input>

        <Customer></Customer>
      </div>
    </Card>
  );
};

export default Header;
