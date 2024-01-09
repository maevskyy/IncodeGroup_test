import Card from 'src/shared/UI/card';
import { ITable } from 'src/shared/types/table.types';
import { MdDeleteOutline } from 'react-icons/md';
import { useAppDispatch } from 'src/shared/lib/hooks/useRedux';
import { asyncDeleteTable } from 'src/shared/lib/redux/slices/table/table.thunk';
import { useNavigate } from 'react-router-dom';

type Props = {
	tableData: ITable[];
};

const DashboardButtons = ({ tableData }: Props) => {
	const dispatch = useAppDispatch();
	const navigate = useNavigate();

	const deleteTableHandler = (tableId: string) => {
		dispatch(asyncDeleteTable(tableId));
	};

	const clickOnTable = (tableFrontId: string) => {
		navigate(`/table/${tableFrontId}`);
	};

	return (
		<>
			{tableData.map((table: ITable) => (
				<button
					key={table._id}
					onClick={() => clickOnTable(table.id)}
				>
					<Card styles='w-full flex text-center hover:cursor-pointer hover:scale-[1.05] transition-transform'>
						<h4 className='self-center flex-1'>{table.title}</h4>
						<div
							onClick={(e) => {
								e.stopPropagation();
								deleteTableHandler(table._id as string);
							}}
							className='p-1 rounded-lg hover:cursor-pointer hover:bg-gray-700'
						>
							<MdDeleteOutline className='w-[18px] h-[18px]' />
						</div>
					</Card>
				</button>
			))}
		</>
	);
};

export default DashboardButtons;
