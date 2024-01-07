import React, { useState } from 'react';
import AddTaskInput from './AddTaskInput';
import AddTaskTextarea from './AddTaskTextarea';
import AddTaskButtons from './AddTaskButtons';
import { ITask } from '../../../entities/types';
import { generateId } from 'src/shared/helpers/idGenerator';

type Props = {
   columnId: string;
   setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
   addNewTaskHandler: (columnId: string, task: ITask) => void;
};

const AddTaskForm = ({ setIsOpen, addNewTaskHandler, columnId }: Props) => {
   const [highlighting, setHighLightings] = useState(false);

   const taskDataProto = {
      title: '',
      description: '',
   };

   const [taskData, setTaskData] = useState(taskDataProto);

   const formStyles = `flex flex-col gap-3 w-[14em] border
   h-fit rounded-lg px-4 py-4 border-gray-600 text-gray-400
  transition-colors shadow-md hover:cursor-default group `;

   const createTask = () => {
      if (taskData.title === '') {
         return;
      }
      addNewTaskHandler(columnId, {
         id: generateId(),
         title: taskData.title,
         description: taskData.description,
      });
      setIsOpen(false);
      setTaskData(taskDataProto);
   };

   return (
      <div className="flex flex-col gap-5">
         <div
            className={` ${formStyles} ${
               highlighting ? 'hover:text-white hover:border-white' : ''
            }`}
            onMouseEnter={() => setHighLightings(true)}
            onMouseLeave={() => setHighLightings(false)}
         >
            <AddTaskInput value={taskData.title} handler={setTaskData} />
            <AddTaskTextarea
               value={taskData.description}
               handler={setTaskData}
            />
         </div>
         <AddTaskButtons setIsOpen={setIsOpen} createTask={createTask} />
      </div>
   );
};

export default AddTaskForm;
