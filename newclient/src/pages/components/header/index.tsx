import React from 'react';
import { CiSearch } from 'react-icons/ci';
import Card from 'src/shared/UI/card';

const Header = () => {
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

			{/* {currentPage === ECurrentPage.Tables && (
       <DashBoardAndInfo
          currentTableInfo={currentTableInfo}
          setCurrentPage={setCurrentPage}
       />
    )} */}
		</header>
	);
};
export default Header;
