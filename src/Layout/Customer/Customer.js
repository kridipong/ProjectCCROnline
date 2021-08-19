import React, { Fragment } from "react";
import DropDown from "../../Components/DropDown";

const Customer = (props) => {
  const customer = {
    customerCode: "000001",
    customerName: "หน้าร้านเงินสด",
    customerType: "1",
    typeOfBill: "SC",
  };

  const customerType = [
    { id: "1", name: "หน้าร้าน" },
    { id: "2", name: "ลูกค้าช่าง" },
    { id: "3", name: "ลูกค้าส่ง" },
  ];

  const billType = [
    { name: "เงินสด", id: "SC" },
    { name: "เงินเชื่อ", id: "SO" },
  ];

  return (
    <Fragment>
      <DropDown key={billType.id} options={billType} label="ประเภทบิล" />

      <span>
        <h3>{customer.customerCode}</h3>
        <p>{customer.customerName}</p>
      </span>

      <DropDown
        key={customerType.id}
        options={customerType}
        label="customer type"
      />
    </Fragment>
  );
};
export default Customer;
