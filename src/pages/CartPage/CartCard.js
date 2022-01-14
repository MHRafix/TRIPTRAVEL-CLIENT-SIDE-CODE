import useAnimation from '../../CustomHooks/useAnimation';
import React, { useState } from 'react';
import { Spinner } from 'react-bootstrap';
const CartCard = ({data, handleDelete, deleting}) => {
    
    // Desturcuturing the data from the object
    const { _id, name, salePrice, regularPrice, thumbnail, quantity} = data;

    // Toggle state here
    const [toggle, setToggle] = useState(false);

    // Import useAnimation here from custohmooks
    useAnimation();

    return (
        <div className="cartFood" data-aos="fade-up" style={{borderBottom: '1px solid #eee', paddingBottom: '10px'}}>
            <img className="orderFood" src={`data:image/gif;base64,${thumbnail}`} alt="foodImage" />
            <span className="cartInfo">{name.slice(0, 20)}...</span>
            <span className="cartInfo">$ {salePrice === "0" ? regularPrice : salePrice}</span>
            <span className="cartInfo">{quantity}p</span>
            <span className="cartInfo">$ {(salePrice === "0" ? regularPrice * quantity : salePrice * quantity).toFixed(2)}</span>
            <span className="cartInfo" style={{cursor:'pointer', fontSize:'25px', color: '#ff0000'}} onClick={() => {
                if(toggle){
                    setToggle(false);
                }else{
                    setToggle(true);
                }
                }}>{toggle ? <i class="far fa-times-circle"></i> : <i class="fas fa-ellipsis-v"></i>}</span>
            {toggle && <div className="actionsArea">
               {deleting ? <button className="actionItem"><Spinner style={{width:"25px", height:"25px"}} animation="border" variant="dark" /></button> : <button onClick={() => handleDelete(_id)} className="actionItem">Cancel &nbsp;<i class="fas fa-trash"></i></button>} <br />
                <button className="actionItem2">Pay Now &nbsp;<i class="fas fa-dollar-sign"></i></button> <br />
            </div>} <br /> <br />
        </div>
    );
};

export default CartCard;