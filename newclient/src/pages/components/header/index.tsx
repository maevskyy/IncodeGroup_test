import React from 'react';
import { CiSearch } from 'react-icons/ci';
import Card from 'src/shared/UI/card';
import DashBoardAndInfo from './components/DashBoardAndInfo';
import { useLocation } from 'react-router-dom';

const Header = () => {
	const location = useLocation();
	const currentPathname = location.pathname.split('/');

	return (
		<header className='flex justify-between border-b pb-5'>
			<div className='flex items-center gap-2'>
				<Card>
					<div className='flex items-center gap-2'>
						<CiSearch className='w-[20px] h-[20px]' />
						<input
							type='text'
							className=' bg-transparent outline-none w-[15em]'
							placeholder='Enter a board ID here'
						/>
					</div>
				</Card>
				<button className='button_style'>Load</button>
			</div>

			{currentPathname[1] === 'table' && (
				<DashBoardAndInfo currentPathname={currentPathname} />
			)}
		</header>
	);
};
export default Header;
