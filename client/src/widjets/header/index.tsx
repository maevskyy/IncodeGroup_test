import React, { useState } from 'react';
import Card from 'src/shared/UI/card';
import { CiSearch } from 'react-icons/ci';
import { ECurrentPage } from 'src/shared/types/app.types';
import DashBoardAndInfo from './DashBoardAndInfo';

type Props = {
   currentPage: ECurrentPage;
   setCurrentPage: React.Dispatch<React.SetStateAction<ECurrentPage>>;
   setUploadTableId: React.Dispatch<React.SetStateAction<string>>;
   currentTableInfo: {
      title: string;
      id: string;
   };
};

const Header: React.FC<Props> = ({
   currentPage,
   setCurrentPage,
   setUploadTableId,
   currentTableInfo,
}: Props) => {
   const [tableId, setTableId] = useState('');

   const clickOnLoad = () => {
      setUploadTableId(tableId);
      setTableId('');
   };

   return (
      <header className="flex justify-between border-b pb-5">
         <div className="flex items-center gap-2">
            <Card>
               <div className="flex items-center gap-2">
                  <CiSearch className="w-[20px] h-[20px]" />
                  <input
                     type="text"
                     value={tableId}
                     onChange={(e) => setTableId(e.target.value)}
                     className=" bg-transparent outline-none w-[15em]"
                     placeholder="Enter a board ID here"
                  />
               </div>
            </Card>
            <button className="button_style" onClick={clickOnLoad}>
               Load
            </button>
         </div>

         {currentPage === ECurrentPage.Tables && (
            <DashBoardAndInfo
               currentTableInfo={currentTableInfo}
               setCurrentPage={setCurrentPage}
            />
         )}
      </header>
   );
};

export default Header;
