import { FaUserCircle } from 'react-icons/fa';

export default function Profile() {
	return (
		<main className='page-wrapper'>
			<h1>My Profile</h1>
			<div className='content-wrapper flex gap-10'>
				<div className='photo-wrapper'>
					<div className='shadow-lg w-36 h-52 rounded-md border-2 bg-gray-300 flex justify-center items-center'>
						<FaUserCircle className='text-6xl text-gray-500' />
					</div>
				</div>
				<div className='information-wrapper flex flex-col gap-5 items-start flex-1'>
					<div className='input-wrapper flex gap-2'>
						<p>Email :</p>
						<input
							type='text'
							name='email'
							id='email'
							className='input'
							autoComplete='off'
							disabled
						/>
					</div>
					<div className='input-wrapper flex gap-2'>
						<p>Name :</p>
						<input type='text' name='name' id='name' className='input' autoComplete='off' />
					</div>
					<button className='btn !rounded-md'>Save changes</button>
				</div>
			</div>
		</main>
	);
}
