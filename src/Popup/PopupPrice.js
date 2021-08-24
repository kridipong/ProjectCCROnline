import React,{useState,useContext} from "react";
import Modal from "../Components/Modal";
import InvoiceContext from '../Store/invoice-context';

const PopupPrice = (props) => {

    const ctx = useContext(InvoiceContext);
    const [price,setPrice] = useState(props.item.price);
    const inputChangeHandler =(event) => {
        event.preventDefault();
        setPrice(event.target.value);
    }
    let updatedItem = {...props.item,price:price}
    const updatePriceHandler =(event) => {
        ctx.onUpdatePrice(updatedItem);
        props.onClose();
    }

  return (
    <Modal onClose = {props.onClose}>
      <div>
        <label> ราคา </label>
        <input value={price} type="number" onChange = {inputChangeHandler} />
        <button onClick = {props.onClose}>Close</button>
        <button onClick = {updatePriceHandler}>Update</button>
      </div>
    </Modal>
  );
};
export default PopupPrice;
