import React from 'react';
import './style.css';
import Columns from './columns';

const Main = () => {
   return (
      <main className="flex flex-1 gap-10 mx-5 py-5 overflow-auto scrollbar_custom">
         <Columns />
      </main>
   );
};

export default Main;
