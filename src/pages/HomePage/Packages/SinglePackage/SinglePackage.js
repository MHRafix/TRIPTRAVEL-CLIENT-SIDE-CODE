import usePost from '../../../../CustomHooks/usePost';
import useAuth from '../../../../CustomHooks/useAuth';
import useGet from '../../../../CustomHooks/useGet';
import { Modal, Spinner } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';
import React, { useState } from 'react';
import Rating from 'react-rating';
import useAnimation from '../../../../CustomHooks/useAnimation';

const SinglePackage = ({data}) => {

      // Take some state
      const [ listName, setListName ] = useState('Demo Trip');
      const [ modalShow, setModalShow ] = useState(false);
      const history = useHistory();
      const { user } = useAuth();
      const { getData } = useGet('savedTrip');

      // Destructuring the package data
      const { name, salePrice, regularPrice, location, typology, description } = data.infoData;
      const { _id, thumbnail } = data;

      // Calculate discount percetage
    const modular = regularPrice / 100;
    const deference = regularPrice - salePrice;
    const perchant = Math.ceil(deference / modular); 
     
      // Handle route changing
      const handleBookPackageBtn = id => {
            history.push(`/singleTrips/allTripPack/${id}`);
      }
      
      
      // Trip data
      const favTrip = {
        uniqueID:_id,
        name,
        email: user.email,
        thumbnail,
        listName: listName,
        location,
        description,
        salePrice,
        typology,
        createdDate: new Date().toLocaleDateString()
    }
    
    // Pass data for posting
    const { handlePost, posting, success } = usePost();

    // Handle save list name
    const handleListName = (e) => {
          const listTitle = e.target.value;
          setListName(listTitle);
    }

    
    const checkExisting = () => {
      if(user.email){
        setModalShow(true);
    }else{
      history.replace('/login');
    }
    }
    
    // Conditionaly fill the saved trip option
    let depend;
    if(user.email){
    if(getData){
      const existed = getData.find(data => data.uniqueID === _id && data.email === user.email);
      if(existed){
        depend = true;
      }else{
        depend = false;
      }
    }
  }

  //Import useAnimation here
  useAnimation();



    return (
        <>
            <div className="col-lg-4 col-md-6 col-sm-12">
                            <div className="packageBox" data-aos="fade-up">
                                <div className="imgAndType">
                                {success || depend ? <span className="savedPack">
                                   <i className="fas fa-heart"></i>
                                  <span className="saveAlert">Saved!</span>
                                  </span> : <span onClick={ checkExisting } className="savePack">
                                  <i className="far fa-heart"></i>
                                  </span>}
                                  <img src={`data:image/gif;base64,${thumbnail}`} alt="parisImage" />
                                  {salePrice !== "0" ? <span className="packageType">-{perchant}%</span> : <></>}
                                </div>
                                
                                <div  onClick={ () => handleBookPackageBtn(_id)}  className="nameAndDestination">
                                  <h3 className="name">{name}</h3>
                                  <div className="destinationWrapper">
                                  <span className="rattings">
                                    <Rating readonly
                                      initialRating="4"
                                    emptySymbol="far fa-star"
                                    fullSymbol="fas fa-star"
                                    />(434)
                                    </span><br />
                                      <span className="price">${salePrice > 0 ? salePrice : regularPrice}</span>
                                  </div>
                                </div>
                            </div>
                           {modalShow && <Modal
                           show={modalShow}
                                size="lg"
                                aria-labelledby="contained-modal-title-vcenter"
                                centered
                              >
                                <Modal.Header onClick={() => setModalShow(false)} closeButton>
                                  <Modal.Title id="contained-modal-title-vcenter">
                                    <span className="modalHead">Create Save List</span>
                                  </Modal.Title>
                                </Modal.Header>
                                <Modal.Body>
                                    {success ? <h3 className="successAlert">Trip is successfully saved! <span className="successIcon far fa-check-circle"></span></h3> : <>{ posting ? <div className="text-center"><Spinner animation="border" variant="danger" /></div> : <> <><input id="listname" onBlur={handleListName} type="text" placeholder="Enter save list name" required /> <br />
                                    <button onClick={() => handlePost(favTrip, "savedTrip")} className="signinBtn">Create</button></></>}</>}
                                </Modal.Body>
                              </Modal>}
                        </div>
        </>
    );
};

export default SinglePackage;