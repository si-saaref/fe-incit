import { useNavigate } from 'react-router-dom';

export default function NotFound() {
	const navigate = useNavigate();

	return (
		<div className='h-screen w-screen flex justify-center items-center'>
			<div className='w-3/4 bg-white h-2/3 p-10 rounded-md shadow-md flex flex-col gap-10 justify-center items-center'>
				<h1 className='text-xl font-semibold'>The page you are looking for is not found</h1>
				<button
					className='btn'
					onClick={() => {
						navigate(-1);
					}}
				>
					Back to menu
				</button>
			</div>
		</div>
	);
}
