import { useAppSelector } from 'src/shared/lib/hooks/useRedux';

const Table = () => {
	const tablesData = useAppSelector((state) => state.tableReducer.data);

	return <div>Table</div>;
};

export default Table;
