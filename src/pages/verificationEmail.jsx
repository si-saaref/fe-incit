import { useState } from 'react';
import toast from 'react-hot-toast';
import { apiResendEmailVerification } from '../services';
import { useNavigate } from 'react-router-dom';

export default function VerificationEmail() {
	const [inputEmail, setInputEmail] = useState('');
	const navigate = useNavigate();

	const handleClickResendEmail = async () => {
		try {
			if (inputEmail.trim().length === 0) {
				throw Error('Please type your email correctly');
			}
			const response = await apiResendEmailVerification(inputEmail);

			if (response.status === 200) {
				toast.success('Success resend email verification. Please check your email');
			} else {
				throw Error(response.message);
			}
		} catch (error) {
			toast.error(error.message);
		}
	};

	return (
		<div className='flex justify-center items-center h-screen'>
			<div className='form-wrapper shadow-md bg-white h-2/5 min-w-1/4 p-5 rounded-xl flex flex-col'>
				{/* <h1 className='text-3xl'>Sign Up</h1> */}

				<div className='content-form-wrapperm flex-1 flex flex-col items-center justify-between gap-7 py-10'>
					<h1 className='text-3xl font-semibold'>Unverified Email</h1>
					<div className=''>
						<p className='text-xl'>Your email has not be verified yet</p>
						<p>You have to verify it before use the application</p>
					</div>
					<input
						type='text'
						name='email'
						id='email'
						placeholder='Please enter your email'
						className='input'
						onChange={(e) => {
							setInputEmail(e.target.value);
						}}
					/>
					<div className='flex flex-col gap-3 justify-center items-center w-full'>
						<button className='btn w-full !rounded-md' onClick={handleClickResendEmail}>
							Resend Email Verification
						</button>
						<button
							className='btn-ghost w-full !rounded-md'
							onClick={() => {
								navigate('/sign-in');
							}}
						>
							Back to login
						</button>
					</div>
				</div>
			</div>
		</div>
	);
}
