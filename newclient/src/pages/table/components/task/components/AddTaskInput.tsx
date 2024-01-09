import React from 'react';
import { SlPicture } from 'react-icons/sl';

type Props = {
	value: string;
	handler: React.Dispatch<
		React.SetStateAction<{
			title: string;
			description: string;
		}>
	>;
};

const AddTaskInput = ({ value, handler }: Props) => {
	return (
		<>
			<div className='flex items-center gap-3'>
				<SlPicture className='w-[14px] h-[14px]' />
				<input
					type='text'
					value={value}
					onChange={(e) => handler((prev) => ({ ...prev, title: e.target.value }))}
					className='text-sm bg-transparent group-hover:placeholder:text-white border-b-[1px] border-gray-600 pb-1 w-2/3 outline-none '
					placeholder='Enter task title'
				/>
			</div>
		</>
	);
};
export default AddTaskInput;
