import React, { useContext } from "react";
import { Context } from "../store/appContext";
import { Link, useNavigate } from "react-router-dom";

export const Navbar = () => {
	const { store, actions } = useContext(Context)
	const navigate = useNavigate()

	const handleLogout = () => {
		actions.logout();
		navigate('/')

	}

	return (
		<nav className="navbar navbar-light bg-light">
			<div className="container-fluid mx-2">
				<Link to="/">
					<span className="navbar-brand mb-0 h1">Authetication React Flask Project</span>
				</Link>
				<div className="ml-auto">
					<button
						className="btn btn-danger"
						onClick={() => handleLogout()}>
						<strong>Logout</strong>
					</button>
				</div>
			</div>
		</nav>
	);
};
