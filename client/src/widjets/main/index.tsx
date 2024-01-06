import React from 'react';
import Card from 'src/shared/UI/card';
import { FcPlus, FcSerialTasks, FcPieChart } from 'react-icons/fc';
import { FaPlus } from 'react-icons/fa6';
import './style.css';

const Main = () => {
   return (
      <main className="flex flex-1 gap-10 mx-5 py-5 overflow-auto scrollbar_custom">
         <section className="flex flex-col gap-5">
            <Card styles="w-[14em] flex items-center justify-between">
               <div className="flex items-center gap-3">
                  <FcPieChart className="w-[20px] h-[20px]" />
                  <input
                     type="text"
                     value={'To-Do'}
                     className="text-sm font-semibold bg-transparent w-2/3 outline-none"
                     disabled={true}
                  />
               </div>
               <div className="p-1 rounded-lg hover:cursor-pointer hover:bg-gray-700">
                  <FaPlus />
               </div>
            </Card>
         </section>
         {/* <section className='flex flex-col gap-5'>
				<Card styles='w-[14em] flex items-center justify-between'>
					<div className='flex items-center gap-3'>
						<FcSerialTasks className='w-[20px] h-[20px] ' />
						<h4 className=' text-sm font-semibold'>In Progress (1)</h4>
					</div>
					<FaPlus />
				</Card>
			</section>
			<section className='flex flex-col gap-5'>
				<Card styles='w-[14em] flex items-center justify-between'>
					<div className='flex items-center gap-3'>
						<FcPlus className='w-[20px] h-[20px] ' />
						<h4 className=' text-sm font-semibold'>To-Do (2)</h4>
					</div>
					<FaPlus />
				</Card>
			</section> */}
      </main>
   );
};

export default Main;
