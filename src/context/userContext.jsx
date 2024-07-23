/* eslint-disable no-undef */
import { jwtDecode } from 'jwt-decode';
import { createContext, useEffect, useState } from 'react';
import Cookies from 'js-cookie';
import { apiAuthSignInOauth } from '../services';

export const UserContext = createContext();

export default function UserContextProvider({ children }) {
	const [user, setUser] = useState(null);

	useEffect(() => {
		// const tokenUser = Cookies.get('tokenUser') ?? '';
		const userData = Cookies.get('userData') ?? '';
		if (userData) {
			// const token = Buffer.from(tokenUser, 'base64').toString('');
			// const userData = jwtDecode(token);
			setUser(JSON.parse(userData));
		}
	}, []);

	const loginUser = async (type, data) => {
		if (type === 'manually') {
			const decodedJwt = jwtDecode(data?.token);
			const encryptToken = data?.token ? Buffer.from(data?.token).toString('base64') : '';
			Cookies.set('tokenUser', encryptToken);
			Cookies.set('userData', JSON.stringify(decodedJwt.user));
			setUser(decodedJwt.user);
		}

		if (type === 'google') {
			const decodedJwt = jwtDecode(data?.credential);
			const { data: dataResp } = await apiAuthSignInOauth({
				email: decodedJwt?.email,
				name: decodedJwt?.name,
			});
			const dataDecoded = jwtDecode(dataResp?.token);

			const encryptToken = dataResp?.token ? Buffer.from(dataResp?.token).toString('base64') : '';
			Cookies.set('tokenUser', encryptToken);
			// const userData = {
			// 	email: decodedJwt?.email,
			// 	name: decodedJwt?.name,
			// 	picture: decodedJwt?.picture,
			// };
			Cookies.set('userData', JSON.stringify(dataDecoded?.user));
			setUser(dataDecoded?.user);
		}

		if (type === 'facebook') {
			const resp = await fetch(
				`https://graph.facebook.com/me?fields=email,name,picture,id&access_token=${data.accessToken}`
				// `https://graph.facebook.com/${data.userID}?fields=email,birthday,location,locale,age_range,currency,name,gender&access_token=${data.accessToken}`
			);
			const response = await resp.json();

			const { data: dataResp } = await apiAuthSignInOauth({
				name: response?.name,
				email: response?.email ?? `${response?.name.toLowerCase().replace(' ', '_')}@gmail.com`,
			});
			const decodedJwt = jwtDecode(dataResp?.token);

			const encryptToken = dataResp?.token ? Buffer.from(dataResp?.token).toString('base64') : '';
			Cookies.set('tokenUser', encryptToken);
			// const userData = {
			// 	email: response?.email,
			// 	name: response?.name,
			// 	picture: response?.picture?.data?.url,
			// };
			Cookies.set('userData', JSON.stringify(decodedJwt?.user));
			setUser(decodedJwt?.user);
		}
	};

	const editUser = (data) => {
		Cookies.remove('userData');
		setUser({
			...user,
			name: data?.name,
		});
		const userData = {
			...user,
			name: data?.name,
		};
		Cookies.set('userData', JSON.stringify(userData));
	};

	const logoutUser = () => {
		Cookies.remove('tokenUser');
		Cookies.remove('userData');
		setUser(null);
	};

	return (
		<UserContext.Provider value={{ user, setUser, loginUser, logoutUser, editUser }}>
			{children}
		</UserContext.Provider>
	);
}
