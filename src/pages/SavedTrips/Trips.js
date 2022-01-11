import React from 'react';
import { Row, Spinner } from 'react-bootstrap';
import ServicesTab from '../HomePage/Services/ServicesTab';
import useGet from '../../CustomHooks/useGet';
import Trip from './Trips/Trip';
import { Link } from 'react-router-dom';
import useAuth from '../../CustomHooks/useAuth';
import Header from '../SharedConponents/Header/Header';
import Footer from '../SharedConponents/Footer/Footer';

const Trips = () => {

    // Import user && useGet data custom hook
    const { user } = useAuth();
    const { getData, getting } = useGet('savedTrip');
    // Empty for storing currentUserData 
    let currentUserData;
    // Finding the current users data
    if(getData){
        const thisData = getData.filter(data => data.email === user.email);
            currentUserData = thisData;
    }
    return (
        <div className="homePage">
            <Header />
            <ServicesTab/>
 
          <div className="container">
          <div className="savedToursSection">
                    <div class="sectionTitle2"><h2 class="sectionName">Saved <span class="highlightPart">Tours</span></h2></div>
                {getting ? <div className="text-center"><Spinner animation="border" variant="danger" /></div> :<div className="sectionWrapper"> <br /><br />
                       <Row xs={1} md={3} className="g-4">
                         {
                            currentUserData.map(data => <Trip key={data._id} data={data} /> )
                         }
                        </Row>{!currentUserData.length && <div className="text-center">
                   <span className="alertText">No Saved Trip Yet!</span> <br />
                   <Link to="/" className="signinBtn">Back Home</Link>
                </div>}
                </div>}
            </div> 
        </div> <br /> <br />
        <Footer />
    </div>
    );
};

export default Trips;