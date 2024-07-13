import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from './components/Navbar';

function App() {
  return (
   
<div className='bg-blue-100 w-full h-full ' >
      <Navbar />
      <Outlet />
      </div>

  );
}

export default App;
