import React, { useState } from "react";
import DropDown from "../../Components/DropDown";
import classes from './Customer.module.css';
import Button from '../../../GlobalComponents/Button';

const Customer = (props) => {
  const dummy_customer = {
    customerCode: "000001",
    customerName: "หน้าร้านเงินสด",
    customerType: "1",
    typeOfBill: "SC",
  };

  const  [customer, setCustomer]=useState(dummy_customer);

  const customerType = [
    { id: "1", name: "หน้าร้าน" },
    { id: "2", name: "ลูกค้าช่าง" },
    { id: "3", name: "ลูกค้าส่ง" },
  ];

  const billType = [
    { name: "เงินสด", id: "SC" },
    { name: "เงินเชื่อ", id: "SO" },
  ];

  const changeCustomerTypeHandler=(event)=> {
    event.preventDefault();
    let updatedCustomer = {...customer, customerType:event.target.value};
    setCustomer(updatedCustomer);
    console.log(updatedCustomer);
  }

  return (
    <div className = {classes.customer}>
      <DropDown options={billType} label="ประเภทบิล" />
      <div >
        <label>{customer.customerName}</label>
        <Button>{customer.customerCode}</Button>
      </div>

      <DropDown
        options={customerType}
        label="customer type"
        onChange={changeCustomerTypeHandler}
      />
    </div>
  );
};
export default Customer;
