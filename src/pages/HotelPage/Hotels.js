import React from 'react';
import { Col, Row, Spinner } from 'react-bootstrap';
import useGet from '../../CustomHooks/useGet';
import ServicesTab from '../HomePage/Services/ServicesTab';
import Footer from '../SharedConponents/Footer/Footer';
import Header from '../SharedConponents/Header/Header';
import HotelCard from './HotelCard';

const Hotels = () => {

  // Import the use get data fro the node server
  const { getData, getting } = useGet("hotels");

    return (
        <div className="homePage">
          <Header />
            <ServicesTab />
            <div className="packagesSection" id="packages">
            <div className="packages">
                <div className="container">
                    <div className="sectionTitle">
                        <h2 className="sectionName">Hotels <span className="highlightPart">to Stay</span></h2>
                    </div>
                       <div className="features">
                           <Row className="featuresArea">
                               <Col>
                                 <div className="feautresBox">
                                     <div className="icon">
                                       <i className="fas fa-user-shield"></i>
                                     </div>
                                     <div className="content">
                                         <span className="title">Payment</span> <br />
                                         <span className="subtitle">100% Safe & Secure</span>
                                     </div>
                                 </div>
                               </Col>
                               <Col>
                                 <div className="feautresBox">
                                     <div className="icon">
                                       <i className="fas fa-user-shield"></i>
                                     </div>
                                     <div className="content">
                                         <span className="title">Payment</span> <br />
                                         <span className="subtitle">100% Safe & Secure</span>
                                     </div>
                                 </div>
                               </Col>
                               <Col>
                                 <div className="feautresBox">
                                     <div className="icon">
                                       <i className="fas fa-user-clock"></i>
                                     </div>
                                     <div className="content">
                                         <span className="title">Open Time</span> <br />
                                         <span className="subtitle">24/7 hours</span>
                                     </div>
                                 </div>
                               </Col>
                               <Col>
                                 <div className="feautresBox">
                                     <div className="icon">
                                       <i className="fas fa-feather"></i>
                                     </div>
                                     <div className="content">
                                         <span className="title">Service Area</span> <br />
                                         <span className="subtitle">World Wide</span>
                                     </div>
                                 </div>
                               </Col>
                           </Row>
                       </div>
                       <div className="row">
                           <div className="col-md-3 col-sm-12">
                             <div className="sideBar">
                               <h1>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam temporibus quaerat id modi exercitationem mollitia blanditiis assumenda obcaecati non voluptatem?</h1>
                             </div>
                           </div>
                           <div className="col-lg-9 col-md-9 col-sm-12">
                          { getting && <div className="loaderGif text-center"><Spinner animation="border" variant="danger" /></div> }
                        <Row xs={1} md={1} className="g-4">
                          {
                            getData.map(data => <HotelCard key={data._id} hotelsData={data} />)
                          }
                        </Row>
                           </div>
                       </div>
                      
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default Hotels;