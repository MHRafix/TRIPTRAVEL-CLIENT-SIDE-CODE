import React from 'react';
import { Row, Spinner } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../CustomHooks/useAuth';
import useGet from '../../CustomHooks/useGet';
import ServicesTab from '../HomePage/Services/ServicesTab';
import CartCard from './CartCard';

const Cart = () => {
        const { getData, getting } = useGet("foodsCartList");
        const { user } = useAuth();
        // Empty for storing currentUserData 
        let currentUserData;
        // Finding the current users data
        if(getData){
            const thisData = getData.filter(data => data.email === user.email);
                currentUserData = thisData;
        }

    return (
        <div className="homePage">
            <ServicesTab/>
 
          <div className="container">
          <div className="savedToursSection">
                {getting ? <div className="text-center"><Spinner animation="border" variant="danger" /></div> :<div className="sectionWrapper"> <br /><br />
                    <div class="sectionTitle"><h2 class="sectionName">Carted <span class="highlightPart">Foods</span></h2></div>
                       <Row>
                           <div className="col-lg-9 col-md-9 col-sm-12">
                             <div className="cartTableHead">
                                    <span className="tableHead"></span>
                                    <span className="tableHead">Food Name</span>
                                    <span className="tableHead">Unit Price</span>
                                    <span className="tableHead">Quantity</span>
                                    <span className="tableHead">Total</span>
                                    <span className="tableHead">Actions</span>
                             </div>
                            

                                        {
                            currentUserData.map(data => <CartCard key={data._id} data={data} /> )
                         }</div>
                          <div className="col-lg-3 col-md-3 col-sm-12">
                          <div className="promoCodeHead">
                                    <span className="tableHead">Apply Promo Code</span>
                             </div>
                          </div>
                        </Row>{!currentUserData.length && <div className="text-center">
                   <span className="alertText">No Foods Carted Yet!</span> <br />
                   <Link to="/" className="signinBtn">Back Home</Link>
                </div>}
                </div>}
            </div> 
        </div>
    </div>
    );
};

export default Cart;