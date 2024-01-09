import React from 'react';

type Props = {
	value: string;
	handler: React.Dispatch<
		React.SetStateAction<{
			title: string;
			description: string;
		}>
	>;
};

const AddTaskTextarea = ({ value, handler }: Props) => {
	return (
		<div className='flex flex-col gap-2'>
			<p className='text-sm'>Description</p>
			<textarea
				value={value}
				onChange={(e) => handler((prev) => ({ ...prev, description: e.target.value }))}
				className=' bg-transparent resize-none max outline-none border border-gray-600 placeholder:text-xs text-xs p-2'
				placeholder='Enter description'
			></textarea>
		</div>
	);
};

export default AddTaskTextarea;
