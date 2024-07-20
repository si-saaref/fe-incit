import { googleLogout } from '@react-oauth/google';
import { useNavigate } from 'react-router-dom';

export default function Dashboard() {
	const navigate = useNavigate();
	return (
		<div className=''>
			<header className='flex justify-end p-5 px-12 shadow-md bg-white'>
				<div className='flex gap-5'>
					<button
						className='btn'
						onClick={() => {
							googleLogout();
							navigate('/');
						}}
					>
						Logout
					</button>
				</div>
			</header>
			<main className='h-full p-14 flex flex-col gap-10'>
				<div className='summary-wrapper flex justify-between'>
					<div className='card'>
						<h1>Signed Up Users</h1>
						<h2>100</h2>
					</div>
					<div className='card'>
						<h1>Today`s Active Users</h1>
						<h2>100</h2>
					</div>
					<div className='card'>
						<h1>Weekly Active Users</h1>
						<h2>100</h2>
					</div>
				</div>
				<div className='table-wrapper flex justify-center'>
					<table className='bg-white'>
						<thead>
							<tr>
								<th>No</th>
								<th>Name</th>
								<th>Sign Up</th>
								<th>Login</th>
								<th>Logout</th>
							</tr>
						</thead>
						<tbody>
							<tr>
								<td>1</td>
								<td>Achmad Syarif</td>
								<td>20 April</td>
								<td>10</td>
								<td>20 April</td>
							</tr>
						</tbody>
					</table>
				</div>
			</main>
		</div>
	);
}
