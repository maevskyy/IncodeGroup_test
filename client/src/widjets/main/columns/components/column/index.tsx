import React, { useState } from 'react';
import Card from 'src/shared/UI/card';
import { FaPlus } from 'react-icons/fa6';
import { MdDeleteOutline } from 'react-icons/md';
import { IColumn, TRDragAndDrop, TStateController } from '../../entities/types';
import Task from '../task';
import AddTaskForm from '../task/form/index';

type Props = {
   stateControllers: TStateController;
   dragAndDrop: TRDragAndDrop;
   columnFullInfo: IColumn;
};

const Column: React.FC<Props> = ({
   stateControllers,
   dragAndDrop,
   columnFullInfo,
}: Props) => {
   const { id, tasks, title, Icon } = columnFullInfo;
   const [columnTitle, setColumnTitle] = useState(title);
   const [showAddTask, setShowAddTask] = useState(false);

   const { deleteColumnHandler, addNewTaskHandler, deleteTaskHandler } =
      stateControllers;

   const {
      dragDropHandler,
      dragEndHandler,
      dragLeaveHandler,
      dragOverHandler,
      dragStartHandler,
   } = dragAndDrop;

   return (
      <section className="flex flex-col gap-5">
         <Card styles="w-[14em] flex items-center justify-between">
            <div className="flex items-center gap-3">
               {Icon && <Icon className="w-[20px] h-[20px]" />}
               <input
                  type="text"
                  value={columnTitle}
                  className={`text-sm font-semibold bg-transparent border-b pb-1 mt-1 border-transparent w-2/3 outline-none focus:border-white`}
                  onChange={(e) => setColumnTitle(e.target.value)}
               />
            </div>
            <div className="flex items-center gap-1 mr-[-5px]">
               <div
                  className="p-1 rounded-lg hover:cursor-pointer hover:bg-gray-700"
                  onClick={() => setShowAddTask(true)}
               >
                  <FaPlus />
               </div>
               <div
                  className="p-1 rounded-lg hover:cursor-pointer hover:bg-gray-700"
                  onClick={() => deleteColumnHandler(id)}
               >
                  <MdDeleteOutline className="w-[18px] h-[18px]" />
               </div>
            </div>
         </Card>
         {showAddTask && (
            <AddTaskForm
               columnId={id}
               setIsOpen={setShowAddTask}
               addNewTaskHandler={addNewTaskHandler}
            />
         )}
         {tasks.map((task) => (
            <div
               key={task.id}
               draggable={true}
               onDragOver={(e) => dragOverHandler(e)}
               onDragLeave={() => dragLeaveHandler()}
               onDragStart={() => dragStartHandler(columnFullInfo, task)}
               onDragEnd={(e) => dragEndHandler(e)}
               onDrop={(e) => dragDropHandler(e, columnFullInfo, task)}
            >
               <Task
                  columnId={id}
                  deleteHandler={deleteTaskHandler}
                  {...task}
               />
            </div>
         ))}
      </section>
   );
};

export default Column;
