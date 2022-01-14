import { Modal, Spinner } from 'react-bootstrap';
import usePost from '../../CustomHooks/usePost';
import useAuth from'../../CustomHooks/useAuth';
import Payment from '../Payment/Payment';
import React, {useState} from 'react';

const BookingModal = ({ modalShow, setModalShow, singlePackage, dependency}) => {
    
    // Take state for showing payment modal && skipModal
    const [ paymentModal, setPaymentModal ] = useState(false);
    const [ skipModal, setSkipModal ] = useState(false);

    // Check-in and Check out state here
    const [checkin, setCheckin] = useState('');
    const [checkout, setCheckout] = useState('');

    // Import useAuth from custom hooks
    const { user } = useAuth();
    
    // Make post url
    let postUrl = dependency.slice(3, 8);

    // Traveller informations states
    const [ fullName, setFullName ] = useState('');
    const [ email, setEmail ] = useState('');
    const [ phoneNumber, setPhoneNumber ] = useState(0);
    const [ address, setAddress ] = useState('');
    const [ profession, setProfession ] = useState('');
    const [ travelerCount, setTravelerCount ] = useState(0);

    // Is paid or not checking state
    const [ paid, setPaid ] = useState(false);
    
    // Send data to posting method for posting to the database
    const { handlePost, posting, success } = usePost();
    
    // Create a data of traveler informations
    const bookingInfo = {
        // Traveler info
        'fullName': fullName,
        'email': user.email,
        'validEmail': email,
        'phoneNumber': phoneNumber,
        'address': address,
        'profession': profession,
        'quantity': travelerCount,
        'paymentStatus': paid,

        // Trip pack info
        'name': singlePackage?.infoData?.name,
        'regularPrice': singlePackage?.infoData?.salePrice,
        'salePrice': singlePackage?.infoData?.regularPrice,
        'thumbnail': singlePackage?.thumbnail,
        'uniqueId': singlePackage?._id,
    };

    if(dependency === "allHotelBed"){
        bookingInfo.chechIn = checkin;
        bookingInfo.checkout = checkout;
    }

    return (
        <>

                     {/* Booking modal */}
                      <Modal
                          show={modalShow}
                              size="lg"
                              aria-labelledby="contained-modal-title-vcenter"
                              centered
                            >
                              <Modal.Header onClick={() => setModalShow(false)} closeButton>
                                <Modal.Title id="contained-modal-title-vcenter">
                                  <span className="modalHead">Book This {dependency === "allHotelBed" ? "Hotel" : "Trip"} Now</span>
                                </Modal.Title>
                              </Modal.Header>
                              <Modal.Body> 
                                  {!success ? <form onSubmit={(e) => {
                                      e.preventDefault();
                                      handlePost(bookingInfo, `book${postUrl}`);
                                      }}>
                                      <input id="listname" type="text" onChange={ e => setFullName(e.target.value)} placeholder="Type your full name..." required /> <br />
                                      <input id="listname" type="email" onChange={ e => setEmail(e.target.value)} placeholder="Type your valid email..." required /> <br />
                                      <input id="listname" type="number" onChange={ e => setPhoneNumber(e.target.value)} placeholder="Type your phone number..." required/> <br />
                                      <input id="listname" type="text" onChange={ e => setAddress(e.target.value)} placeholder="Type your current address..." required /> <br />
                                      <input id="listname" type="text" onChange={ e => setProfession(e.target.value)} placeholder="Type  profession..." required /> <br />
                                      <input id="listname" type="number" onChange={ e => setTravelerCount(e.target.value)} placeholder="How many adult person..." required /> <br />
                                      {dependency === "allHotelBed" && <>
                                      <span className="checkinCheckOut">
                                       <lebel className="name1">Check-in Date</lebel>
                                       <lebel className="name2">Check-out Date</lebel>
                                      </span>
                                      <span className="inputs">
                                      <input id="dateInput1" onChange={(e) => setCheckin(e.target.value)} type="date" required />
                                      <input id="dateInput2" onChange={(e) => setCheckout(e.target.value)} type="date" required /><br />
                                      </span>
                                      </>} <br />
                                      {posting ? <button className="bookBtnDis"><Spinner animation="border" variant="success" /></button> : <button className="bookBtn">Confirm Booking</button>}
                                  </form> : <div className="paymentArea">
                                      <h3 className="successAlert">Trip is successfully booked! <span className="successIcon far fa-check-circle"></span></h3>

                                      <span className="paymentAlert">Please get paid. Otherwise your trip will not approved!</span> <br /> <br />
                                      <div className="payBtn">
                                        <button className="bookBtn" onClick={ () => {
                                            setModalShow(false);
                                            setPaymentModal(true);

                                        }}>Pay Now</button> <br /> <br />
                                        <button className="bookBtnDis" onClick={ () => {
                                            setSkipModal(true);
                                            setModalShow(false);
                                            }}>Skip Now</button>
                                      </div>
                                  </div>}
                              </Modal.Body>
                            </Modal>

                            
                        {/* Payment modal */}
                        <Modal
                          show={paymentModal}
                              size="lg"
                              aria-labelledby="contained-modal-title-vcenter"
                              centered
                            >
                              <Modal.Header onClick={() => setPaymentModal(false)} closeButton>
                                <Modal.Title id="contained-modal-title-vcenter">
                                  <span className="modalHead">Get Paid By Card</span>
                                </Modal.Title>
                              </Modal.Header>
                              <Modal.Body> 
                                  <Payment feeAmount={singlePackage?.infoData?.salePrice !== "0" ?singlePackage?.infoData?.salePrice : singlePackage?.infoData?.regularPrice} travelerAmount={travelerCount} />
                              </Modal.Body>
                       </Modal>

                                             
                      {/* Skip payment modal here */}
                       <Modal
                          show={skipModal}
                              size="lg"
                              aria-labelledby="contained-modal-title-vcenter"
                              centered
                            >
                              <Modal.Header onClick={() => setSkipModal(false)} closeButton>
                                <Modal.Title id="contained-modal-title-vcenter">
                                  <span className="modalHead">Skip Payment</span>
                                </Modal.Title>
                              </Modal.Header>
                              <Modal.Body> 
                                  <h5>If you skip payment, Your booked trip will not approved! </h5>
                                  <button className="signinBtn" onClick={ () => {
                                      setSkipModal(false);
                                    }}>Skip</button>
                                  <button className="signinBtn" onClick={ () => {
                                      setSkipModal(false);
                                      setPaymentModal(true);
                                    }}>Pay Now</button>
                              </Modal.Body>
                         </Modal>
                      </>
    );
};

export default BookingModal;