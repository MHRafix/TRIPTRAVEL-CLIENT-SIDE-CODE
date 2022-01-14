import ServicesTab from '../../HomePage/Services/ServicesTab';
import Footer from '../../SharedConponents/Footer/Footer';
import Header from '../../SharedConponents/Header/Header';
import useDelete from '../../../CustomHooks/useDelete';
import useAuth from'../../../CustomHooks/useAuth';
import useGet from'../../../CustomHooks/useGet';
import { Row, Spinner, Alert } from 'react-bootstrap';
import CartCard from'../../CartPage/CartCard';
import { Link } from 'react-router-dom';
import React from 'react';

const MyTrips = () => {

    // Import useGet && useAuth from custom hooks and make getUrl
    const { user } = useAuth();
    const getUrl = `myBookedTrips/${user.email}`;
    const { getData, getting } = useGet(getUrl);

    // Make url for deleting data from the database
    const deleteUrl = `myBookedTrips/${user.email}`;

    // Import useDelete from custom hooks
    const { handleDelete, deleting, showAlert, setShowAlert } = useDelete(deleteUrl);

    return (
        <div className="homePage">
            <Header />
            <ServicesTab />
            <div className="container">
              <div className="savedToursSection">
                 <div className="sectionWrapper"> <br /><br />
                    <div class="sectionTitle"><h2 class="sectionName">My <span class="highlightPart">Booked Trips</span></h2></div>
                       {getting ? <div className="text-center"><Spinner animation="border" variant="danger" /></div> :<>{getData.length ? <Row>
                           <div className="col-lg-9 col-md-9 col-sm-12">
                           {showAlert && <Alert onClick={() => setShowAlert(false)} variant='success' ><h5>Your booked trip canceled successfully!</h5></Alert>}
                             <div className="cartTableHead">
                                    <span className="tableHead"></span>
                                    <span className="tableHead">Trip Name</span>
                                    <span className="tableHead">Travel Fee</span>
                                    <span className="tableHead">Adult Person</span>
                                    <span className="tableHead">Total</span>
                                    <span className="tableHead">Actions</span>
                             </div>
                        {
                         getData.map(data => <CartCard key={data._id} data={data} handleDelete={handleDelete} deleting={deleting} /> )
                        }
                        </div>
                          <div className="col-lg-3 col-md-3 col-sm-12">
                          <div className="promoCodeHead">
                                    <span className="tableHead">Apply Promo Code</span>
                             </div>
                          </div>
                        </Row> : <div className="text-center">
                   <span className="alertText">No Trip Booked Yet!</span> <br />
                   <Link to="/" className="signinBtn">Back Home</Link>
                </div>}</>}
                </div>
            </div> 
        </div> <br />
            <Footer />
        </div>
    );
};

export default MyTrips;