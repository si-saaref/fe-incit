/* eslint-disable no-undef */
import Cookies from 'js-cookie';

const baseURL = import.meta.env.VITE_BASE_URL;

export const apiAuthSignUp = async (data) => {
	const respJson = await fetch(`${baseURL}/auth/sign-up`, {
		method: 'POST',
		body: JSON.stringify(data),
		headers: {
			'Content-type': 'application/json',
		},
	});

	return respJson.json();
};

export const apiAuthSignIn = async (data) => {
	const respJson = await fetch(`${baseURL}/auth/sign-in`, {
		method: 'POST',
		body: JSON.stringify(data),
		headers: {
			'Content-type': 'application/json',
		},
	});

	return respJson.json();
};

export const apiAuthSignInWithGoogle = async (data) => {
	const respJson = await fetch(`${baseURL}/auth/sign-in-google`, {
		method: 'POST',
		body: JSON.stringify(data),
		headers: {
			'Content-type': 'application/json',
		},
	});

	return respJson.json();
};

export const apiAuthSignOut = async () => {
	const tokenUser = Cookies.get('tokenUser') ?? '';
	const token = Buffer.from(tokenUser, 'base64').toString('');

	const respJson = await fetch(`${baseURL}/auth/sign-out`, {
		method: 'GET',
		headers: {
			'Content-type': 'application/json',
			Authorization: `Bearer ${token}`,
		},
	});

	return respJson.json();
};

export const apiEditUser = async (data) => {
	const tokenUser = Cookies.get('tokenUser') ?? '';
	const token = Buffer.from(tokenUser, 'base64').toString('');

	const respJson = await fetch(`${baseURL}/user/edit-user`, {
		method: 'PUT',
		body: JSON.stringify(data),
		headers: {
			'Content-type': 'application/json',
			Authorization: `Bearer ${token}`,
		},
	});

	return respJson.json();
};

export const apiEditPassword = async (data) => {
	const tokenUser = Cookies.get('tokenUser') ?? '';
	const token = Buffer.from(tokenUser, 'base64').toString('');

	const respJson = await fetch(`${baseURL}/user/edit-password`, {
		method: 'PUT',
		body: JSON.stringify(data),
		headers: {
			'Content-type': 'application/json',
			Authorization: `Bearer ${token}`,
		},
	});

	return respJson.json();
};

export const apiGetDashboardSummaryData = async () => {
	const tokenUser = Cookies.get('tokenUser') ?? '';
	const token = Buffer.from(tokenUser, 'base64').toString('');

	const respJson = await fetch(`${baseURL}/dashboard/summary`, {
		method: 'GET',
		headers: {
			'Content-type': 'application/json',
			Authorization: `Bearer ${token}`,
		},
	});

	return respJson.json();
};

export const apiGetDashboardTableData = async () => {
	const tokenUser = Cookies.get('tokenUser') ?? '';
	const token = Buffer.from(tokenUser, 'base64').toString('');

	const respJson = await fetch(`${baseURL}/dashboard/list-user`, {
		method: 'GET',
		headers: {
			'Content-type': 'application/json',
			Authorization: `Bearer ${token}`,
		},
	});

	return respJson.json();
};

export const apiGetDetailUserData = async () => {
	const tokenUser = Cookies.get('tokenUser') ?? '';
	const token = Buffer.from(tokenUser, 'base64').toString('');

	const respJson = await fetch(`${baseURL}/user/`, {
		method: 'GET',
		headers: {
			'Content-type': 'application/json',
			Authorization: `Bearer ${token}`,
		},
	});

	return respJson.json();
};

export const apiResendEmailVerification = async (email) => {
	const respJson = await fetch(`${baseURL}/auth/resend-email-verification/${email}`, {
		method: 'GET',
		headers: {
			'Content-type': 'application/json',
		},
	});

	return respJson.json();
};
