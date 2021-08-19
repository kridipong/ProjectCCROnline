import React from 'react';
import Card from '../../Components/Card';
import Customer from '../Customer/Customer';
const Header =(props) => {

// const toDay = Date(2018,12,1);

return <Card>
<div>
<label> วันที่ </label>
<input type = "date"></input>

<Customer></Customer>

</div>
</Card>;

}

export default Header;


