import React, { useContext, useState } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";

export const Register = () => {
	const { store, actions } = useContext(Context);

	const [register, setRegister] = useState(
		{
			email: "",
			password: "",
		}
	);

	const handleChange = ({ target }) => {
		setRegister({
			...register,
			[target.name]: target.value
		});

	};

	const handleRegister = (data) => {
		// console.log(data)
		actions.getRegister(data) 							//FUNCION DEL FLUX

	}





	return (
		<div className="container mt-5">
			<div className="row justify-content-center">
				<div className="col-12 col-md-6 border border-1 p-5 rounded-3">
					<form className="Register_form">
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
								className="btn btn-primary w-100"
								type="button"
								onClick={() => handleRegister(Register)}>
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
