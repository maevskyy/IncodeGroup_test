import React, { useState } from 'react';
import Card from 'src/shared/UI/card';
import { IColumn, TRDragAndDrop, TStateController } from '../../entities/types';
import AddTaskForm from '../task/form/index';
import ColumnUI from './ColumnUI';
import TaskList from './TaskList';

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
   const { id, title, Icon } = columnFullInfo;
   const [showAddTask, setShowAddTask] = useState(false);

   const { deleteColumnHandler, addNewTaskHandler, deleteTaskHandler } =
      stateControllers;

   return (
      <section className="flex flex-col gap-5">
         <Card styles="w-[14em] flex items-center justify-between">
            <ColumnUI
               columnId={id}
               title={title}
               Icon={Icon}
               deleteColumnHandler={deleteColumnHandler}
               setShowAddTask={setShowAddTask}
            />
         </Card>
         {showAddTask && (
            <AddTaskForm
               columnId={id}
               setIsOpen={setShowAddTask}
               addNewTaskHandler={addNewTaskHandler}
            />
         )}
         <TaskList
            dragAndDrop={dragAndDrop}
            deleteTaskHandler={deleteTaskHandler}
            columnFullInfo={columnFullInfo}
         />
      </section>
   );
};

export default Column;
