import { FaUserCircle } from 'react-icons/fa';
import { useUser } from '../hook/useUser';
import { useState } from 'react';
import { apiEditPassword, apiEditUser } from '../services';

export default function Profile() {
	const { user, editUser } = useUser();
	const [inputName, setInputName] = useState(user?.name ?? '');
	const [inputOldPassword, setInputOldPassword] = useState('');
	const [inputNewPassword, setInputNewPassword] = useState('');
	const [inputCheckPassword, setInputCheckPassword] = useState('');

	const handleChangeUserInformation = async () => {
		try {
			if (inputName.trim().length === 0) {
				alert('Name is stil empty. Are you sure want to save the changes ?');
			}

			const data = {
				name: inputName,
			};

			const response = await apiEditUser(data);

			if (response.code !== 200) {
				throw Error(response.message);
			}
			editUser(data);
		} catch (error) {
			console.log(error.message);
		}
	};

	const handleChangePassword = async () => {
		try {
			const newPassword = inputNewPassword.toLowerCase().trim();
			const checkPassword = inputCheckPassword.toLowerCase().trim();

			if (newPassword !== checkPassword) {
				alert('Confirmation password is incorrect. Please check again');
			}

			const data = {
				oldPassword: inputOldPassword.trim(),
				newPassword: inputNewPassword,
			};
			const response = await apiEditPassword(data);

			if (response.code !== 200) {
				throw Error(response.message);
			}
		} catch (error) {
			console.log(error.message);
		}
	};

	return (
		<>
			<main className='page-wrapper !min-h-fit'>
				<h1>My Profile</h1>
				<div className='content-wrapper flex gap-10'>
					<div className='photo-wrapper'>
						<div className='shadow-lg w-36 h-52 rounded-md border-2 bg-gray-300 flex justify-center items-center'>
							{user?.picture ? (
								<img src={user?.picture} alt='' />
							) : (
								<FaUserCircle className='text-6xl text-gray-500' />
							)}
						</div>
					</div>
					<div className='information-wrapper flex flex-col gap-5 items-start flex-1'>
						<div className='input-wrapper flex gap-2'>
							<p>Email :</p>
							<input
								type='text'
								name='email'
								id='email'
								className='input text-gray-400 cursor-not-allowed'
								autoComplete='off'
								value={user?.email ?? ''}
								disabled
							/>
						</div>
						<div className='input-wrapper flex gap-2'>
							<p>Name :</p>
							<input
								type='text'
								name='name'
								id='name'
								className='input'
								autoComplete='off'
								placeholder={user?.name ?? ''}
								value={inputName}
								onChange={(e) => {
									setInputName(e.target.value);
								}}
							/>
						</div>
						<button
							className='btn !rounded-md'
							onClick={handleChangeUserInformation}
							disabled={inputName === user?.name}
						>
							Save changes
						</button>
					</div>
				</div>
			</main>
			<main className='page-wrapper !min-h-fit'>
				<h1>Change Password</h1>
				<div className='content-wrapper flex gap-10'>
					<div className='information-wrapper flex flex-col gap-5 items-start flex-1'>
						<div className='input-wrapper flex gap-2'>
							<p>Old Password :</p>
							<input
								type='password'
								name='oldPassword'
								id='oldPassword'
								className='input'
								autoComplete='off'
								value={inputOldPassword}
								onChange={(e) => {
									setInputOldPassword(e.target.value);
								}}
							/>
						</div>
						<div className='input-wrapper flex gap-2'>
							<p>New Password :</p>
							<input
								type='password'
								name='newPassword'
								id='newPassword'
								className='input'
								autoComplete='off'
								value={inputNewPassword}
								onChange={(e) => {
									setInputNewPassword(e.target.value);
								}}
							/>
						</div>
						<div className='input-wrapper flex gap-2'>
							<p>Confirm Password :</p>
							<input
								type='password'
								name='checkPassword'
								id='checkPassword'
								className='input'
								autoComplete='off'
								value={inputCheckPassword}
								onChange={(e) => {
									setInputCheckPassword(e.target.value);
								}}
							/>
						</div>
						<button
							className='btn !rounded-md'
							onClick={handleChangePassword}
							disabled={!(inputOldPassword && inputCheckPassword && inputNewPassword)}
						>
							Save changes
						</button>
					</div>
				</div>
			</main>
		</>
	);
}
