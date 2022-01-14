import useAnimation from '../../CustomHooks/useAnimation';
import BookingModal from'../SecureModals/BookingModal';
import useAuth from'../../CustomHooks/useAuth';
import { useHistory } from 'react-router';
import React, { useState } from 'react';
import { Col } from 'react-bootstrap';
import Rating from 'react-rating';

const HotelCard = ({hotelsData}) => {
    // Take state for showing modal
    const [ modalShow, setModalShow ] = useState(false);
    
    // Take history for dynamic routing
    const history = useHistory();

    // Import useAuth from custom hooks and useParams from react-router
    const { user } = useAuth();

    // Let's destructuring the data from the object
    const {_id, thumbnail, infoData} = hotelsData;

    // Let's destructuring data from the infoData object
    const { name, salePrice, wifi, swimmingPool, parking, resturant} = infoData;

    // Handle route changing
    const handleBookPackageBtn = id => {
    history.push(`/singleHotel/allHotelBed/${id}`);
    }

    // Import useAnimation here from custom hooks
    useAnimation();

    return (
      <Col>
      <div className="hotelsCard" data-aos="fade-up">
         <div className="image">
             <img className="hotelImage" src={ `data:image/gif;base64,${thumbnail}` } alt="hotelsImage" />
         </div>
         <div className="hotelsInfo">
             <h2 className="hotelName" onClick={() => handleBookPackageBtn(_id)}>{ name }</h2>
             <div className="information">
                 <div className="pricesAndAction">
                     <span className="bill">$ {salePrice}</span>
                     <span className="billtext">per night</span>
                     <button className="signinBtn" onClick={ () => {
                            if(user.email){
                            setModalShow(true);
                            }else{
                            history.push('/login');
                            }}}>Book Now</button>
                  </div>
                 <div className="anothersInfo">
                 <span className="rattings">
                      <Rating readonly
                      initialRating="4"
                      emptySymbol="far fa-star"
                      fullSymbol="fas fa-star"
                      />(434)
              </span><br />
                     <span className="contactInfo"><i className="fas fa-wifi"></i> {wifi}</span> <br />
                     <span className="contactInfo"><i className="fas fa-car"></i> {parking}</span> <br />
                     <span className="contactInfo"><i className="fas fa-swimmer"></i> {swimmingPool}</span> <br />
                     <span className="contactInfo"><i className="fas fa-utensils"></i>&nbsp; {resturant}</span> <br />

                 </div>
             </div>
         </div>
      </div>
        {/* Booking modal */}
        <BookingModal 
            modalShow={modalShow}
            setModalShow={setModalShow}
            singlePackage={hotelsData}
            dependency={"allHotelBed"}
    
       />
    </Col>
    );
};

export default HotelCard;