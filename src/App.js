import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './Css/GlobalCss.css';
import AuthProvider from './Context/AuthProvider';
import Login from './pages/Account/Login/Login';
import BookPackage from './pages/HomePage/BookPackege/BookPackage';
import HomePage from './pages/HomePage/HomePage';
import PrivateRoute from './pages/PrivatePage/PrivateRoute';
import Header from './pages/SharedConponents/Header/Header';
import AllBookedPackages from './pages/AllBookedPackages/AllBookedPackages';
import AddPackage from './pages/AddPackages/AddPackage';
import Footer from './pages/SharedConponents/Footer/Footer';
import Signup from './pages/Account/Signup/Signup';
import Notfound from './pages/404Page/Notfound';
import Trips from './pages/SavedTrips/Trips';
import Cart from './pages/CartPage/Cart';
import Tours from './pages/TourPage/Tours';
import Resturants from './pages/ResturantsPage/Resturants';
import MyTrips from './pages/UserDashboard/MyTrips/MyTrips';
import { Spinner } from 'react-bootstrap';
import useGet from './CustomHooks/useGet';

function App() {

  // Import loader gif statements
  const { getting } = useGet("foods");
  
  return (
    <div className="App">
    { getting ? <div className="initialLoader text-center"><Spinner animation="grow" variant="danger" /></div> :
     <AuthProvider>
       <BrowserRouter>
       <Header />
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
           <Route exact path="/saved">
             <Trips />
           </Route>
           <Route exact path="/cartedFoods">
             <Cart />
           </Route>
           <PrivateRoute exact path="/packages/bookPackage/:uniqueId">
             <BookPackage />
           </PrivateRoute>
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
         <Footer />
       </BrowserRouter>
       </AuthProvider>} 
    </div>
  );
}

export default App;
