import React, { useState } from 'react';
import { CiCirclePlus } from 'react-icons/ci';
import { IColumn } from '../../entities/types';
import { IoIosCloseCircleOutline } from 'react-icons/io';
import { FcPicture } from 'react-icons/fc';
import Card from 'src/shared/UI/card';
import { FaPlus } from 'react-icons/fa6';

type Props = {
   addColumn: (newColumn: IColumn) => void;
};

const AddColumn: React.FC<Props> = ({ addColumn }: Props) => {
   const [showAddingForm, setShowAddingForm] = useState(true);
   const [columnTitle, setColumnTitle] = useState('');

   const add = () => {
      if (columnTitle === '') {
         return;
      }
      addColumn({
         id: String(new Date()),
         title: columnTitle,
         Icon: null,
         tasks: [],
      });
      setColumnTitle('');
   };

   return (
      <div className="flex gap-10">
         {showAddingForm ? (
            <Card styles="h-fit w-[14em] flex items-center justify-between">
               <form className="flex items-center gap-3">
                  <FcPicture className="w-[24px] h-[24px]" />
                  <input
                     type="text"
                     className="text-sm font-semibold bg-transparent border-b w-2/3 outline-none border-white"
                     value={columnTitle}
                     placeholder="Column title"
                     onChange={(e) => setColumnTitle(e.target.value)}
                  />
               </form>
               <div className="flex items-center gap-1 mr-[-5px]" onClick={add}>
                  <div className="p-1 rounded-lg hover:cursor-pointer hover:bg-gray-700">
                     <FaPlus />
                  </div>
                  <div
                     onClick={() => setShowAddingForm(false)}
                     className="p-1 rounded-lg hover:cursor-pointer hover:bg-gray-700"
                  >
                     <IoIosCloseCircleOutline className="w-[18px] h-[18px]" />
                  </div>
               </div>
            </Card>
         ) : (
            <button
               onClick={() => setShowAddingForm(true)}
               className="flex gap-3 w-[14em] items-center border h-fit rounded-lg px-4 py-2 border-gray-600 text-gray-400 hover:text-white hover:border-white transition-colors cursor-pointer shadow-md"
            >
               <CiCirclePlus className="w-[24px] h-[24px]" />
               <p className="text-sm font-semibold">Add new column</p>
            </button>
         )}
      </div>
   );
};

export default AddColumn;
