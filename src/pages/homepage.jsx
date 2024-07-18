import { useNavigate } from 'react-router-dom';

export default function Homepage() {
	const navigate = useNavigate();

	return (
		<div className=''>
			<header className='flex justify-end p-5 px-12 shadow-md bg-white'>
				<div className='flex gap-5'>
					<button
						className='btn'
						onClick={() => {
							navigate('/sign-in');
						}}
					>
						Sign In
					</button>
					<button
						className='btn'
						onClick={() => {
							navigate('/sign-up');
						}}
					>
						Sign Up
					</button>
				</div>
			</header>
		</div>
	);
}
