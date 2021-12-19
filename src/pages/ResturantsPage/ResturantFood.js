import React from 'react';
import { Row, Spinner } from 'react-bootstrap';
import useGet from '../../CustomHooks/useGet';
import SingleFood from '../HomePage/PopularFood/SingleFood';

const ResturantFood = () => {
    // Import use apckages custom hook
    const { getData, getting } = useGet("allFoods");
    return (
        <section>
        <div className="packagesSection" id="packages">
            <div className="packages">
                <div className="container">
                    <div className="sectionTitle">
                        <h2 className="sectionName">All <span className="highlightPart">Foods</span></h2>
                    </div>
                    
                    
                    { getting && <div className="loaderGif text-center"><Spinner animation="border" variant="danger" /></div>}
                    <Row xs={1} md={4} className="g-4">
                        {
                          getData.map(food => <SingleFood key={food._id} data={food} /> )
                        }
                    </Row>
                </div>
            </div>
        </div>
    </section>
    );
};

export default ResturantFood;