import React, { useState } from 'react';
import Header from 'src/widjets/header';
import Main from 'src/widjets/main';
import { ECurrentPage } from 'src/shared/types/app.types';
import './styles/App.css';

const App: React.FC = () => {
   const [currentPage, setCurrentPage] = useState<ECurrentPage>(
      ECurrentPage.Dashboards,
   );

   return (
      <div className="text-white h-lvh bg-[#081018] flex justify-center items-center">
         <div className="w-[1100px] mx-5 py-5 h-full overflow-auto flex flex-col ">
            <Header currentPage={currentPage} setCurrentPage={setCurrentPage} />
            <Main currentPage={currentPage} setCurrentPage={setCurrentPage} />
         </div>
      </div>
   );
};

export default App;
