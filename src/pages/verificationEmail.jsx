export default function VerificationEmail() {
	return (
		<div className='flex justify-center items-center h-screen'>
			<div className='form-wrapper shadow-md bg-white h-3/5 min-w-1/4 p-5 rounded-xl flex flex-col'>
				{/* <h1 className='text-3xl'>Sign Up</h1> */}

				<div className='content-form-wrapperm flex-1 flex flex-col items-center justify-center gap-3'>
					<h1>Your account have been successfully created</h1>
					<p>An email verification has been sent to your email.</p>
					<p>Please check your email and verify your email address before using the app</p>
				</div>
			</div>
		</div>
	);
}
