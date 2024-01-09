import React, { useState } from 'react';
import Card from 'src/shared/UI/card';
import { FaPlus } from 'react-icons/fa';
import { IoIosCloseCircleOutline } from 'react-icons/io';
import { generateId } from 'src/shared/helpers/idGenerator';
import { defaultColums } from 'src/shared/assets/defaultTable';
import { useAppDispatch } from 'src/shared/lib/hooks/useRedux';
import { asyncCreateTable } from 'src/shared/lib/redux/slices/table/table.thunk';

type Props = {
	setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

const DashboardAddNewForm = ({ setIsOpen }: Props) => {
	const dispatch = useAppDispatch();
	const mockProtoTable = {
		id: generateId(),
		title: '',
	};
	const [protoTable, setProtoTable] = useState(mockProtoTable);

	const createTableHandler = async () => {
		dispatch(asyncCreateTable({ ...protoTable, columns: defaultColums }));
		// columns: defaultColums ,
	};

	return (
		<Card styles=' w-full flex items-center justify-between'>
			<form className='flex items-center gap-3'>
				<input
					type='text'
					className='text-sm font-semibold bg-transparent pb-1 mt-1  flex-1 border-b w-2/3 outline-none border-white'
					value={protoTable.title}
					placeholder='Dashboard title'
					onChange={(e) =>
						setProtoTable((prevTable) => ({
							...prevTable,
							title: e.target.value,
						}))
					}
				/>
			</form>
			<div className='flex items-center gap-1 mr-[-5px]'>
				<div
					className='p-1 rounded-lg hover:cursor-pointer hover:bg-gray-700'
					onClick={() => createTableHandler()}
				>
					<FaPlus />
				</div>
				<div
					className='p-1 rounded-lg hover:cursor-pointer hover:bg-gray-700'
					onClick={() => setIsOpen(false)}
				>
					<IoIosCloseCircleOutline className='w-[18px] h-[18px]' />
				</div>
			</div>
		</Card>
	);
};

export default DashboardAddNewForm;
