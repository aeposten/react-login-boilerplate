import React, { useEffect, useState } from 'react';

const Login = ({ handleLogin, user }) => {
	const [formData, setFormData] = useState({
		username: '',
		password: '',
	});

	const userInfo = {
		username: formData.username,
		password: formData.password,
	};

	const resetForm = () => {
		setFormData({ username: '', password: '' });
	};

	const handleChange = (e) => {
		setFormData({
			...formData,
			[e.target.name]: e.target.value,
		});
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		fetch('/login', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(userInfo),
		}).then((response) => {
			if (response.ok) {
				response.json().then((user) => handleLogin(user));
				// console.log(userInfo);
				resetForm();
			}
		});
	};

	return (
		<>
			<h1>Login!</h1>
			<form className="login" onSubmit={(e) => handleSubmit(e)}>
				<p>
					<input
						type="text"
						name="username"
						placeholder="Username"
						value={formData.username}
						onChange={handleChange}
					/>
				</p>
				<p>
					<input
						type="password"
						name="password"
						placeholder="Password"
						value={formData.password}
						onChange={handleChange}
					/>
				</p>
				<p>
					<button
						onClick={(e) => {
							handleSubmit(e);
						}}
					>
						Log In
					</button>
				</p>
			</form>
		</>
	);
};

export default Login;
