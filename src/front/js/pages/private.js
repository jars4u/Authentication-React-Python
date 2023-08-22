import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import { Register } from "./register";


export const Private = () => {
    const { store, actions } = useContext(Context);

    return (
        <>
            <div className="container">

                {store.token != null
                    ?
                    <div className="text-center mt-5">
                        <h1><strong>Congratulations!</strong></h1>

                        <h2 className="mt-5"> If you can see this page,</h2>
                        <h2> you are a <strong>Register User.</strong></h2>
                    </div>
                    :
                    <>
                        <div className="text-center mt-5">
                            <h1 className="mt-5"> You have <strong>NO PERMISSION,</strong></h1>
                            <h2> please register or <strong className="text-danger">cancel</strong> and login</h2>
                        </div>
                        <Register />
                    </>
                }

            </div>
        </>
    );
};