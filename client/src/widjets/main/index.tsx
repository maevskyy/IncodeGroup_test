import React, { useState } from 'react';
import './style.css';
import Columns from './columns';
import Dashboards from './dashboards';
import { ITable } from './columns/entities/types';
import { defaultColums } from './columns/entities/default.data';
import { ECurrentPage } from 'src/shared/types/app.types';

type Props = {
   currentPage: ECurrentPage;
   setCurrentPage: React.Dispatch<React.SetStateAction<ECurrentPage>>;
};

const Main: React.FC<Props> = ({ currentPage, setCurrentPage }: Props) => {
   const [allTables, setAllTables] = useState<ITable[]>([
      {
         id: String(new Date()),
         title: 'Default dashboard',
         columns: defaultColums,
      },
   ]);
   //deafult table
   const [currentTable, setCurrentTable] = useState<ITable>(allTables[0]);
   const tableAndPageHandler = (table: ITable) => {
      setCurrentTable(table);
      setCurrentPage(ECurrentPage.Tables);
   };

   const deleteTableHandler = (tableId: string) => {
      setAllTables((prevTables) =>
         prevTables.filter((table) => table.id !== tableId),
      );
   };

   const addTableHandler = (table: ITable) =>
      setAllTables((prevTables) => [...prevTables, table]);

   return (
      <main className="flex flex-1 gap-10 px-5 my-5 overflow-auto scrollbar_custom">
         {currentPage === ECurrentPage.Dashboards ? (
            <Dashboards
               allTables={allTables}
               tableAndPageHandler={tableAndPageHandler}
               deleteTableHandler={deleteTableHandler}
               addTableHandler={addTableHandler}
            />
         ) : (
            <Columns currentTable={currentTable} setAllTables={setAllTables} />
         )}
      </main>
   );
};

export default Main;
