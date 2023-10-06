import React from 'react';
import Home from '../components/Home';
import About from '../components/About';
import Dishes from '../components/Dishes';
import Chefs from '../components/Chefs';
import JoinUs from '../components/JoinUs';
import AppContainer from '../components/AppContainer';

function MainPage() {
  return (
    <div>
        <Home />
        <About />
        <JoinUs/>
        <Dishes />
        <Chefs />
        <AppContainer />
    </div>
  );
}

export default MainPage;
