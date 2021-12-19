import React from 'react';

const CartCard = ({data}) => {
    const { name, salePrice, thumbnail} = data;
    console.log(data);
    return (
        <div className="cartFood" style={{borderBottom: '1px solid #eee', paddingBottom: '10px'}}>
            <img className="orderFood" src={`data:image/gif;base64,${thumbnail}`} alt="foodImage" />
            <span className="cartInfo">{name}</span>
            <span className="cartInfo">$ {salePrice}</span>
            <span className="cartInfo">3</span>
            <span className="cartInfo">$ {(salePrice * 3).toFixed(2)}</span>
            <span className="cartInfo" style={{cursor:'pointer', fontSize:'25px', color: '#ff0000'}}>...</span>
        </div>
    );
};

export default CartCard;