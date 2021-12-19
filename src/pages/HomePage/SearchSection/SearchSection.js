import React from 'react';
import Banner from '../../../searchBanner.webp';

const SearchSection = () => {
    return (
        <section className="searchSection" style={{backgroundImage: `url(${Banner})`}}>
            <div className="sectionWrapper">
                <div className="bannerSec">
                    <div className="searchField">
                        <span className="searchIcon fas fa-search"></span><input id="searchInput" type="text" placeholder="Search tour packages by place name..." />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default SearchSection;