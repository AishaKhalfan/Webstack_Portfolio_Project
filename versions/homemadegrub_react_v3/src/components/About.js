import React from "react";
import delivery from "../images/delivery.jpg";
import chef4 from "../images/chef4.png";
import delivery3 from "../images/delivery3.png";

function About() {
  return (
    <section id="about" class="about mb-4 bg-white-400 mx-auto">
      <div class="container mx-auto" data-aos="fade-up">
        <div class="section-title text-center">
          <h2 class="text-3xl text-black font-bold">About Us</h2>
        </div>

        <div class="container mx-auto mt-8">
          <div class="mx-4">
            <div class="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              <div class="bg-white p-4 shadow-md rounded-lg border border-transparent">
                <div class="text-2xl text-indigo-600 mb-2">
                  <i class="fas fa-heart"></i>
                </div>
                <h3 class="text-lg font-bold mb-2">About Us</h3>
                <p>
                  A pioneering web app poised to redefine the food delivery
                  landscape. Our mission is simple yet transformative: to bridge
                  the gap between food enthusiasts and talented home cooks,
                  ushering in a new era of wholesome dining experiences.
                </p>
              </div>

              <div class="bg-white p-4 shadow-md rounded-lg border border-transparent">
                <div class="text-2xl text-green-600 mb-2">
                  <i class="fas fa-star"></i>
                </div>
                <h3 class="text-lg font-bold mb-2">Aim</h3>
                <p>
                  Our aim is to revolutionize the food delivery industry by
                  connecting food enthusiasts with talented home cooks, allowing
                  users to order wholesome home-cooked meals and have them
                  conveniently delivered to their doorstep.
                </p>
              </div>

              <div class="bg-white p-4 shadow-md rounded-lg border border-transparent">
                <div class="text-2xl text-blue-600 mb-2">
                  <i class="fas fa-certificate"></i>
                </div>
                <h3 class="text-lg font-bold mb-2">Goal</h3>
                <p>
                  Our vision is to be the leading food delivery platform in the
                  world, providing a seamless and delightful experience for both
                  food enthusiasts and home cooks.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
