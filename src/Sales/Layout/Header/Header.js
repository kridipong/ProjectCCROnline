import React,{useState} from 'react';
import Card from '../../../GlobalComponents/Card';
import Customer from '../Customer/Customer';
const Header =(props) => {

const [issueDate,setIssueDate]=useState(Date());

const changeDateHandler =(event)=>{
    event.preventDefault();
    setIssueDate(event.target.value);
};


return <Card>
<div>
<label> วันที่ </label>
<input type = "date" onChange = {changeDateHandler} value={issueDate} ></input>

<Customer></Customer>

</div>
</Card>;

}

export default Header;


