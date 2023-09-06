import React from 'react';
import { Routes, Route } from 'react-router-dom';
import About from '../components/About';
import Dishes from '../components/Dishes';
import Chefs from '../components/Chefs';

function MainPage() {
  return (
    <div>
        <About />
        <Dishes />
        <Chefs />
    </div>
  );
}

// Define route configuration for MainPage
function MainPageRoutes() {
    return (
      <Routes>
        <Route path="/" element={<MainPage />} />
      </Routes>
    );
  }
  
export default MainPageRoutes;
