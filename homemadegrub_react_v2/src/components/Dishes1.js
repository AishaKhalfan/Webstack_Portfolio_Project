import React, { useState } from 'react';
import slide_2 from '../images/slide_2.jpg';


function Dishes() {
  // Define state to track whether additional information is shown
  const [showInfo, setShowInfo] = useState(false);

  // Function to toggle the additional information display
  const toggleInfo = () => {
    setShowInfo(!showInfo);
  };

  return (
    <div>
      <button className="mr-4 elevation-12" onClick={toggleInfo}>
        <img
          src={slide_2}
          alt="slide_2"
          className="rounded-lg hover:opacity-50 transition-opacity duration-300"
        />
        <p className="text-gray-700 mt-2">Chicken Pot Pie</p>
      </button>
      
      {showInfo && (
        <div>
          <p>This is a delicious chicken pot pie with a flaky crust.</p>
          <p>Ingredients: Chicken, vegetables, pastry.</p>
        </div>
      )}
    </div>
  );
}

export default Dishes;
