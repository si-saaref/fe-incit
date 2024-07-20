import { GoogleLogin } from '@react-oauth/google';
import { useState } from 'react';
import { LuEye } from 'react-icons/lu';
import { LuEyeOff } from 'react-icons/lu';
import { useNavigate } from 'react-router-dom';
import FacebookLogin from '@greatsumini/react-facebook-login';
import { MdFacebook } from 'react-icons/md';

export default function SignIn() {
	const [inputEmail, setInputEmail] = useState('');
	const [inputPassword, setInputPassword] = useState('');
	const [isShowPassword, setIsShowPassword] = useState(false);
	const navigate = useNavigate();

	const handleClickPreviewPassword = () => {
		setIsShowPassword((prevValue) => !prevValue);
	};

	const handleSignIn = () => {
		const data = {
			email: inputEmail,
			password: inputPassword,
		};
		console.log(data);

		navigate('/dashboard');
	};

	return (
		<div className='flex justify-center items-center h-screen'>
			<div className='form-wrapper shadow-md bg-white h-3/5 min-w-1/4 p-5 rounded-xl flex flex-col'>
				<h1 className='text-3xl'>Sign In</h1>

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
					<button className='btn w-full !rounded-lg' onClick={handleSignIn}>
						Sign In
					</button>
					<div className='relative w-full flex justify-center'>
						<p className='separator'>or</p>
					</div>
					<div className='flex flex-col gap-3'>
						<GoogleLogin
							onSuccess={(credentialResponse) => {
								console.log(credentialResponse);
								if (credentialResponse.credential) {
									navigate('/dashboard');
								}
							}}
							onError={() => {
								console.log('Login Failed');
							}}
							text='signin_with'
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
					</div>
				</div>
			</div>
		</div>
	);
}
