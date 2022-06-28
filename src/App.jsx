import React from 'react';
import { Route, Routes } from 'react-router-dom';

import Admin from './pages/Admin';

export default function App() {
  return (
    <div className='app'>
      <Routes>
        {/* 首页 */}
        <Route path='/*' element={<Admin/>}></Route>   
      </Routes>
    </div>
  )
}
