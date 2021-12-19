import React from 'react';
import ServicesTab from '../HomePage/Services/ServicesTab';
import ResturantFood from './ResturantFood';

const Resturants = () => {
    return (
        <div className="homePage">
            <ServicesTab />
            <ResturantFood />
        </div>
    );
};

export default Resturants;