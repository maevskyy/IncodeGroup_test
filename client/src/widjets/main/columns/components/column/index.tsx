import React, { useState } from 'react';
import Card from 'src/shared/UI/card';
import { FaPlus } from 'react-icons/fa6';
import { MdDeleteOutline } from 'react-icons/md';
import { IconType } from 'react-icons';

type Props = {
   Icon: IconType | null;
   title: string;
};

const Column: React.FC<Props> = ({ Icon, title }: Props) => {
   const [columnTitle, setColumnTitle] = useState(title);

   return (
      <section className="flex flex-col gap-5">
         <Card styles="w-[14em] flex items-center justify-between">
            <div className="flex items-center gap-3">
               {Icon && <Icon className="w-[20px] h-[20px]" />}
               <input
                  type="text"
                  value={columnTitle}
                  className={`text-sm font-semibold bg-transparent border-b border-transparent w-2/3 outline-none focus:border-white`}
                  onChange={(e) => setColumnTitle(e.target.value)}
               />
            </div>
            <div className="flex items-center gap-1 mr-[-5px]">
               <div className="p-1 rounded-lg hover:cursor-pointer hover:bg-gray-700">
                  <FaPlus />
               </div>
               <div className="p-1 rounded-lg hover:cursor-pointer hover:bg-gray-700">
                  <MdDeleteOutline className="w-[18px] h-[18px]" />
               </div>
            </div>
         </Card>
      </section>
   );
};

export default Column;
