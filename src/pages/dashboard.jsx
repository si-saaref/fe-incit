/* eslint-disable react/no-unescaped-entities */
import { useCallback, useEffect, useState } from 'react';
import { apiGetDashboardSummaryData, apiGetDashboardTableData } from '../services';

export default function Dashboard() {
	const [dataTable, setDataTable] = useState([]);
	const [dataSummary, setDataSummary] = useState();

	const fetchDashboardSummaryData = useCallback(async () => {
		const resp = await apiGetDashboardSummaryData();

		setDataSummary(resp.data);
	}, []);

	const fetchDashboardTableData = useCallback(async () => {
		const resp = await apiGetDashboardTableData();
		setDataTable(resp.data);
	}, []);

	useEffect(() => {
		fetchDashboardSummaryData();
		fetchDashboardTableData();
	}, [fetchDashboardSummaryData, fetchDashboardTableData]);

	return (
		<main className='page-wrapper'>
			<h1 className='title-page'>Summary Information</h1>
			<div className='summary-wrapper flex justify-between'>
				<div className='card'>
					<h1>Signed Up Users</h1>
					<h2>{dataSummary?.totalSignedUpUser}</h2>
				</div>
				<div className='card'>
					<h1>Today's Active Users</h1>
					<h2>{dataSummary?.totalActiveUsersToday}</h2>
				</div>
				<div className='card'>
					<h1>Average Weekly Active Users</h1>
					<h2>{dataSummary?.averageActiveUserWeekly.toFixed(2)}</h2>
				</div>
			</div>
			<div className='table-wrapper flex justify-center h-[500px] overflow-y-auto border rounded shadow-md'>
				<table className='bg-white w-full'>
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
						{dataTable?.length !== 0 ? (
							dataTable?.map((item, idx) => (
								<tr key={item.id}>
									<td>{idx + 1}</td>
									<td>{item?.name.length === 0 ? '-' : item.name}</td>
									<td>
										{new Date(item?.createdAt).toLocaleDateString('id-ID', {
											month: 'short',
											day: 'numeric',
											year: 'numeric',
										}) ?? '-'}
									</td>
									<td>{item?.totalLogin ?? '-'}</td>
									<td>
										{new Date(item?.logoutAt).toLocaleDateString('id-ID', {
											month: 'short',
											day: 'numeric',
											year: 'numeric',
										}) ?? '-'}
									</td>
								</tr>
							))
						) : (
							<tr className=''>
								<td>No Data</td>
							</tr>
						)}
					</tbody>
				</table>
			</div>
		</main>
	);
}
