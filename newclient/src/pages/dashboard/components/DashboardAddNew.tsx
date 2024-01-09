import React, { useState } from 'react';
import { CiCirclePlus } from 'react-icons/ci';
import DashboardAddNewForm from './DashboardAddNewForm';

type Props = {
	tablesQty: number;
};

const DashboardAddNew = ({ tablesQty }: Props) => {
	const [showAddDashboard, setShowAddDashboard] = useState(false);

	return (
		<>
			{tablesQty >= 4 ? (
				<div className='border-t border-blue-400 text-xs font-semibold text-end pt-2 text-blue-200'>
					Maximum
				</div>
			) : (
				<>
					{showAddDashboard ? (
						<>
							<DashboardAddNewForm
								setIsOpen={setShowAddDashboard}
								// addTableHandler={addTableHandler}
							/>
						</>
					) : (
						<button
							className='createButton_style'
							onClick={() => setShowAddDashboard(true)}
						>
							<CiCirclePlus className='w-[24px] h-[24px]' />
							<p className='font-semibold'>Add new dashboard</p>
						</button>
					)}
				</>
			)}
		</>
	);
};

export default DashboardAddNew;
