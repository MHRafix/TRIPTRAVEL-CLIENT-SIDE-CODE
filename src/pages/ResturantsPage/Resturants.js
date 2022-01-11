import React from 'react';
import ServicesTab from '../HomePage/Services/ServicesTab';
import ResturantFood from './ResturantFood';
import Header from '../SharedConponents/Header/Header';
import Footer from '../SharedConponents/Footer/Footer';

const Resturants = () => {
    return (
        <div className="homePage">
            <Header />
            <ServicesTab />
            <ResturantFood />
            <br /> <br /> <br /> <br />
            <Footer />
        </div>
    );
};

export default Resturants;