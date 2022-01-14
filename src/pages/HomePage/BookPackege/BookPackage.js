import  Footer from '../../SharedConponents/Footer/Footer';
import  Header from '../../SharedConponents/Header/Header';
import BookingModal from'../../SecureModals/BookingModal';
import { useHistory, useParams } from 'react-router';
import useAuth from'../../../CustomHooks/useAuth';
import { Spinner } from 'react-bootstrap';
import useGet from '../../../CustomHooks/useGet';
import Carousel from 'react-elastic-carousel';
import React, { useState } from 'react';
import Rating from 'react-rating';

const BookPackage = () => {
    
  // Take a state for displaying initial spinner
  const [ initialLoader, setInitialLoader ] = useState(true);
  const [ modalShow, setModalShow ] = useState(false);

  // Take history for dynamic routing
  const history = useHistory();

  // Import useAuth from custom hooks and useParams from react-router
  const { user } = useAuth();
  const {uniqueId} = useParams();

  const getUrl = window.location.href.slice(41, 52);
  
  // Import get data from custom hook useGet
  const {getData} = useGet(getUrl); 

  // Get the unique package using unique id
  if(getData.length){
      var singlePackage = getData.find(uniquePack => uniquePack._id === uniqueId);
      if(singlePackage){
        // Declare a timeOut function
        var timeOut = () => {
            setInitialLoader(false);
        }
      }else{
        // Go to the hell I mean 404 error page
        // history.push('/error404');
      }

  }

  // Initialize timeOut function here
  setTimeout(timeOut, 1000);
  
  // React elastic carousel breakpoints
  const breakpoints = [
      {width: 1, itemsToShow: 1},
      {width: 550, itemsToShow: 1},
      {width: 768, itemsToShow: 1}
  ];
  
  // Take thumbnails by structuring from the singlepackage object
  const thumbnailArray = [singlePackage?.thumbnail];
  

    return (
        <section>
            <Header />
            <div className="bookingPackageDetail">
                 <div className="container">
                     {initialLoader ? <div className="loaderGif text-center"><Spinner animation="border" variant="danger" /><br /> &nbsp;&nbsp;&nbsp;Data Comming...</div> :<div className="singlePackageDetail">
                        <div className="packageTitle">
                            <h2 className="packTitle">{singlePackage?.infoData?.name} - Certified By TripTravel</h2>
                            <span className="rattings">
                                    <Rating readonly
                                      initialRating="4"
                                    emptySymbol="far fa-star"
                                    fullSymbol="fas fa-star"
                                    />(434)
                            </span><br />
                        </div>
                         <div className="row">
                             <div className="col-lg-5 col-md-5 col-sm-12">
                                 <div className="bookArea">
                                     <div className="bookResult">
                                     <span className="travellerRest"><i class="fas fa-poll"></i> 45 Rest Traveler</span>
                                     <span className="travellerNow"><i class="fas fa-clipboard-check"></i> 55 Traveler Booked</span>
                                     </div>
                                     <div className="travelFee">
                                         <span className="infoFee">Book in advance</span>
                                         <span className="fee"> from ${singlePackage?.infoData?.salePrice !== "0" ? singlePackage?.infoData?.salePrice : singlePackage?.infoData?.regularPrice} per adult</span>
                                     </div>

                                     <div className="bookNowArea">
                                         <button className="bookBtn" onClick={ () => {
                                           if(user.email){
                                           setModalShow(true);
                                         }else{
                                           history.push('/login');
                                         }}}>Book Now</button>

                                         <br /> <br />
                                         <span className="alertRefund">Not sure? You can cancel this reservation up to 24 hours in advance for a full refund.</span>
                                     </div>
                                 </div>
                             </div>
                             <div className="col-lg-7 col-md-6 col-sm-12">
                                <Carousel breakPoints={breakpoints}>
                                     {
                                         thumbnailArray.map(thumb => <img className="thubnailSingle" src={`data:image/gif;base64,${thumb}`} alt="thumbnail" />)
                                     }
                                </Carousel>
                             </div>
                         </div>
                     </div>}

                     {/* Booking modal */}
                      <BookingModal
                      modalShow={modalShow}
                      setModalShow={setModalShow}
                      singlePackage={singlePackage}
                      dependency={getUrl}
                      
                      />

                 </div>
            </div>
            <Footer />
        </section>
    );
};

export default BookPackage;