import React from 'react';
import { Col } from 'react-bootstrap';
import Rating from 'react-rating';

const HotelCard = ({hotelsData}) => {
    // Let's destructuring the data from the object
    const {thumbnail, infoData} = hotelsData;
    // Let's destructuring data from the infoData object
    const { name, salePrice, wifi, swimmingPool, parking, resturant} = infoData;
    return (
      <Col>
      <div className="hotelsCard">
         <div className="image">
             <img className="hotelImage" src={ `data:image/gif;base64,${thumbnail}` } alt="hotelsImage" />
         </div>
         <div className="hotelsInfo">
             <h2 className="hotelName">{ name }</h2>
             <div className="information">
                 <div className="pricesAndAction">
                     <span className="bill">$ {salePrice}</span>
                     <span className="billtext">per night</span>
                     <button className="signinBtn">Book Now</button>
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
    </Col>
    );
};

export default HotelCard;