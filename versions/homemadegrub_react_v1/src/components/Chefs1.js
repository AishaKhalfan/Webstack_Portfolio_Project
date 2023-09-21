import React from 'react';
import ChefCard from './ChefCard';

function Chefs() {
  return (
    <section className="chefs">
      <div id="chefs" className="content">
        <h2 className="text-sky-400/100">Our Chefs</h2>
        <p>Meet the talented chefs behind our exquisite dishes and their passion for cooking.</p>
        <div className="chef-grid flex justify-center">
          <ChefCard name="Chef1" specialty="Italian Cuisine" image="chef1.jpg" />
          <ChefCard name="Chef2" specialty="French Cuisine" image="chef2.jpg" />
          <ChefCard name="Chef3" specialty="Japanese Cuisine" image="chef3.jpg" />
        </div>
      </div>
    </section>
  );
}

export default Chefs;
