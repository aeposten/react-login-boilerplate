import React, { useEffect, useState } from 'react';

const Register = ({ handleLogin, user }) => {
	const [formData, setFormData] = useState({
		first_name: '',
		Last_name: '',
		email: '',
		username: '',
		password: '',
		password_confirmation: '',
		// avatar: '',
	});

	const newUser = {
		first_name: formData.first_name,
		last_name: formData.last_name,
		email: formData.email,
		username: formData.username,
		password: formData.password,
		password_confirmation: formData.password_confirmation,
		// avatar: formData.avatar,
	};

	const resetForm = () => {
		setFormData({
			first_name: '',
			last_name: '',
			email: '',
			username: '',
			password: '',
			password_confirmation: '',
			// avatar: '',
		});
	};

	const handleChange = (e) => {
		setFormData({
			...formData,
			[e.target.name]: e.target.value,
		});
	};

	// const handleAvatarChange = (e) => { 
    //     setFormData({avatar: e.target.files[0] });
    //   };

	const handleSubmit = (e) => {
		e.preventDefault();
		fetch('/register', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(newUser),
		}).then((response) => {
			if (response.ok) {
				response.json().then((user) => handleLogin(user));
				console.log(newUser);
				resetForm();
			}
		});
	};

	return (
		<>
			<h1>Register</h1>
			<form className="registration" onSubmit={(e) => handleSubmit(e)}>
				<p>
					<input
						type="text"
						name="first_name"
						placeholder="First Name"
						value={formData.first_name}
						onChange={handleChange}
					/>
					<input
						type="text"
						name="last_name"
						placeholder="Last Name"
						value={formData.last_name}
						onChange={handleChange}
					/>
				</p>
				<p>
					<input
						type="email"
						name="email"
						placeholder="Email Address"
						value={formData.email}
						onChange={handleChange}
					/>
				</p>
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
					<input
						type="password"
						name="password_confirmation"
						placeholder="Confirm Password"
						value={formData.password_confirmation}
						onChange={handleChange}
					/>
				</p>
				{/* <input
						type="file"
                        accept="image/*"
						name="avatar"
						placeholder="Upload Avatar"
						// value={formData.image}
						onChange={handleAvatarChange}
					/> */}
				<p>
					<button
						onClick={(e) => {
							handleSubmit(e);
						}}
					>
						Submit
					</button>
				</p>
			</form>
		</>
	);
};

export default Register;
