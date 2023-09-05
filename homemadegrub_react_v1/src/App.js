import React from 'react';
import Header from './components/Header';
import About from './components/About';
import Dishes from './components/Dishes';
import Chefs from './components/Chefs';

function App() {
  return (
    <div className="App">
      <Header />
      <About />
      <Dishes />
      <Chefs />
    </div>
  );
}

export default App;
