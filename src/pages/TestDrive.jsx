import { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
function TestDrive() {

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    car: "",
    date: "",
    time: ""
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    alert(`
Test Drive Booked Successfully!

Name: ${formData.name}
Car: ${formData.car}
Date: ${formData.date}
Time: ${formData.time}
    `);

    setFormData({
      name: "",
      email: "",
      phone: "",
      car: "",
      date: "",
      time: ""
    });
  };

  return (
    <>
      <Navbar />

      <section className="test-banner">
        <h1>Book a Test Drive</h1>
        <p>
          Experience your dream car before purchasing.
        </p>
      </section>

      <section className="test-drive-container">

        <div className="test-info">

          <h2>Why Book a Test Drive?</h2>

          <ul>
            <li>✓ Experience vehicle performance</li>
            <li>✓ Check comfort and features</li>
            <li>✓ Explore advanced technology</li>
            <li>✓ Compare different models</li>
            <li>✓ Get expert guidance</li>
          </ul>

          <img
            src="src/assets/showCar.png"
            alt="Test Drive"
            className="test-image"
          />

        </div>

        <form
          className="test-form"
          onSubmit={handleSubmit}
        >

          <h2>Schedule Appointment</h2>

          <input
            type="text"
            name="name"
            placeholder="Full Name"
            value={formData.name}
            onChange={handleChange}
            required
          />

          <input
            type="email"
            name="email"
            placeholder="Email Address"
            value={formData.email}
            onChange={handleChange}
            required
          />

          <input
            type="text"
            name="phone"
            placeholder="Phone Number"
            value={formData.phone}
            onChange={handleChange}
            required
          />

          <select
            name="car"
            value={formData.car}
            onChange={handleChange}
            required
          >
            <option value="">Select Car</option>
            <option>BMW 5 Series</option>
            <option>Audi Q7</option>
            <option>Mercedes E-Class</option>
            <option>Range Rover Sport</option>
          </select>

          <input
            type="date"
            name="date"
            value={formData.date}
            onChange={handleChange}
            required
          />

          <input
            type="time"
            name="time"
            value={formData.time}
            onChange={handleChange}
            required
          />

          <button type="submit">
            Confirm Test Drive
          </button>

        </form>

      </section>
      <Footer />
    </>
  );
}

export default TestDrive;