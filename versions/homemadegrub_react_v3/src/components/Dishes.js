import React, { useState } from 'react';
import slide_2 from '../images/slide_2.jpg';
import slide_3 from '../images/slide_3.jpg';
import slide_1 from '../images/slide_1.jpg';
import swahili2  from '../images/swahili2.jpg';
import res_img_8 from '../images/res_img_8.jpg';
import kenyan1 from '../images/kenyan1.jpg';
import classes from '../pages/Dishes.module.css';

const dishes = [
  {
    imageUrl: slide_2,
    alt: 'slide_2',
    name: 'Chicken Pot Pie',
  },
  {
    imageUrl: slide_3,
    alt: 'slide_3',
    name: 'Colorful pasta',
  },
  {
    imageUrl: slide_1,
    alt: 'slide_1',
    name: 'Vegetable Stir-Fry',
  },
  {
    imageUrl: swahili2,
    alt: 'swahili2',
    name: 'Colorful pasta',
  },
  {
    imageUrl: res_img_8,
    alt: 'res_img_8',
    name: 'Colorful pasta',
  },
  {
    imageUrl: kenyan1,
    alt: 'kenyan1',
    name: 'Colorful pasta',
  },
];

function Dishes() {
  const [popUpVisible, setPopUpVisible] = useState(false);
  const [selectedDish, setSelectedDish] = useState(null);

  const openPopUp = (dish) => {
    setSelectedDish(dish);
    setPopUpVisible(true);
  };

  const closePopUp = () => {
    setSelectedDish(null);
    setPopUpVisible(false);
  };

  return (
    <section className="dishes px-16 py-6 bg-yellow-100 md:col-span-2">
      <div id="dishes" className="content">
        <h2 className="text-black font-bold">Our Dishes</h2>
        <p className="text-black">
          Discover our mouthwatering menu filled with a variety of culinary delights from around the world.
        </p>
        <div className="grid grid-cols-3 gap-6 flex flex-row">
          {dishes.map((dish, index) => (
            <div key={index}>
              <img
                src={dish.imageUrl}
                alt={dish.alt}
                className="rounded-lg hover:opacity-50 transition-opacity duration-300 cursor-pointer"
                onClick={() => openPopUp(dish)}
              />
              <p className="text-gray-700 mt-2">{dish.name}</p>
            </div>
          ))}
        </div>
      </div>

      {popUpVisible && (
        <div className='pop-up-overlay'>
        <div className="pop-up">
          <button onClick={closePopUp} className="close-button absolute top-0 right-0 m-2 text-gray-600 hover:text-gray-800">
            &times;
          </button>
          <img
            src={selectedDish.imageUrl}
            alt={selectedDish.alt}
            className="rounded-lg"
          />
          <h3 className="text-black font-bold mt-2">{selectedDish.name}</h3>
          <p className="text-gray-700 mt-2">{selectedDish.description}</p>
        </div>
        </div>
      )}
      </section>
  );
}

export default Dishes;
