import { Link } from "react-router-dom";

function CarCard({ car }) {
  return (
    <div className="card">

      <img
        src={car.image}
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