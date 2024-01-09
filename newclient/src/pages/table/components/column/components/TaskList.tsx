import React from 'react';
import Task from '../../task';
import { TRDragAndDrop, IColumn } from 'src/shared/types/table.types';

type Props = {
   dragAndDrop: TRDragAndDrop;
   deleteTaskHandler: (columnId: string, taskId: string) => void;
   columnFullInfo: IColumn;
};

const TaskList: React.FC<Props> = ({
   dragAndDrop,
   deleteTaskHandler,
   columnFullInfo,
}: Props) => {
   const {
      dragDropHandler,
      dragEndHandler,
      dragLeaveHandler,
      dragOverHandler,
      dragStartHandler,
   } = dragAndDrop;

   return (
      <>
         {columnFullInfo.tasks.map((task) => (
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
                  columnId={columnFullInfo.id}
                  deleteHandler={deleteTaskHandler}
                  {...task}
               />
            </div>
         ))}
      </>
   );
};

export default TaskList;
