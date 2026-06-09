import cars from "../data/cars";
import CarCard from "./CarCard";

function FeaturedCars() {
  return (
    <section>

      <h1>Featured Cars</h1>

      <div className="car-grid">

        {cars.map((car) => (
          <CarCard
            key={car.id}
            car={car}
          />
        ))}

      </div>

    </section>
  );
}

export default FeaturedCars;