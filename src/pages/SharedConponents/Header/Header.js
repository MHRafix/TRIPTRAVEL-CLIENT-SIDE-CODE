import React from 'react';
import { useState } from 'react';
import { Container, Modal, Nav, Navbar } from 'react-bootstrap';
import { useHistory } from 'react-router';
import { Link } from 'react-router-dom';
import useAuth from '../../../CustomHooks/useAuth';
import useGet from '../../../CustomHooks/useGet';
import Logo from '../../../logo.png';

const Header = () => {
      
      const [ toggle, setToggle ] = useState(false);
      const [ showCnf, setShowCnf ] = useState(false);
      const { user, handleSignOut} = useAuth(); 
      const history = useHistory();
      const {getData} = useGet("savedTrip");

      // Filter out the current user saved trips
      let savedData;
      if(user.email){
        const existed = getData.filter(data => data.email === user.email);
        if(existed){
            savedData = existed;
        }
     
    }

    return (
        <header >
            <div className="headerSection">
                <div className="headerNavbar">
                <Navbar fixed="top" expand="lg">
                    <Container>
                        <Navbar.Brand onClick={ () => history.replace('/') } style={{cursor:"pointer"}}> <img src={Logo} alt="Logo" width="50" height="50" /> <span className="companyName">TripTravel</span> </Navbar.Brand>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Link id="navBar" to="/home"><span className="menuIcon fas fa-home"></span> Home</Link>
                            <Link id="navBar" to="/siteReview"><span className="menuIcon far fa-comment"></span> Review</Link>
                            <Link id="navBar" to="/saved"><span className="menuIcon far fa-heart"></span> Saved({savedData ? savedData.length : "0"})</Link>
                            {user.email ? <img onClick={() => setToggle(true)} className="profileImage" src={user.photoURL} alt="profilePic" /> : <Link className="signinBtn" to="/login">Sign in</Link>}

                            {toggle && <div className="userProfileInfo">
                            <span onClick={ () => setToggle(false)} className="closeBtn">&times;</span> 
                                <img className="profileImageLg" src={user.photoURL} alt="profileImage" />
                                <h3 className="userName">{user.displayName}</h3>
                                <button className="signinBtn">View Profile</button>
                                <hr />

                                <div className="navigation">
                                    <Link className="userNavigation" to="/myTrips"><i class="fas fa-suitcase-rolling"></i> &nbsp; My Trip</Link>
                                    <Link className="userNavigation" to="/cartedFoods"><span className="menuIcon fas fa-shopping-cart"></span> Cart Foods</Link>
                                    <Link className="userNavigation" to="/myFoods"><i class="fas fa-hamburger"></i> &nbsp; My Foods</Link>
                                    <Link className="userNavigation" to="/editProfile"><i class="fas fa-edit"></i> &nbsp; Edit Profile</Link>
                                    <button onClick={() => setShowCnf(true)} className="userNavigation"><i class="fas fa-sign-out-alt"></i> &nbsp; Log Out</button>
                                </div>
                            </div>}
                        </Nav>
                        </Navbar.Collapse>
                      </Container>
                    </Navbar>
                </div>
            </div>
            {showCnf &&  <Modal show={showCnf}>
        <Modal.Body id="modal-body">
            <span className="iconShow"><i class="fas fa-check-circle"></i></span> <br />
            <h3 className="alertText">Do you want to signout ?</h3>
            <button onClick={() => setShowCnf(false)} className="signinBtn">Cancel</button> &nbsp;&nbsp;
            <button onClick={() => {
                setShowCnf(false);
                setToggle(false);
                handleSignOut();
                }} className="signinBtn">Yes</button>
        </Modal.Body>
      </Modal>}
        </header>
    );
};

export default Header;