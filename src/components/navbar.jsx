import { FacebookLoginClient } from '@greatsumini/react-facebook-login';
import { googleLogout } from '@react-oauth/google';
import { authSignOut } from '../services';
import { IoLogOutOutline } from 'react-icons/io5';
import { FaUserCircle } from 'react-icons/fa';
import { FiUser } from 'react-icons/fi';
import { IoIosArrowDown } from 'react-icons/io';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { useUser } from '../hook/useUser';

export default function Navbar() {
	const navigate = useNavigate();
	const [isShowDropdown, setIsShowDropdown] = useState(false);
	const { user, logoutUser } = useUser();

	return (
		<header className='flex justify-end p-5 px-12 shadow-md bg-white sticky'>
			<div className='flex gap-5 justify-end w-full navbar items-center'>
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
									await authSignOut();
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
