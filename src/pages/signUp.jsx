import FacebookLogin from '@greatsumini/react-facebook-login';
import { GoogleLogin } from '@react-oauth/google';
import { useState } from 'react';
import { LuEye, LuEyeOff } from 'react-icons/lu';
import { MdFacebook } from 'react-icons/md';
import { useNavigate } from 'react-router-dom';
import { authSignUp } from '../services';

export default function SignUp() {
	const [inputEmail, setInputEmail] = useState('');
	const [inputPassword, setInputPassword] = useState('');
	const [isShowPassword, setIsShowPassword] = useState(false);
	const navigate = useNavigate();

	const handleClickPreviewPassword = () => {
		setIsShowPassword((prevValue) => !prevValue);
	};

	const handleSignUp = async () => {
		try {
			if (inputPassword.trim().length <= 8) {
				console.log('less than 8 char');
				return;
			}
			if (!inputPassword.match(/[a-z]/g)) {
				console.log('Doesnt contain lowercase');
				return;
			}
			if (!inputPassword.match(/[A-Z]/g)) {
				console.log('Doesnt contain uppercase');
				return;
			}
			if (!inputPassword.match(/[0-9]/g)) {
				console.log('Doesnt contain digit number');
				return;
			}
			if (!inputPassword.match(/[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]/g)) {
				console.log('Doesnt contain spesial character');
				return;
			}
			const data = {
				email: inputEmail,
				password: inputPassword,
			};

			const response = await authSignUp(data);

			console.log(response);

			if (response.status !== 201) {
				throw Error('Failed Sign Up');
			}
			navigate('/dashboard');
		} catch (error) {
			console.log(error.message);
		}
	};

	// const login = useGoogleLogin({
	// 	onSuccess: async (tokenResponse) => {
	// 		console.log(tokenResponse);
	// 		const resp = await fetch(
	// 			`https://www.googleapis.com/oauth2/v3/userinfo?access_token=${tokenResponse.access_token}`
	// 		);
	// 		const response = await resp.json();
	// 		console.log(response);
	// 	},
	// 	onError: (err) => console.log(err),
	// 	onNonOAuthError: (err) => console.log(err),

	// 	flow: 'implicit',
	// });

	return (
		<div className='flex justify-center items-center h-screen'>
			<div className='form-wrapper shadow-md bg-white h-3/5 min-w-1/4 p-5 rounded-xl flex flex-col'>
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
					<p className='self-start text-xs'>
						Already have an account? Let&apos;s
						<a href='/sign-in' className='text-blue-500 underline ml-1'>
							Sign In
						</a>
					</p>
					<button
						className='btn w-full !rounded-lg'
						onClick={handleSignUp}
						disabled={!(inputEmail && inputPassword)}
					>
						Sign Up
					</button>
					<div className='relative w-full flex justify-center'>
						<p className='separator'>or</p>
					</div>
					<GoogleLogin
						width={300}
						onSuccess={(credentialResponse) => {
							console.log(credentialResponse);
							if (credentialResponse.credential) {
								navigate('/dashboard');
							}
						}}
						onError={() => {
							console.log('Login Failed');
						}}
						text='signup_with'
						// ux_mode='redirect'
						// login_uri='http://localhost:5173/dashboard'
					/>
					<FacebookLogin
						appId='2197309287310628'
						onSuccess={(response) => {
							console.log('Login Success!', response);
							if (response.accessToken) {
								navigate('/dashboard');
							}
						}}
						onFail={(error) => {
							console.log('Login Failed!', error);
						}}
						onProfileSuccess={(response) => {
							console.log('Get Profile Success!', response);
						}}
						render={({ onClick }) => (
							<div
								onClick={onClick}
								className='bg-[#0866EF] w-full h-10 flex gap-3  items-center justify-center px-2 rounded text-md text-white'
							>
								<MdFacebook className='text-2xl' />
								<button>Continue with Facebook</button>
							</div>
						)}
					/>
					{/* <button onClick={() => login()}>Sign in with Google 🚀</button> */}
				</div>
			</div>
		</div>
	);
}
