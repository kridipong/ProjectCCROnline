import React from 'react';
import Card from '../GlobalComponents/Card';
import DropDown from '../GlobalComponents/DropDown';


const AddPartName =(props)=> {


console.log(props);
return ( <Card>
<DropDown options={props.modes} label="mode" ></DropDown>


</Card>
)

}
export default AddPartName;