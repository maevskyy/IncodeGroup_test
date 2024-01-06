import React from 'react';
import Main from 'src/widjets/main';
import './styles/App.css';
import Header from 'src/widjets/header';

const App: React.FC = () => {
   return (
      <div className="text-white h-lvh bg-[#081018] flex justify-center items-center">
         <div className="w-[1100px] mx-5 py-5 h-full overflow-auto flex flex-col ">
            <Header />
            <Main />
         </div>
      </div>
   );
}

export default App;
