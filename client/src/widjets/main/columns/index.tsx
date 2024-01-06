import React, { useState } from 'react';

import { defaultColums } from './entities/default.data';
import Column from './components/column';
import AddColumn from './components/column/AddColumn';
import { IColumn } from './entities/types';

const Columns = () => {
   const [allColumns, setAllColumns] = useState<IColumn[]>(defaultColums);

   const addNewColumnHandler = (newColumn: IColumn) =>
      setAllColumns((prevColumns) => [...prevColumns, newColumn]);

   return (
      <>
         {allColumns.map((column) => (
            <Column key={column.id} title={column.title} Icon={column.Icon} />
         ))}
         <AddColumn addColumn={addNewColumnHandler} />
      </>
   );
};

export default Columns;
