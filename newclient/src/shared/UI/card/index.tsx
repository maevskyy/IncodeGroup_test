import React, { ReactNode } from 'react';

type Props = {
	children: ReactNode;
	styles?: string;
};

const Card: React.FC<Props> = ({ children, styles }: Props) => {
	return (
		<div
			className={`px-4 py-2 rounded-lg bg-[#1c2532] border
        border-gray-600 shadow-md shadow-slate-800 ${styles ? styles : 'w-fit'}`}
		>
			{children}
		</div>
	);
};

export default Card;
