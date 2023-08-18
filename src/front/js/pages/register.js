import React, { useContext, useState } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";
import { useNavigate } from 'react-router-dom';



export const Register = () => {
    const { store, actions } = useContext(Context);
    const navigate = useNavigate();


    const [user, setUser] = useState(
        {
            email: "",
            password: "",
        }
    );

    const handleChange = ({ target }) => {
        setUser({
            ...user,
            [target.name]: target.value
        });

    };

    const handleRegister = (data) => {
        
        actions.getRegister(data);
        navigate('/');


    }


    return (
        <div className="container mt-5">
            <div className="row justify-content-center">
                <div className="col-12 col-md-6 border border-1 p-5 rounded-3">
                    
                    <form className="Register_form">
                        <div>
                            <label htmlFor="email" className="form-label">Email</label>
                            <input
                                required
                                className="form-control"
                                type="email"
                                id="email"
                                name="email"
                                aria-describedby="emailHelp"
                                onChange={handleChange}
                                placeholder="Ingresa el email" />
                        </div>

                        <div className="my-3">
                            <label htmlFor="password" className="form-label">Password</label>
                            <input
                                required
                                className="form-control"
                                type="password"
                                id="password"
                                name="password"
                                onChange={handleChange}
                                placeholder="Ingresa el password" />
                        </div>
                        <div>
                            <button
                                className="btn btn-primary w-100"
                                type="submit"
                                onClick={() => handleRegister(user)}>
                                <strong>Register</strong>
                            </button>
                            <p className="text-center m-1"> or </p>
                            <Link to="/">
                                <button
                                    className="btn btn-danger w-100"
                                    type="button">
                                    <strong>Cancel</strong>
                                </button>
                            </Link>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};
