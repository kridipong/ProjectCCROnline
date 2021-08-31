import React, { useContext } from "react";

import classes from "./Navigation.module.css";

const Navigation = (props) => {
  const showPartName = () => {
    props.onShowPartName();
  };

  const showMode = () => {
    props.onShowMode();
  };

  const showItemMaster = () => {
    props.onShowItemMaster();
  };

  const showSales = () => {
    props.onShowSales();
  };

  const showItemSearch = () => {
    props.onShowItemSearch();
  };

  return (
    <nav className={classes.nav}>
      <ul>
        <li>
          <button onClick={showItemMaster}>ITEMMASTER</button>
        </li>
        <li>
          <button onClick={showItemSearch}>ITEMSEARCH</button>
        </li>

        <li>
          <button onClick={showSales}>Sales</button>
        </li>

        <li>
          <button onClick={showPartName}> PartName</button>
        </li>
        <li>
          <button onClick={showMode}>Mode</button>
        </li>

        <li>
          <button>Logout</button>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
