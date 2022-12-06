import React from 'react';

const SingleOrder = (props) => {
    
    // Take an empty variable for storing the booked packages of logged in user
    let order;

    // Filter out the booked package of logged in user user
    if(props.orderPck){
    const myOrder = props.orderPck;
    for(let ord of myOrder){
        order = ord;
    }
    
    }

    // Handle delete booked package with confirmation window alert 
    const handleDelete = id => {
     const procced = window.confirm("Are you sure ?");

     if(procced){
        const url = `${process.env.BASE_URL}/myOrders/${id}`;
        fetch(url, {
            method: 'DELETE'
        })
        .then(res => res.json())
        .then(data => {
            if(data.deletedCount > 0){
               alert("Package deleted successfully.");
        }
     })
     }
    }


    // Take an empty variable for storing bookedId
    let singleId;
    
    // Filter out the booked id 
    const userId = props.userId;
    for(let id of userId){
        singleId = id;
    }

    return (
        <div className="col-lg-12 col-md-12 col-sm-12">
        <div className="bookedCard">
            <div className="titleAndSl">
                 <span className="serialNo">{props.serial}.</span>
                 <span className="packageName">{order?.packageName}</span>
            </div>
            <div className="imgAndPrice">
                <img src={order?.thumbnail} alt="bookedPackageImg" />
                <span className="price">$ {order?.cost}</span>
            </div>
            <div className="action">
                <span className="type">{order?.status}</span>
                <span onClick={ () => handleDelete(singleId)} className="remove">&times;</span>  &nbsp;&nbsp;&nbsp; <span onClick="" className="updateStatus">update</span>
            </div>
        </div>
    </div>
    );
};

export default SingleOrder;