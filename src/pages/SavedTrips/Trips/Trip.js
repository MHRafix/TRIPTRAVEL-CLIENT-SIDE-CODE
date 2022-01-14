import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import { Alert, Col, Modal, Spinner } from 'react-bootstrap';
import useAnimation from '../../../CustomHooks/useAnimation';
import useDelete from '../../../CustomHooks/useDelete';
import React, { useState } from 'react';
import Rating from 'react-rating';

const Trip = ({data}) => {

         // Destructuring the data from the object
         const { _id, uniqueID, listName, name, thumbnail, createdDate, salePrice } = data;
         
         // Take history route changer
         const history = useHistory();

         // Take some state for making dynamic
         const [ showModal, setShowModal ] = useState(false);
         const [ selectedData, setSelectedData  ] = useState(false);
    
         // Import useDelete custom hook
         const { handleDelete, deleting, showAlert } = useDelete("savedTrip");

         // Handle route changing
         const handleBookPackageBtn = id => {
          history.push(`/packages/bookPackage/${id}`);
    }

    // Import useAnimation here from custom hooks
    useAnimation();

    return (
        <Col>
        <div className="savedCard" data-aos="fade-up">
            <div className="nameAndImg">
                <img className="miniImg" src={`data:image/gif;base64,${thumbnail}`} alt="miniThumbnail" />  
                <div className="actionBtn">
                    <h3 className="cardName">{listName}</h3>
                <span className="dateTime">Created: {createdDate}</span> <br />
                <span className="btns">
                <button onClick={ () => {
                  setSelectedData(true);
                  setShowModal(true);
                  } } className="actionBtn"><i className="fas fa-eye"></i></button>
                <button onClick={ () => setShowModal(true) } className="actionBtn"><i className="fas fa-times"></i></button></span>
              </div>
            </div>
        </div>
                     {showModal && <Modal
                            show={showModal}
                            onHide={() => {
                              setShowModal(false);
                              setSelectedData(false);
                            }}
                            size="lg"
                            aria-labelledby="contained-modal-title-vcenter"
                        >
                            <Modal.Header closeButton>
                              {selectedData ? <span className="modalHead">Trip single view</span> : <span className="modalHead">Confirmation message</span>}
                            </Modal.Header>
                            <Modal.Body>
                            {selectedData ?  <div className="packageBox">
                                <div className="imgAndType">
                                  <span className="savedPack">
                                   <i className="fas fa-heart"></i>
                                  <span className="saveAlert">Saved!</span>
                                  </span>
                                  <img src={`data:image/gif;base64,${thumbnail}`} alt="parisImage" />
                                  <span className="packageType">-20%</span>
                                </div>
                                
                                <div onClick={ () => handleBookPackageBtn(uniqueID)} className="nameAndDestination">
                                  <h3 className="name">{name}</h3>
                                  <div className="destinationWrapper">
                                  <span className="rattings">
                                    <Rating readonly
                                      initialRating="4"
                                    emptySymbol="far fa-star"
                                    fullSymbol="fas fa-star"
                                    />(434)
                                    </span><br />
                                      <span className="price">${salePrice}</span>
                                  </div>
                                </div>
                            </div> : <>{showAlert ? <Alert variant="success">Trip is successfully deleted! <span className="successIcon far fa-check-circle"></span></Alert> :<>{deleting ? <div className="text-center"><Spinner animation="border" variant="danger" /></div> :<div className="alertCnf"><span className="confirMessage">Are you sure ? If deletion success. You cannot recovery it.</span> <br />
                            <button onClick={() => handleDelete( _id )} className="signinBtn">Confirm Delete</button>
                            </div>}</>}</>}

                            </Modal.Body>
                        </Modal>}
      </Col>
    );
};

export default Trip;