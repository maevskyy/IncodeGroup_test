import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAppSelector } from 'src/shared/lib/hooks/useRedux';

const DashBoardAndInfo = ({ currentPathname }: { currentPathname: string[] }) => {
	const navigate = useNavigate();
	const tableFrontId = currentPathname[2];

	const tablesData = useAppSelector((state) => state.tableReducer.data);
	const [titleAndId, setTitleAndId] = useState({
		title: '',
		id: '',
	});

	useEffect(() => {
		const currentTable = tablesData.find((table) => table.id == tableFrontId);
		console.log(tablesData);

		if (currentTable) {
			setTitleAndId({ title: currentTable.title, id: currentTable.id });
		}
	}, [tablesData, tableFrontId]);

	return (
		<div className='flex items-center gap-10'>
			<div className='flex items-center gap-5'>
				<h4>
					Table: <span className='font-semibold text-lg'>{titleAndId.title}</span>
				</h4>
				<p>
					Id: <span className='font-semibold text-lg'>{titleAndId.id}</span>
				</p>
			</div>
			<button
				className='button_style'
				onClick={() => navigate('/dashboard')}
			>
				Dashboards
			</button>
		</div>
	);
};

export default DashBoardAndInfo;
