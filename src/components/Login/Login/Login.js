import React from 'react';
import { Link, useLocation, useHistory } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';

const Login = () => {
    const { signInUsingGoogle, handleEmailChange,
        handlePasswordChange, handleLogin } = useAuth();
    const location = useLocation();
    const history = useHistory();
    const redirect_uri = location.state?.from || '/serviceDetails';

    const handleGoogleLogin = () => {
        signInUsingGoogle()
            .then(result => {
                history.push(redirect_uri);


            })

    }
    return (
        <div className="mx-5">

            <div className="container col-12 ">
                <h2 className="m-4">Login Form</h2>
                <form onSubmit={handleLogin}  >

                    <div className="row mb-3 ">
                        <label htmlFor="inputEmail3" className="col-sm-2 col-form-label">Email</label>
                        <div className="col-sm-8">
                            <input onBlur={handleEmailChange} type="email" className="form-control" id="inputEmail3" required />
                        </div>
                    </div>
                    <div className="row mb-3">
                        <label htmlFor="inputPassword3" className="col-sm-2 col-form-label">Password</label>
                        <div className="col-sm-8">
                            <input onBlur={handlePasswordChange} type="password" className="form-control" id="inputPassword3" required />
                        </div>
                    </div>
                    <button type="submit" className="btn btn-warning m-2">Login</button>

                </form>
                <p className="m-2">Need to Create Account ? <Link to="/register">Create Account</Link></p>
                <div className="m-3">-----------------or Sign in with Google-----------------------</div>
                <button onClick={handleGoogleLogin} className="btn btn-warning m-2 mb-4" >Google Sign In</button>
            </div>
        </div>
    );
};

export default Login;