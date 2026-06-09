import { Link } from "react-router-dom";
import React from 'react';
import Assets from '../assets/bmw 5 series.png';
import Assets2 from '../assets/audiq7.jpg';
import Assets3 from '../assets/benz.jpg';
import Assets4 from '../assets/rangeroversport.png';

function CarCard({ car }) {
  return (
    <div className="card">

      <img
        src={car.id === 1 ? Assets : car.id === 2 ? Assets2 : car.id === 3 ? Assets3 : Assets4}
        alt={car.name}
      />

      <h2>{car.name}</h2>

      <p>{car.year}</p>

      <h3>{car.price}</h3>

      <Link to={`/car/${car.id}`}>
        <button>View Details</button>
      </Link>

    </div>
  );
}

export default CarCard;