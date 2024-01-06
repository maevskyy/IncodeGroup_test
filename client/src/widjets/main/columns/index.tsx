import React, { useState } from 'react';

import { defaultColums } from './entities/default.data';
import Column from './components/column';
import AddColumn from './components/column/AddColumn';
import { IColumn, ITask } from './entities/types';

const Columns = () => {
   const [allColumns, setAllColumns] = useState<IColumn[]>(defaultColums);

   const addNewColumnHandler = (newColumn: IColumn) =>
      setAllColumns((prevColumns) => [...prevColumns, newColumn]);

   const deleteColumnHanlder = (columnId: string) =>
      setAllColumns((prevColumns) =>
         prevColumns.filter((column) => column.id !== columnId),
      );

   const addNewTaskHandler = (columnId: string, task: ITask) => {
      setAllColumns((prevColumns) =>
         prevColumns.map((column) => {
            if (column.id === columnId) {
               return {
                  ...column,
                  tasks: [...column.tasks, task],
               };
            }
            return column;
         }),
      );
   };

   const deleteTaskHandler = (columnId: string, taskId: string) => {
      setAllColumns((prevColumns) =>
         prevColumns.map((column) => {
            if (column.id === columnId) {
               return {
                  ...column,
                  tasks: column.tasks.filter((task) => task.id !== taskId),
               };
            }
            return column;
         }),
      );
   };

   return (
      <>
         {allColumns.map((column) => (
            <Column
               key={column.id}
               id={column.id}
               title={column.title}
               Icon={column.Icon}
               tasks={column.tasks}
               deleteColumnHandler={deleteColumnHanlder}
               addNewTaskHandler={addNewTaskHandler}
               deleteTaskHandler={deleteTaskHandler}
            />
         ))}
         <AddColumn addColumn={addNewColumnHandler} />
      </>
   );
};

export default Columns;
