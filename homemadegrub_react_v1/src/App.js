import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import {MainPageRoutes, LoginPageRoutes, OrderPageRoutes } from './pages';

function App() {
  return (
      <div className="App">
        <Header />
        <div className="px-6 h-[calc(100vh-72px)] overflow-y-scroll hide-scrollbar flex xl:flex-row flex-col-reverse">
          <div className="h-screen">
            <Routes>
              <Route path="/" element={<MainPageRoutes />} />
              <Route path="/login" element={<LoginPageRoutes />} />
              <Route path="/order" element={<OrderPageRoutes />} />
            </Routes>
          </div>
        </div>
      </div>
  );
}

export default App;
