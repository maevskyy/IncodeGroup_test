import React from 'react';

type Props = {
	setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
	createTask: () => void;
};

const AddTaskButtons = ({ setIsOpen, createTask }: Props) => {
	const buttonStyles = ` border
    rounded-lg px-4 py-2 border-gray-600 cursor-pointer shadow-md
     transition-colors text-gray-400 hover:text-white`;

	return (
		<div className='flex gap-2 text-xs self-end '>
			<button
				className={`${buttonStyles}`}
				onClick={() => setIsOpen(false)}
			>
				Close
			</button>
			<button
				onClick={() => createTask()}
				className={`${buttonStyles} hover:bg-[#23AC8B] hover:shadow-green-800`}
			>
				Save
			</button>
		</div>
	);
};

export default AddTaskButtons;
