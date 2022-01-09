import React from 'react';
import { useForm } from "react-hook-form";
import { Link, useLocation, useHistory } from 'react-router-dom';
import useAuth from '../../../CustomHooks/useAuth';
import Account from '../../../account.png';

const Login = () => {

    const { user, handleGoogleSignin } = useAuth();

    const location = useLocation();
    const history = useHistory();
    const redirectUrl = location.state?.from || '/home';
    
    const { register, handleSubmit } = useForm();
    const onSubmit = data => console.log(data);
    
    // Handle google signin
    const googleSignin = () => {
        handleGoogleSignin()
        .then(res => {
              history.push(redirectUrl);
        })

    }

    // Prevent the fake users
        if(user.email){
            history.push(redirectUrl);
        }


    return (
        <section>
            <div className="loginPage">
                <div className="container">
                    <div className="loginSection">
                        <div className="row">
                            <div className="col-lg-6 col-md-6 col-sm-12">
                                <div className="loginImg">
                                <img src={ Account } alt="loginImg" />
                              </div>
                            </div>
                            <div className="col-lg-6 col-md-6 col-sm-12">
                              <div className="loginForm">
                                  <h3 className="title">Login to access account</h3>
                              <form onSubmit={handleSubmit(onSubmit)}>
                                    <input id="inputHolder" type="email" {...register("email", { required: true })} placeholder="Enter your email" /> <br />
                                    <input id="inputHolder" type="password" {...register("email", { required: true })} placeholder="Enter your password" /> <br />
                                    <input id="inputHolder" className="regularBtn" type="submit" value="Login" />
                                  </form>
                                  <button onClick={ googleSignin } className="apiOption"><i class="fab fa-google"></i> &nbsp; Google signin</button> <br />
                                  <span className="anotherWay">You have no account ? <Link to="/signup">Create account</Link></span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Login;