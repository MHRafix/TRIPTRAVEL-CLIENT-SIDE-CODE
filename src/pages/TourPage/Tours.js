import React from 'react';
import ServicesTab from '../HomePage/Services/ServicesTab';
import Tour from './Tour';
import Header from '../SharedConponents/Header/Header';
import Footer from '../SharedConponents/Footer/Footer';

const Tours = () => {

    return (
        <div className="homePage">
            <Header />
            <ServicesTab />
            <Tour /><br /><br /> <br />
            <Footer /> 
        </div>
    );
};

export default Tours;