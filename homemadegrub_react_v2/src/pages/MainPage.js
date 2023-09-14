import React from 'react';
import { useSelector } from 'react-redux';
import Home from '../components/Home';
import About from '../components/About';
import Dishes from '../components/Dishes';
import Chefs from '../components/Chefs';
import JoinUs from '../components/JoinUs';
import UserContent from '../components/UserContent';

function MainPage() {
  const user = useSelector((state) => state.user);
  //console.log(user);
  const error = useSelector((state) => state.error);
  return (
    <div>
        <Home />
        <About />
        {user ? <UserContent user={user} /> : <JoinUs />}
        {error? <div className='min-h-screen bg-white'>Error logging in</div> : <div></div>}
        <Dishes />
        <Chefs />
    </div>
  );
}

export default MainPage;
