import React from 'react';
import Packages from './Packages/Packages';
import PopularFood from './PopularFood/PopularFood';
import SearchSection from './SearchSection/SearchSection';
import ServicesTab from './Services/ServicesTab';
import Header from '../SharedConponents/Header/Header';
import Footer from '../SharedConponents/Footer/Footer';

const HomePage = () => {

    return (
        <div className="homePage">
            <Header />
            <ServicesTab />
            <SearchSection />
            <Packages />
            <PopularFood /> <br /><br /><br />
            <Footer />
        </div>
    );
};

export default HomePage;