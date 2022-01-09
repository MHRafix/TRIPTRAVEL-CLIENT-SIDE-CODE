import React from 'react';
import { useForm } from "react-hook-form";
import { Link, useLocation, useHistory } from 'react-router-dom';
import useAuth from '../../../CustomHooks/useAuth';
import Account from '../../../account.png';

const Signup = () => {
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
                            <img src={Account} alt="loginImg" />
                          </div>
                        </div>
                        <div className="col-lg-6 col-md-6 col-sm-12">
                          <div className="loginForm">
                              <h3 className="title">Create new account</h3>
                          <form onSubmit={handleSubmit(onSubmit)}>
                                <input id="inputHolder" type="email" {...register("email", { required: true })} placeholder="Enter your email" /> <br />
                                <input id="inputHolder" type="password" {...register("password", { required: true })} placeholder="Enter your password" /> <br />
                                <input id="inputHolder" type="password" {...register("cnfPassword", { required: true })} placeholder="Re-enter your password" /> <br />
                                <input id="inputHolder" className="regularBtn" type="submit" value="Signup" />
                              </form>
                              <button onClick={ googleSignin } className="apiOption"><i class="fab fa-google"></i> &nbsp; Google signin</button> <br />

                              <span className="anotherWay">Already have an account ? <Link to="/login">Login</Link></span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    );
};

export default Signup;