import React from 'react';
import Packages from './Packages/Packages';
import PopularFood from './PopularFood/PopularFood';
import SearchSection from './SearchSection/SearchSection';
import ServicesTab from './Services/ServicesTab';

const HomePage = () => {

    return (
        <div className="homePage">
            <ServicesTab />
            <SearchSection />
            <Packages />
            <PopularFood />
        </div>
    );
};

export default HomePage;