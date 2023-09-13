import React from 'react';
import { Link } from 'react-router-dom';
// import clientIcon from '../images/client-icon.png';
// import chefIcon from '../images/chef-icon.png';
// import deliveryIcon from '../images/delivery-icon.png';
import delivery from "../images/delivery.jpg";
import chef4 from "../images/chef4.png";
import delivery3 from "../images/delivery3.png";

function JoinUs() {
  return (
    <section id="join-us" className="join-us bg-gray-200 mx-auto mt-8 p-8 mb-4 min-h-screen">
      <div className="container mx-auto " data-aos="fade-up">
        <div className="section-title text-center">
          <h2 className="text-3xl text-black font-bold">Join Us</h2>
        </div>

        <div className="flex flex-wrap justify-center">
          <Link to="/ClientSignUp" className="w-1/3 px-2 py-2 text-center">
            <img className="w-20 h-20 rounded-full object-cover border-0 mx-auto" src={delivery3} alt="Client" />
            <p className="text-lg font-bold mt-2">Get the best Client experience</p>
            Experience the best your neighborhood has to offer, all in one site.
            Sign up to start ordering from the best home chefs in your area.
          </Link>


          <Link to="/ChefSignUp" className="w-1/3 px-2 py-2 text-center">
            <img className="w-20 h-20 rounded-full object-cover border-0 mx-auto" src={chef4} alt="Chef" />
            <p className="text-lg font-bold mt-2">Become a Home Chef</p>
            Join our community of talented chefs and turn your passion for
            cooking into a rewarding opportunity.<br />
            Sign up to start selling your dishes.
          </Link>

          <Link to="/DeliverySignUp" className="w-1/3 px-2 py-2 text-center">
            <img className="w-20 h-20 rounded-full object-cover border-0 mx-auto" src={delivery} alt="Delivery" />
            <p className="text-lg font-bold mt-2">Deliver with Confidence</p>
            "Unleash Your Earning Potential!"<br />
            Are you ready to turn the ignition on a rewarding career? 
            Join us as a delivery driver and accelerate your income.<br /> 
            Sign up to start delivering food to our clients.
          </Link>
        </div>
      </div>
    </section>
  );
}

export default JoinUs;