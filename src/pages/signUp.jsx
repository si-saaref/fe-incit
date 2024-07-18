import { useState } from 'react';
import { LuEye } from 'react-icons/lu';
import { LuEyeOff } from 'react-icons/lu';

export default function SignUp() {
	const [inputEmail, setInputEmail] = useState('');
	const [inputPassword, setInputPassword] = useState('');
	const [isShowPassword, setIsShowPassword] = useState(false);

	const handleClickPreviewPassword = () => {
		setIsShowPassword((prevValue) => !prevValue);
	};

	const handleSignUp = () => {
		if (inputPassword.trim().length <= 8) {
			console.log('less than 8 char');
		}
		if (!inputPassword.match(/[a-z]/g)) {
			console.log('Doesnt contain lowercase');
		}
		if (!inputPassword.match(/[A-Z]/g)) {
			console.log('Doesnt contain uppercase');
		}
		if (!inputPassword.match(/[0-9]/g)) {
			console.log('Doesnt contain digit number');
		}
		if (!inputPassword.match(/[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]/g)) {
			console.log('Doesnt contain spesial character');
		}
		const data = {
			email: inputEmail,
			password: inputPassword,
		};
		console.log(data);
	};

	return (
		<div className='flex justify-center items-center h-screen'>
			<div className='form-wrapper shadow-md bg-white h-3/5 w-1/4 p-5 rounded-xl flex flex-col'>
				<h1 className='text-3xl'>Sign Up</h1>

				<div className='content-form-wrapperm flex-1 flex flex-col items-center justify-center gap-3'>
					<div className='w-full'>
						<input
							className='input'
							type='text'
							placeholder='Email'
							value={inputEmail}
							onChange={(e) => {
								setInputEmail(e.target.value);
							}}
						/>
					</div>
					<div className='w-full relative'>
						<input
							className='input'
							type={isShowPassword ? 'text' : 'password'}
							placeholder='Password'
							value={inputPassword}
							onChange={(e) => {
								setInputPassword(e.target.value);
							}}
						/>
						{!isShowPassword ? (
							<LuEye className='icon-preview' onClick={handleClickPreviewPassword} />
						) : (
							<LuEyeOff className='icon-preview' onClick={handleClickPreviewPassword} />
						)}
					</div>
					<button className='btn w-full !rounded-lg' onClick={handleSignUp}>
						Sign Up
					</button>
					<div className='relative w-full flex justify-center'>
						<p className='separator'>or</p>
					</div>
				</div>
			</div>
		</div>
	);
}
