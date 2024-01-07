import React from 'react';
import { CiCirclePlus } from 'react-icons/ci';
import Card from 'src/shared/UI/card';
import { ITable } from '../columns/entities/types';

type Props = {
   allTables: ITable[];
   tableAndPageHandler: (table: ITable) => void;
};

const Dashboards = ({ allTables, tableAndPageHandler }: Props) => {
   const buttonStyles = `flex  gap-3 w-full items-center  justify-center
   border h-fit rounded-lg px-4 py-2 border-gray-600 text-gray-400 hover:text-white hover:border-white
   transition-colors cursor-pointer shadow-md`;

   return (
      <div className="flex items-center justify-center w-full">
         <div className="w-[20em] flex flex-col gap-5 ">
            {allTables.map((table) => (
               <button
                  key={table.id}
                  onClick={() => tableAndPageHandler(table)}
               >
                  <Card styles="w-full text-center hover:cursor-pointer hover:scale-[1.05] transition-transform">
                     {table.title}
                  </Card>
               </button>
            ))}
            <button className={buttonStyles}>
               <CiCirclePlus className="w-[24px] h-[24px]  " />
               <p className="font-semibold">Add new dashboard</p>
            </button>
         </div>
      </div>
   );
};

export default Dashboards;
