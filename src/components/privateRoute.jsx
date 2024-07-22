import Cookies from 'js-cookie';
import { useEffect, useState } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import Navbar from './navbar';

export default function PrivateRoute() {
	const navigate = useNavigate();
	const [isAuth, setIsAuth] = useState(false);

	useEffect(() => {
		const userToken = Cookies.get('tokenUser');
		setIsAuth(userToken);
		if (!userToken) {
			navigate('/sign-in', { replace: true });
		}
	}, [navigate]);

	return isAuth ? (
		<div className=''>
			<Navbar />
			<main>
				<Outlet />
			</main>
		</div>
	) : (
		<h1>Authenticated</h1>
	);
}
