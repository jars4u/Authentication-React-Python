import React, { useContext, useState } from "react";
import { Context } from "../store/appContext";
import rigoImageUrl from "../../img/rigo-baby.jpg";
import "../../styles/home.css";
import { Link } from "react-router-dom";

export const Login = () => {
	const { store, actions } = useContext(Context);

	const [login, setLogin] = useState(
		{
			email: "",
			password: "",
		}
	);

	const handleChange = ({ target }) => {
		setLogin({
			...login,
			[target.name]: target.value
		});

	};

	const handleLogin = (data) => {
		// console.log(data)
		actions.getLogin(data) 							//FUNCION DEL FLUX

	}





	return (
		<div className="container mt-5">
			<div className="row justify-content-center">
				<div className="col-12 col-md-6 border border-1 p-5 rounded-3">
					<form className="login_form">
						<div>
							<label htmlFor="exampleInputEmail1" className="form-label">Email</label>
							<input
								className="form-control"
								type="email"
								id="exampleInputEmail1"
								aria-describedby="emailHelp"
								name="email"
								onChange={handleChange}
								placeholder="Ingresa el email" />
						</div>
						<div className="my-3">
							<label htmlFor="exampleInputPassword1" className="form-label">Password</label>
							<input
								className="form-control"
								type="password"
								id="exampleInputPassword1"
								name="password"
								onChange={handleChange}
								placeholder="Ingresa el password" />
						</div>
						<div>
							<button
								className="btn btn-success w-100"
								type="button"
								onClick={() => handleLogin(login)}>
								<strong>Login</strong>
							</button>
							<p className="text-center m-1"> or </p>
							<Link to="/register">
								<button
									className="btn btn-primary w-100"
									type="button">
									<strong>Register</strong>
								</button>
							</Link>
						</div>
					</form>
				</div>
			</div>
		</div>
	);
};
