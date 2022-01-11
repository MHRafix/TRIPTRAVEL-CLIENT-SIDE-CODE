// import axios from 'axios';
import React from 'react';
// import { useForm } from "react-hook-form";
import { useHistory, useParams } from 'react-router';
// import useAuth from '../../../CustomHooks/useAuth';
import  Header from '../../SharedConponents/Header/Header';
import  Footer from '../../SharedConponents/Footer/Footer';
import useGet from '../../../CustomHooks/useGet';
import { Spinner } from 'react-bootstrap';
import Rating from 'react-rating';
import Carousel from 'react-elastic-carousel';

const BookPackage = () => {
    
    const history = useHistory();
    // const { user } = useAuth();
    const {uniqueId} = useParams();
    // const { register, handleSubmit, reset } = useForm();
 
    // Import get data from custom hook useGet
    const {getData, getting } = useGet("allTripPack"); 

    // Get the unique package using unique id
    if(getData.length){
       var singlePackage = getData.find(uniquePack => uniquePack._id === uniqueId);
       if(singlePackage){
        //   setGetData(singlePackage);
       }else{
            history.push('/');
       }

    }

    console.log(getData);
    
    // Booking package data insert to the database
    // const onSubmit = data => {
    //       axios.post('https://frightening-cemetery-53831.herokuapp.com/BookedPackages', data)
    //       .then(res => {
    //         if(res.data.insertedId){
    //             alert('Package successfully booked!');
    //             reset();
    //          }
    //       })

    // };

    // React elastic carousel breakpoints
    const breakpoints = [
        {width: 1, itemsToShow: 1},
        {width: 550, itemsToShow: 1},
        {width: 768, itemsToShow: 1}
    ];
   
    const thumbnailArray = [singlePackage?.thumbnail];

    return (
        <section>
            <Header />
            <div className="bookingPackageDetail">
                 <div className="container">
                     {getting ? <div className="loaderGif text-center"><Spinner animation="border" variant="danger" /><br /> &nbsp;&nbsp;&nbsp;Data Comming...</div> :<div className="singlePackageDetail">
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
                                         <span className="fee"> from ${singlePackage?.infoData?.salePrice} per adult</span>
                                     </div>

                                     <div className="bookNowArea">
                                         <button className="bookBtn">Book Now</button>

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
                 </div>
            </div>
            <Footer />
        </section>
    );
};

export default BookPackage;