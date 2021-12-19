import React from 'react';
import { Spinner } from 'react-bootstrap';
import useGet from '../../CustomHooks/useGet';
import SinglePackage from '../HomePage/Packages/SinglePackage/SinglePackage';

const Tour = () => {
        // Import use apckages custom hook
        const { getData, getting } = useGet("allTravelPackage");
    return (
        <section>
        <div className="packagesSection" id="packages">
            <div className="packages">
                <div className="container">
                    <div className="sectionTitle">
                        <h2 className="sectionName">All <span className="highlightPart">Tour Plan</span></h2>
                    </div>
                    
                    
                    { getting && <div className="loaderGif text-center"><Spinner animation="border" variant="danger" /></div>}
                    <div className="row">
                        {
                          getData.map(travelPackage => <SinglePackage key={travelPackage._id} data={travelPackage} /> )
                        }
                        
                    </div>
                </div>
            </div>
        </div>
    </section>
    );
};

export default Tour;