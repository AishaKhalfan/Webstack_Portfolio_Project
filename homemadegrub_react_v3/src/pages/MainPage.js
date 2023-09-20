import React from 'react';
import Home from '../components/Home';
import Product from '../components/Product';
import About from '../components/About';
import JoinUs from '../components/JoinUs';
import { useSelector } from 'react-redux';
// import Dishes from '../components/Dishes';
// import Chefs from '../components/Chefs';

function MainPage() {
  const user = useSelector((state) => state.auth.user);
  var renderJoinUs = null;
  var renderProducts = null;

  if (user.id == null){
    renderJoinUs = <JoinUs />;
  } else {
    renderProducts = <Product />
  }
  console.log('user', user);

  return (
    <div>
        <Home />
        {renderJoinUs}
        {renderProducts}
        <About />
    </div>
  );
}

export default MainPage;
