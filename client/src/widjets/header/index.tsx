import Card from 'src/shared/UI/card';
import { CiSearch } from 'react-icons/ci';

const Header = () => {
	const stylesForButton = `flex items-center justify-center border
  rounded-lg px-4 py-2 border-gray-600 cursor-pointer shadow-md
  hover:shadow-green-800 hover:bg-[#23AC8B] transition-colors`;

	return (
		<header className='flex gap-2 border-b pb-5'>
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
			<button className={stylesForButton}>Load</button>
		</header>
	);
};

export default Header;
