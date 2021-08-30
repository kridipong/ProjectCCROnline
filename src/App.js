import PartName from "./PartName/PartName";
import React, { useState, useEffect } from "react";
import Mode from "./Mode/ModeManager";
import Sales from "./Sales/Sales";
import ItemMaster from "./ItemMaster/ItemMaster";
import MainHeader from "./MainHeader/MainHeader";

function App() {
  const [selectedPage, setSelectedPage] = useState("PartName");

  useEffect(() => {
    showPage("PartName");
  }, []);

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
  };

  return (
    <div>
      <MainHeader></MainHeader>
      <div>{showPage("PartName")} </div>
    </div>
  );
}

export default App;
