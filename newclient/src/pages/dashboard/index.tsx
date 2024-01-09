import { useAppSelector } from 'src/shared/lib/hooks/useRedux';

const Dashboard = () => {
	const {
		data: tableData,
		error,
		loading,
	} = useAppSelector((state) => state.tableReducer);

	if (error) {
		return <div>Something went wrong with getting dashboards</div>;
	}
	if (loading) {
		return <div>Loading..</div>;
	} else {
		return (
			<div className='flex items-center justify-center w-full'>
				<div className='w-[20em] flex flex-col gap-5 '></div>
			</div>
		);
	}
};

export default Dashboard;
