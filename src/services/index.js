const baseURL = import.meta.env.VITE_BASE_URL;

export const authSignUp = async (data) => {
	const respJson = await fetch(`${baseURL}/auth/sign-up`, {
		method: 'POST',
		body: JSON.stringify(data),
		headers: {
			'Content-type': 'application/json',
		},
	});

	return respJson.json();
};

export const authSignIn = async (data) => {
	const respJson = await fetch(`${baseURL}/auth/sign-in`, {
		method: 'POST',
		body: JSON.stringify(data),
		headers: {
			'Content-type': 'application/json',
		},
	});

	return respJson.json();
};

export const authSignOut = async () => {
	const data = {
		email: 'testing@gmail.com',
	};
	const respJson = await fetch(`${baseURL}/auth/sign-out`, {
		method: 'POST',
		body: JSON.stringify(data),
		headers: {
			'Content-type': 'application/json',
		},
	});

	return respJson.json();
};

export const editUser = async ({ data }) => {
	const payload = {
		...data,
		email: 'testing@gmail.com',
	};
	const respJson = await fetch(`${baseURL}/auth/sign-out`, {
		method: 'POST',
		body: JSON.stringify(payload),
		headers: {
			'Content-type': 'application/json',
		},
	});

	return respJson.json();
};
