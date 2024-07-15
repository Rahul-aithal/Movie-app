import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from './components/Navbar';

function App() {
  return (
   
<div className='bg-blue-800 w-full h-full pb-1' >
      <Navbar />
      <Outlet />
      </div>

  );
}

export default App;
