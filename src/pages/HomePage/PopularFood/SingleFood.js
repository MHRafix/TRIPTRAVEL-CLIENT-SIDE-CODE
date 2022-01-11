import axios from 'axios';
import React, { useState } from 'react';
import { Col, Modal, Spinner } from 'react-bootstrap';
import Rating from 'react-rating';
import { useHistory } from 'react-router-dom';
import useAuth from '../../../CustomHooks/useAuth';
import useGet from '../../../CustomHooks/useGet';
import usePost from '../../../CustomHooks/usePost';

const SingleFood = ({data}) => {
    // const [ showModal, setShowModal ] = useState(false);
    const { getData } = useGet("foodsCartList");
    const [ modalShow, setModalShow ] = useState(false);
    const [ cmName, setCmName ] = useState('');
    const [ cmPhone, setCmPhone ] = useState('');
    const [ cmAddress, setCmAddress ] = useState('');

    const history = useHistory();
    const { user } = useAuth();

    // Pass data for posting
    const { handlePost, posting, success } = usePost();
 
    // Lets destructuring the food data from the data object
    const { name, salePrice, regularPrice } = data.infoData;
    const { _id, thumbnail } = data;
    
    // Sale badge percantage counting
    const modular = regularPrice / 100;
    const deference = regularPrice - salePrice;
    const perchant = Math.ceil(deference / modular);  

    const [ ordering, setOrdering ] = useState(false);
    const [ orderedc, setOrderedc ] = useState(false);


    const handleOrder = (data, url) => {
        setOrdering(true);
        axios.post(`https://fathomless-thicket-49916.herokuapp.com/${url}`, data)
        .then(res => {
          if(res.data.insertedId){
            setOrdering(false);
            setOrderedc(true);
           }
        })
  
  };

    // Foods data post
    const cartedFood = {
          name,
          uniqueID: _id,
          thumbnail,
          salePrice,
          regularPrice,
          email: user.email
    };

 

    // Conditionaly fill the saved trip option
    let depend;
    if(user.email){
    if(getData){
      const existed = getData.find(data => data.uniqueID === _id && data.email === user.email);
      if(existed){
        depend = true;
      }else{
        depend = false;
      }
    }
  }


  // Handle input value
  const handleCmName = e => {
        setCmName(e.target.value);
  }

  const handleCmPhone = e => {
        setCmPhone(e.target.value);
  }

  const handleCmAddress = e => {
        setCmAddress(e.target.value);
  }

   // Order selected food
    const orderFood = {
          name,
          thumbnail,
          salePrice,
          regularPrice,
          customerName: cmName,
          customerPhone: cmPhone,
          customerAddress: cmAddress,
          email: user.email
    };

    return (
                        <Col>
                            <div className="packageBox">
                                <div className="imgAndType">
                                  <img className="foodImage" src={`data:image/gif;base64,${thumbnail}`} alt="parisImage" />
                                  {salePrice !== "0" ? <span className="saleBadge"> - { perchant }%</span> : <></> }
                                  {success || depend ? <span className="cartBadge2"><i className="fas fa-check-square"></i></span> :<span onClick={() => {
                                      if(user.email){
                                         handlePost(cartedFood, "foodsCartList");
                                      }else{
                                        history.replace('/login');
                                      }
                                  }} className="cartBadge">{posting ? <Spinner animation="border" size="sm" /> : <i className="fas fa-shopping-cart"></i>}</span>}
                                </div>
                                
                                <div className="nameAndPrice">
                                  <h3 className="foodName">{name}</h3>
                                  <div className="destinationWrapper">
                                  <span className="rattings">
                                    <Rating readonly
                                      initialRating="4"
                                    emptySymbol="far fa-star"
                                    fullSymbol="fas fa-star"
                                    />(434)
                                    </span><br />
                                    <div className="prices">
                                      <span className="disablePrice">${regularPrice}</span>
                                      <span className="Price">${salePrice}</span>
                                    </div>
                                  </div>
                                  <button onClick={() => {
                                    if(user.email){
                                      setModalShow(true);
                                    }else{
                                      history.replace('/login');
                                    }
                                    }} className="buyBtn">Order Now</button>
                                </div>
                            </div>

                        {modalShow && <Modal
                          show={modalShow}
                              size="lg"
                              aria-labelledby="contained-modal-title-vcenter"
                              centered
                            >
                              <Modal.Header onClick={() => setModalShow(false)} closeButton>
                                <Modal.Title id="contained-modal-title-vcenter">
                                  <span className="modalHead">Order Foods</span>
                                </Modal.Title>
                              </Modal.Header>
                              <Modal.Body>
                                  {orderedc ? <h3 className="successAlert">Food is successfully ordered! <span className="successIcon far fa-check-circle"></span></h3> : <>{ ordering ? <div className="text-center"><Spinner animation="border" variant="danger" /></div> : <> <><input id="listname" onChange={handleCmName} type="text" placeholder="Enter your name" required /> <br />
                                  <input id="listname" onChange={handleCmPhone} type="number" placeholder="Enter your phone no" required /> <br />
                                  <input id="listname" onChange={handleCmAddress} type="text" placeholder="Enter your address" required /> <br />
                                  <button onClick={() => handleOrder(orderFood, "orderedFoods")} className="signinBtn">Confirm Order</button></></>}</>}
                              </Modal.Body>
                            </Modal>}
                          
                          </Col>
    );
};

export default SingleFood;