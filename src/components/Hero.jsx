import React from 'react';
import Assets from '../assets/showCar.png';
function Hero() {
  return (
    <section className="hero">

      <div className="hero-content">

        <h4>FIND THE PERFECT CAR</h4>

        <h1>
          DRIVE YOUR <span>DREAM CAR</span>
        </h1>

        <p>
          Explore our wide range of premium cars.
        </p>

        <div className="hero-btns">
          <button>Browse Inventory</button>
          <button>Learn More</button>
        </div>

      </div>

      <img
        src={Assets}
        alt=""
      />

    </section>
  );
}

export default Hero;