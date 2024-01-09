import React, { useState } from 'react';
import { IconType } from 'react-icons';
import { FaPlus } from 'react-icons/fa6';
import { MdDeleteOutline } from 'react-icons/md';

type Props = {
	columnId: string;
	title: string;
	Icon: IconType | null;
	deleteColumnHandler: (columnId: string) => void;
	setShowAddTask: React.Dispatch<React.SetStateAction<boolean>>;
};

const ColumnUI = ({
	title,
	Icon,
	deleteColumnHandler,
	columnId,
	setShowAddTask,
}: Props) => {
	const [columnTitle, setColumnTitle] = useState(title);

	return (
		<>
			<div className='flex items-center gap-3'>
				{Icon && <Icon className='w-[20px] h-[20px]' />}
				<input
					type='text'
					value={columnTitle}
					className={`text-sm font-semibold bg-transparent border-b pb-1 mt-1 border-transparent w-2/3 outline-none focus:border-white`}
					onChange={(e) => setColumnTitle(e.target.value)}
				/>
			</div>
			<div className='flex items-center gap-1 mr-[-5px]'>
				<div
					className='p-1 rounded-lg hover:cursor-pointer hover:bg-gray-700'
					onClick={() => setShowAddTask(true)}
				>
					<FaPlus />
				</div>
				<div
					className='p-1 rounded-lg hover:cursor-pointer hover:bg-gray-700'
					onClick={() => deleteColumnHandler(columnId)}
				>
					<MdDeleteOutline className='w-[18px] h-[18px]' />
				</div>
			</div>
		</>
	);
};

export default ColumnUI;
