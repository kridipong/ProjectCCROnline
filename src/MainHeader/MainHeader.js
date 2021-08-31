import React from "react";
import Navigation from "./Navigation";
import classes from "./MainHeader.module.css";

const MainHeader = (props) => {
  const showPartNameHandler = () => {
    props.onShowPage("PartName");
  };

  const showModeHandler = () => {
    props.onShowPage("Mode");
  };

  const showItemMasterHandler = () => {
    props.onShowPage("ItemMaster");
  };

  const showItemSearchHandler = () => {
    props.onShowPage("ItemSearch");
  };

  const showSalesHandler = () => {
    props.onShowPage("Sales");
  };

  return (
    <header className={classes["main-header"]}>
      <h1>CCR Online</h1>
      <Navigation
        onShowPartName={showPartNameHandler}
        onShowMode={showModeHandler}
        onShowItemMaster={showItemMasterHandler}
        onShowItemSearch={showItemSearchHandler}
        onShowSales={showSalesHandler}
      ></Navigation>
    </header>
  );
};

export default MainHeader;
