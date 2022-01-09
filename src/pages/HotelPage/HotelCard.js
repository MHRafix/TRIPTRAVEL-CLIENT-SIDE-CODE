import React from 'react';
import { Col } from 'react-bootstrap';
import Rating from 'react-rating';

const HotelCard = ({hotelsData}) => {
    return (
      <Col>
      <div className="hotelsCard">
         <div className="image">
             <img className="hotelImage" src="https://media-cdn.tripadvisor.com/media/photo-s/1d/82/dc/6c/exterior.jpg" alt="hotelsImage" />
         </div>
         <div className="hotelsInfo">
             <h2 className="hotelName">Hilton Garden Inn Dubai Al Mina</h2>
             <div className="information">
                 <div className="pricesAndAction">
                     <span className="bill">$ 500</span>
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
                     <span className="contactInfo"><i className="fas fa-wifi"></i> Free Wifi</span> <br />
                     <span className="contactInfo"><i className="fas fa-car"></i> Parking</span> <br />
                     <span className="contactInfo"><i className="fas fa-swimmer"></i> Swimming Pool</span> <br />
                     <span className="contactInfo"><i className="fas fa-utensils"></i> Resturant</span> <br />

                 </div>
             </div>
         </div>
      </div>
    </Col>
    );
};

export default HotelCard;