import React, { useState } from 'react';
import { FaPlus } from 'react-icons/fa6';
import { IoIosCloseCircleOutline } from 'react-icons/io';
import Card from 'src/shared/UI/card';
import { ITable } from '../../columns/entities/types';
import { defaultColums } from '../../columns/entities/default.data';
import { generateId } from 'src/shared/helpers/idGenerator';

type Props = {
   setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
   addTableHandler: (table: ITable) => void;
};

const AddDashboardForm: React.FC<Props> = ({
   setIsOpen,
   addTableHandler,
}: Props) => {
   const mockProtoTable: ITable = {
      id: generateId(),
      title: '',
      columns: defaultColums,
   };

   const [protoTable, setProtoTable] = useState<ITable>(mockProtoTable);

   const createTable = () => {
      if (protoTable.title === '') {
         return;
      }
      setIsOpen(false);
      addTableHandler(protoTable);
      setProtoTable(mockProtoTable);
   };

   return (
      <Card styles=" w-full flex items-center justify-between">
         <form className="flex items-center gap-3">
            <input
               type="text"
               className="text-sm font-semibold bg-transparent pb-1 mt-1  flex-1 border-b w-2/3 outline-none border-white"
               value={protoTable.title}
               placeholder="Dashboard title"
               onChange={(e) =>
                  setProtoTable((prevTable) => ({
                     ...prevTable,
                     title: e.target.value,
                  }))
               }
            />
         </form>
         <div className="flex items-center gap-1 mr-[-5px]">
            <div
               className="p-1 rounded-lg hover:cursor-pointer hover:bg-gray-700"
               onClick={createTable}
            >
               <FaPlus />
            </div>
            <div
               className="p-1 rounded-lg hover:cursor-pointer hover:bg-gray-700"
               onClick={() => setIsOpen(false)}
            >
               <IoIosCloseCircleOutline className="w-[18px] h-[18px]" />
            </div>
         </div>
      </Card>
   );
};

export default AddDashboardForm;
