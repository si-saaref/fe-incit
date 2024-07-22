export const passwordChecker = (password) => {
	if (password.trim().length <= 8) {
		throw new Error('Your password is less than 8 char');
	}
	if (!password.match(/[a-z]/g)) {
		throw new Error("Your password doesn't contain lowercase letter");
	}
	if (!password.match(/[A-Z]/g)) {
		throw new Error("Your password doesn't contain uppercase letter");
	}
	if (!password.match(/[0-9]/g)) {
		throw new Error("Your password doesn't contain digit number");
	}
	if (!password.match(/[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]/g)) {
		throw new Error("Your password doesn't contain spesial character");
	}

	return true;
};
