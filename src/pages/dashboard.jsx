import { FacebookLoginClient } from '@greatsumini/react-facebook-login';
import { googleLogout } from '@react-oauth/google';
import { useNavigate } from 'react-router-dom';
import { authSignOut } from '../services';
import { IoLogOutOutline } from 'react-icons/io5';
import { FaUserCircle } from 'react-icons/fa';
import { FiUser } from 'react-icons/fi';
import { IoIosArrowDown } from 'react-icons/io';
import { useState } from 'react';

export default function Dashboard() {
	const navigate = useNavigate();
	const [isShowDropdown, setIsShowDropdown] = useState(false);

	return (
		<div className=''>
			<header className='flex justify-end p-5 px-12 shadow-md bg-white'>
				<div className='flex gap-5'>
					<div
						className='relative icon-profile-wrapper flex items-center gap-1 cursor-pointer'
						onClick={() => setIsShowDropdown((prevState) => !prevState)}
					>
						<FaUserCircle className='text-3xl' />
						<IoIosArrowDown
							className={`text-gray-400 ${isShowDropdown ? 'rotate-180' : ''} duration-300`}
						/>

						<ul
							className={`dropdown-profile absolute top-10 -right-1 ${
								isShowDropdown ? 'block' : 'hidden'
							}`}
						>
							<li>
								<FiUser />
								<p>My Profile</p>
							</li>
							<li
								onClick={async () => {
									await authSignOut();
									googleLogout();
									FacebookLoginClient.logout(() => {
										console.log('logout completed!');
									});
									navigate('/');
								}}
							>
								<IoLogOutOutline className='text-red-600' />
								<p className='text-red-600'>Log Out</p>
							</li>
						</ul>
					</div>
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
