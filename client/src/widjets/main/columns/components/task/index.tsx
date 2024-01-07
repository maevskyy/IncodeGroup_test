import React from 'react';
import Card from 'src/shared/UI/card';
import { MdDeleteOutline } from 'react-icons/md';
import { BiTask } from 'react-icons/bi';

type Props = {
   id: string;
   columnId: string;
   title: string;
   description: string;
   deleteHandler: (columnId: string, taskId: string) => void;
};

const Task: React.FC<Props> = ({
   id,
   columnId,
   title,
   description,
   deleteHandler,
}: Props) => {
   return (
      <Card styles="w-[14em] flex flex-col gap-2 hover:cursor-default hover:scale-[1.04] transition-transform ">
         <div className="flex items-center justify-between ">
            <div className="flex items-center gap-3">
               <BiTask className="w-[14px] h-[14px]" />
               <div className="text-sm font-semibold">{title}</div>
            </div>
            <div
               className="p-1 rounded-lg hover:cursor-pointer hover:bg-gray-700 mr-[-5px]"
               onClick={() => deleteHandler(columnId, id)}
            >
               <MdDeleteOutline className="w-[18px] h-[18px]" />
            </div>
         </div>
         {description && (
            <p className="text-xs text-gray-300 break-words">{description}</p>
         )}
      </Card>
   );
};

export default Task;

