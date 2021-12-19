import React from 'react';
import { Spinner } from 'react-bootstrap';
import SinglePackage from './SinglePackage/SinglePackage';
import useGet from '../../../CustomHooks/useGet';

const Packages = () => {
      
    // Import use apckages custom hook
    const { getData, getting } = useGet("travelPackages");
    console.log(getData);

    return (
        <section>
        <div className="packagesSection" id="packages">
            <div className="packages">
                <div className="container">
                    <div className="sectionTitle">
                        <h2 className="sectionName">Upcomming <span className="highlightPart">Tour</span></h2>
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

export default Packages;