import { useAppSelector } from 'src/shared/lib/hooks/useRedux';
import DashboardButtons from './components/DashboardButtons';
import DashboardAddNew from './components/DashboardAddNew';

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
			<main className='flex flex-1 items-center justify-center w-full '>
				<div className='w-[20em] flex flex-col gap-5 '>
					<DashboardButtons tableData={tableData} />
					<DashboardAddNew tablesQty={tableData.length} />
				</div>
			</main>
		);
	}
};

export default Dashboard;
