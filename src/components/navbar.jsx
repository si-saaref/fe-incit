import { FacebookLoginClient } from '@greatsumini/react-facebook-login';
import { googleLogout } from '@react-oauth/google';
import { useState } from 'react';
import { FaUserCircle } from 'react-icons/fa';
import { FiUser } from 'react-icons/fi';
import { IoIosArrowDown } from 'react-icons/io';
import { IoLogOutOutline } from 'react-icons/io5';
import { useLocation, useNavigate } from 'react-router-dom';
import { useUser } from '../hook/useUser';
import { apiAuthSignOut } from '../services';

export default function Navbar() {
	const navigate = useNavigate();
	const [isShowDropdown, setIsShowDropdown] = useState(false);
	const { user, logoutUser } = useUser();
	const { pathname } = useLocation();

	return (
		<header
			className={`flex justify-end p-5 px-12 shadow-md bg-white sticky top-0 ${
				pathname === '/sign-up' || pathname === '/sign-in' ? 'hidden' : ''
			}`}
		>
			<div className='flex gap-10 justify-end w-full navbar items-center'>
				<img
					onClick={() => {
						navigate('/dashboard');
					}}
					src='https://incit.org/wp-content/uploads/2024/07/incit-logo-new-footer.png'
					className='w-28 cursor-pointer'
					alt=''
				/>
				{user && (
					<ul className='flex-1'>
						<li
							className='item'
							onClick={() => {
								navigate('/dashboard');
							}}
						>
							Dashboard
						</li>
					</ul>
				)}
				{user ? (
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
							<li
								onClick={async () => {
									navigate('/my-profile');
								}}
							>
								<FiUser />
								<p>My Profile</p>
							</li>
							<li
								onClick={async () => {
									await apiAuthSignOut();
									googleLogout();
									FacebookLoginClient.logout(() => {
										console.log('logout completed!');
									});
									navigate('/');
									logoutUser();
								}}
							>
								<IoLogOutOutline className='text-red-600' />
								<p className='text-red-600'>Log Out</p>
							</li>
						</ul>
					</div>
				) : (
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
				)}
			</div>
		</header>
	);
}
