export default function Dashboard() {
	return (
		<div className=''>
			<main className='page-wrapper'>
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
