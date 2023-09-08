import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import {MainPage, LoginPage, OrderPage } from './pages';

function App() {
  return (
      <div className="App">
        <Router>
          <Header />
          <div className="px-6 h-[calc(100vh-72px)] overflow-y-scroll hide-scrollbar flex xl:flex-row flex-col-reverse">
            <div className="h-screen">
              <Routes>
                <Route path="/" element={<MainPage />} />
                <Route path="/login" element={<LoginPage />} />
                <Route path="/order" element={<OrderPage />} />
              </Routes>
            </div>
          </div>
        </Router>
      </div>
  );
}

export default App;
