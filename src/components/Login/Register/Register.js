import React from 'react';
import { Link, useHistory, useLocation } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';

const Register = () => {
    const { signInUsingGoogle,
        handleRegistration,
        handleEmailChange,
        handlePasswordChange, error, setError } = useAuth();
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
        <div >
            <div className="container">
                <h2>Register: Create Account</h2>
                <form onSubmit={handleRegistration}>
                    <div className="row mb-3">
                        <label htmlFor="inputAddress" className=" col-sm-2 col-form-label">Name</label>
                        <div className="col-sm-4">
                            <input type="text" className="form-control" placeholder="Your Name" />
                        </div>

                    </div>

                    <div className="row mb-3">
                        <label htmlFor="inputEmail3" className="col-sm-2 col-form-label">Email</label>
                        <div className="col-sm-4">
                            <input onBlur={handleEmailChange} type="email" className="form-control" id="inputEmail3" required />
                        </div>
                    </div>
                    <div className="row mb-3">
                        <label htmlFor="inputPassword3" className="col-sm-2 col-form-label">Password</label>
                        <div className="col-sm-4">
                            <input onBlur={handlePasswordChange} type="password" className="form-control" id="inputPassword3" required />
                        </div>
                    </div>
                    <div className="row mb-3 text-danger"> {error}</div>
                    <button type="submit" className="btn btn-warning">Create Account</button>

                </form>
                <p>Already have an account ? <Link to="/login">Login</Link></p>
                <div>-----------------or-----------------------</div>
                <button onClick={handleGoogleLogin} className="btn btn-warning">Google Sign In</button>
            </div>
        </div>
    );
};

export default Register;