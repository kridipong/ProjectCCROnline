import React ,{useContext} from 'react';
import Card from '../../Components/Card';
import InvoiceContext from '../../Store/invoice-context';



const Summary =props=>{

    const ctx = useContext(InvoiceContext);

    return <Card>
        <label>{`count ${ctx.totalAmount}`}</label>
        
        <label>{`total Amount  ${ctx.totalPrice}`}</label>

        <label>{`total Bonus ${ctx.totalBonus}`}</label>


    </Card>

}
export default Summary;