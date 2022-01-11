import React from 'react';
import ServicesTab from '../../HomePage/Services/ServicesTab';
import Footer from '../../SharedConponents/Footer/Footer';
import Header from '../../SharedConponents/Header/Header';

const MyTrips = () => {
    return (
        <div className="homePage">
            <Header />
            <ServicesTab />
            <Footer />
        </div>
    );
};

export default MyTrips;