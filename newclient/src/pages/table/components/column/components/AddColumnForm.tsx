import React from 'react';
import { FaPlus } from 'react-icons/fa6';
import { IoIosCloseCircleOutline } from 'react-icons/io';
import Card from 'src/shared/UI/card';

type Props = {
	title: string;
	setTitle: React.Dispatch<React.SetStateAction<string>>;
	setShow: React.Dispatch<React.SetStateAction<boolean>>;
	createColumn: () => void;
};

const AddColumnForm = ({ title, setTitle, createColumn, setShow }: Props) => {
	// i could modify the Column component, but that would make it too complicated, so for better readability i almost made a copy of it
	return (
		<Card styles='h-fit w-[14em] flex items-center justify-between'>
			<form className='flex items-center gap-3'>
				<input
					type='text'
					className='text-sm font-semibold bg-transparent pb-1 mt-1  border-b w-2/3 outline-none border-white'
					value={title}
					placeholder='Column title'
					onChange={(e) => setTitle(e.target.value)}
				/>
			</form>
			<div className='flex items-center gap-1 mr-[-5px]'>
				<div
					className='p-1 rounded-lg hover:cursor-pointer hover:bg-gray-700'
					onClick={createColumn}
				>
					<FaPlus />
				</div>
				<div
					onClick={() => setShow(false)}
					className='p-1 rounded-lg hover:cursor-pointer hover:bg-gray-700'
				>
					<IoIosCloseCircleOutline className='w-[18px] h-[18px]' />
				</div>
			</div>
		</Card>
	);
};

export default AddColumnForm;
