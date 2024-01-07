import React from 'react';
import Card from 'src/shared/UI/card';
import { CiSearch } from 'react-icons/ci';
import { ECurrentPage } from 'src/shared/types/app.types';

type Props = {
   currentPage: ECurrentPage;
   setCurrentPage: React.Dispatch<React.SetStateAction<ECurrentPage>>;
};

const Header: React.FC<Props> = ({ currentPage, setCurrentPage }: Props) => {
   return (
      <header className="flex justify-between border-b pb-5">
         <div className="flex items-center gap-2">
            <Card>
               <div className="flex items-center gap-2">
                  <CiSearch className="w-[20px] h-[20px]" />
                  <input
                     type="text"
                     className=" bg-transparent outline-none w-[15em]"
                     placeholder="Enter a board ID here"
                  />
               </div>
            </Card>
            <button className="button_style">Load</button>
         </div>
         {currentPage === ECurrentPage.Tables && (
            <button
               className="button_style"
               onClick={() => setCurrentPage(ECurrentPage.Dashboards)}
            >
               Dashboards
            </button>
         )}
      </header>
   );
};

export default Header;
