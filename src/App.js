import PartName from "./PartName/PartName";
import React, { useState } from "react";
import Mode from "./Mode/ModeManager";
import Sales from "./Sales/Sales";
import ItemMaster from "./ItemMaster/ItemMaster";
import MainHeader from "./MainHeader/MainHeader";
import ItemSearch from "./ItemSearch/ItemSearch";
import classes from "./App.module.css";

function App() {
  const [selectedPage, setSelectedPage] = useState("PartName");

  const showPageHandler = (page) => {
    setSelectedPage(page);
  };

  const showPage = (selectedPage) => {
    if (selectedPage === "PartName") {
      return <PartName />;
    }
    if (selectedPage === "Mode") {
      return <Mode />;
    }
    if (selectedPage === "Sales") {
      return <Sales />;
    }
    if (selectedPage === "ItemMaster") {
      return <ItemMaster />;
    }
    if (selectedPage === "ItemSearch") {
      return <ItemSearch />;
    }
  };

  return (
    <div>
      <header>
        <MainHeader onShowPage={showPageHandler}></MainHeader>
        <br />
        <br />
        <br />
        <br />
      </header>
      <main>
        <div className={classes.main}>{showPage(selectedPage)} </div>
      </main>
    </div>
  );
}

export default App;
