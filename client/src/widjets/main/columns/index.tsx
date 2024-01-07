import React, { useState } from 'react';
import Column from './components/column';
import AddColumn from './components/column/AddColumn';
import { IColumn, ITable } from './entities/types';
import { stateControler } from './entities/stateControler';
import { useDranNDrop } from './entities/useDragNDrop';

type Props = {
   currentTable: ITable;
};

const Columns: React.FC<Props> = ({ currentTable }: Props) => {
   const [allColumns, setAllColumns] = useState<IColumn[]>(
      currentTable.columns,
   );
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
