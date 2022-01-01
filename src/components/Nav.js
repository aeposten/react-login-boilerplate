import { Link, BrowserRouter } from 'react-router-dom';

const Nav = ({ user, logout }) => {
	const handleLogout = () => {
		fetch('/logout', {
			method: 'DELETE',
		}).then(() => logout());
	};
	return (
		<>
			<BrowserRouter>
				{user ? (
					<div>
						<p>
							Hello {user.first_name}!
						</p>
						<button onClick={handleLogout}>Logout</button>
					</div>
				) : (
					<Link to="/login">Login</Link>
				)}
			</BrowserRouter>
		</>
	);
};

export default Nav;
