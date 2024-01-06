import React, { useState } from 'react';

import { defaultColums } from './entities/default.data';
import Column from './components/column';
import AddColumn from './components/column/AddColumn';
import { IColumn } from './entities/types';

const Columns = () => {
   const [allColumns, setAllColumns] = useState<IColumn[]>(defaultColums);

   const addNewColumnHandler = (newColumn: IColumn) =>
      setAllColumns((prevColumns) => [...prevColumns, newColumn]);

   const deleteColumnHanlder = (columnId: string) =>
      setAllColumns((prevColumns) =>
         prevColumns.filter((column) => column.id !== columnId),
      );

   return (
      <>
         {allColumns.map((column) => (
            <Column
               key={column.id}
               id={column.id}
               title={column.title}
               Icon={column.Icon}
               deleteColumnHandler={deleteColumnHanlder}
            />
         ))}
         <AddColumn addColumn={addNewColumnHandler} />
      </>
   );
};

export default Columns;
