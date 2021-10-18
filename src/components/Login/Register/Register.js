import React from 'react';
import { Link } from 'react-router-dom';

const Register = () => {
    return (
        <div>
            <div className="container">
                <h2>Register: Create Account</h2>
                <form onSubmit="">
                    <div className="row mb-3">
                        <label htmlFor="inputAddress" className=" col-sm-2 col-form-label">Name</label>
                        <div className="col-sm-4">
                            <input type="text" className="form-control" placeholder="Your Name" />
                        </div>

                    </div>

                    <div className="row mb-3">
                        <label htmlFor="inputEmail3" className="col-sm-2 col-form-label">Email</label>
                        <div className="col-sm-4">
                            <input type="email" className="form-control" id="inputEmail3" required />
                        </div>
                    </div>
                    <div className="row mb-3">
                        <label htmlFor="inputPassword3" className="col-sm-2 col-form-label">Password</label>
                        <div className="col-sm-4">
                            <input type="password" className="form-control" id="inputPassword3" required />
                        </div>
                    </div>
                    <button type="submit" className="btn btn-warning">Login</button>

                </form>
                <p>Already have an account ? <Link to="/login">Login</Link></p>
                <div>-----------------or-----------------------</div>
                <button className="button">Google Sign In</button>
            </div>
        </div>
    );
};

export default Register;