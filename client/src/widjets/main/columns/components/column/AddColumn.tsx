import React, { useState } from 'react';
import { CiCirclePlus } from 'react-icons/ci';
import { IColumn } from '../../entities/types';
import { FcPicture } from 'react-icons/fc';
import AddColumnForm from './AddColumnForm';

type Props = {
   addColumn: (newColumn: IColumn) => void;
};

const AddColumn: React.FC<Props> = ({ addColumn }: Props) => {
   const [showAddingForm, setShowAddingForm] = useState(false);
   const [columnTitle, setColumnTitle] = useState('');

   // creating new column
   const add = () => {
      if (columnTitle === '') {
         return;
      }
      addColumn({
         id: String(new Date()),
         title: columnTitle,
         Icon: FcPicture,
         tasks: [],
      });
      setColumnTitle('');
   };

   return (
      <div className="flex gap-10">
         {showAddingForm ? (
            <AddColumnForm
               title={columnTitle}
               setTitle={setColumnTitle}
               setShow={setShowAddingForm}
               createColumn={add}
            />
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
