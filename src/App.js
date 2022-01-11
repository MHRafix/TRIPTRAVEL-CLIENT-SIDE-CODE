import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './Css/GlobalCss.css';
import AuthProvider from './Context/AuthProvider';
import Login from './pages/Account/Login/Login';
import BookPackage from './pages/HomePage/BookPackege/BookPackage';
import HomePage from './pages/HomePage/HomePage';
import PrivateRoute from './pages/PrivatePage/PrivateRoute';
import AddPackage from './pages/AddPackages/AddPackage';
import Signup from './pages/Account/Signup/Signup';
import Notfound from './pages/404Page/Notfound';
import Trips from './pages/SavedTrips/Trips';
import Cart from './pages/CartPage/Cart';
import Tours from './pages/TourPage/Tours';
import Resturants from './pages/ResturantsPage/Resturants';
import MyTrips from './pages/UserDashboard/MyTrips/MyTrips';
import { Spinner } from 'react-bootstrap';
import Hotels from './pages/HotelPage/Hotels';
import { useState } from 'react';

function App() {

   // Take a state for displaying initial spinner
   const [ initialLoader, setInitialLoader ] = useState(true);
  
   // Declare a timeOut function
   const timeOut = () => {
     setInitialLoader(false);
   }
   // Initialize timeOut function here
   setTimeout(timeOut, 4000);
  
  return (
    <div className="App">
    { initialLoader ? <div className="initialLoader text-center"><Spinner animation="grow" variant="danger" /> <br />
    <h5 className="loadingData">Loading...</h5>
    </div> :
     <AuthProvider>
       <BrowserRouter>
         <Switch>
           <Route exact path="/">
             <HomePage />
           </Route>
           <Route exact path="/home">
             <HomePage />
           </Route>
           <Route exact path="/tours">
             <Tours />
           </Route>
           <Route exact path="/resturants">
             <Resturants />
           </Route>
           <Route exact path="/hotels">
             <Hotels />
           </Route>
           <Route exact path="/saved">
             <Trips />
           </Route>
           <Route exact path="/cartedFoods">
             <Cart />
           </Route>
           <Route exact path="/packages/bookPackage/:uniqueId">
             <BookPackage />
           </Route>
           <PrivateRoute exact path="/myTrips">
             <MyTrips />
           </PrivateRoute>
           <PrivateRoute exact path="/postPackage">
             <AddPackage />
           </PrivateRoute>
           <Route exact path="/login">
             <Login />
           </Route>
           <Route exact path="/signup">
             <Signup />
           </Route>
           <Route path="*">
             <Notfound />
           </Route>
         </Switch>
       </BrowserRouter>
       </AuthProvider>} 
    </div>
  );
}

export default App;
