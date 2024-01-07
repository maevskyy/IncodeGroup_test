import React, { useState } from 'react';
import { CiCirclePlus } from 'react-icons/ci';
import Card from 'src/shared/UI/card';
import { ITable } from '../columns/entities/types';
import { MdDeleteOutline } from 'react-icons/md';
import AddDashboardForm from './components/AddDashboardForm';

type Props = {
   allTables: ITable[];
   tableAndPageHandler: (table: ITable) => void;
   deleteTableHandler: (tableId: string) => void;
   addTableHandler: (table: ITable) => void;
   setCurrentTableInfo: React.Dispatch<
      React.SetStateAction<{
         title: string;
         id: string;
      }>
   >;
};

const Dashboards: React.FC<Props> = ({
   allTables,
   tableAndPageHandler,
   deleteTableHandler,
   addTableHandler,
   setCurrentTableInfo,
}: Props) => {
   const [showAddDashboard, setShowAddDashboard] = useState(false);

   const clickOnTable = (table: ITable) => {
      tableAndPageHandler(table);
      setCurrentTableInfo({ title: table.title, id: table.id });
   };

   return (
      <div className="flex items-center justify-center w-full">
         <div className="w-[20em] flex flex-col gap-5 ">
            {allTables.map((table) => (
               <button key={table.id} onClick={() => clickOnTable(table)}>
                  <Card styles="w-full flex text-center hover:cursor-pointer hover:scale-[1.05] transition-transform">
                     <h4 className="self-center flex-1">{table.title}</h4>
                     <button
                        onClick={(e) => {
                           e.stopPropagation();
                           deleteTableHandler(table.id);
                        }}
                        className="p-1 rounded-lg hover:cursor-pointer hover:bg-gray-700"
                     >
                        <MdDeleteOutline className="w-[18px] h-[18px]" />
                     </button>
                  </Card>
               </button>
            ))}

            {allTables.length >= 4 ? (
               <div className="border-t border-blue-400 text-xs font-semibold text-end pt-2 text-blue-200">
                  Maximum
               </div>
            ) : (
               <>
                  {showAddDashboard ? (
                     <AddDashboardForm
                        setIsOpen={setShowAddDashboard}
                        addTableHandler={addTableHandler}
                     />
                  ) : (
                     <button
                        className="createButton_style"
                        onClick={() => setShowAddDashboard(true)}
                     >
                        <CiCirclePlus className="w-[24px] h-[24px]" />
                        <p className="font-semibold">Add new dashboard</p>
                     </button>
                  )}
               </>
            )}
         </div>
      </div>
   );
};

export default Dashboards;
