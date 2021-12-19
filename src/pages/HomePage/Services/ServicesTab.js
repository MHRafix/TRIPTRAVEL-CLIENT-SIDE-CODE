import React from 'react';
import { useHistory } from 'react-router-dom';

const ServicesTab = () => {
    const history = useHistory();
    return (
        <section className="servicesTab">
            <div className="container">
                <div className="sTab">
                    <div onClick={ () => history.replace('/tours')} className="tabBox">
                        <h3 className="serviceName">Tour Plan</h3> <span className="serviceIcon fas fa-suitcase-rolling"></span>
                    </div>
                    <div onClick={ () => history.replace('/hotels')} className="tabBox">
                        <h3 className="serviceName">Hotels</h3> <span className="serviceIcon fas fa-procedures"></span>
                    </div>
                    <div onClick={ () => history.replace('/rentals')} className="tabBox">
                        <h3 className="serviceName">Rentals</h3> <span className="serviceIcon fas fa-car"></span>
                    </div>
                    <div onClick={ () => history.replace('/resturants')} className="tabBox">
                        <h3 className="serviceName">Resturants</h3> <span className="serviceIcon fas fa-utensils"></span>
                    </div>
                    <div onClick={ () => history.replace('/contact')} className="tabBox">
                        <h3 className="serviceName">Let's Meet</h3> <span className="serviceIcon far fa-handshake"></span>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ServicesTab;