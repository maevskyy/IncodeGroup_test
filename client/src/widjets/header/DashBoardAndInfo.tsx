import React from 'react';
import { ECurrentPage } from 'src/shared/types/app.types';

type Props = {
   currentTableInfo: { title: string; id: string };
   setCurrentPage: React.Dispatch<React.SetStateAction<ECurrentPage>>;
};

const DashBoardAndInfo = ({ currentTableInfo, setCurrentPage }: Props) => {
   return (
      <div className="flex items-center gap-10">
         <div className="flex items-center gap-5">
            <h4>
               Table:{' '}
               <span className="font-semibold text-lg">
                  {currentTableInfo.title}
               </span>
            </h4>
            <p>
               Id:{' '}
               <span className="font-semibold text-lg">
                  {currentTableInfo.id}
               </span>
            </p>
         </div>
         <button
            className="button_style"
            onClick={() => setCurrentPage(ECurrentPage.Dashboards)}
         >
            Dashboards
         </button>
      </div>
   );
};

export default DashBoardAndInfo;
