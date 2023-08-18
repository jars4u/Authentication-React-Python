import React, { useContext } from "react";
import { Context } from "../store/appContext.js";
import { Login } from "../pages/login.js";
import "../../styles/home.css";


export const Home = () => {


	return (
		<>
			<div className="container-fluid">

				<div>
					<Login />
				</div>

			</div>
		</>

	);
};
