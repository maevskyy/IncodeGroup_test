import React, { useState } from 'react';

import { defaultColums } from './entities/default.data';
import Column from './components/column';
import AddColumn from './components/column/AddColumn';
import { IColumn } from './entities/types';
import { stateControler } from './entities/stateControler';
import { useDranNDrop } from './entities/useDragNDrop';

const Columns: React.FC = () => {
   const [allColumns, setAllColumns] = useState<IColumn[]>(defaultColums);
   // add\delete column and add\delete task
   const stateControllers = stateControler(setAllColumns);
   // dragLeave, dragOver and so on
   const dragAndDrop = useDranNDrop(setAllColumns);

   return (
      <>
         {allColumns.map((column) => (
            <div
               key={column.id}
               onDragOver={(e) => dragAndDrop.dragOverHandler(e)}
               onDrop={(e) => dragAndDrop.dropCardHandler(e, column)}
            >
               <Column
                  columnFullInfo={column}
                  stateControllers={stateControllers}
                  dragAndDrop={dragAndDrop}
               />
            </div>
         ))}
         <AddColumn addColumn={stateControllers.addNewColumnHandler} />
      </>
   );
};

export default Columns;
