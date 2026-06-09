import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Inventory from "./pages/Inventory";
import Services from "./pages/Services";
import About from "./pages/About";
import Contact from "./pages/Contact";
import CarDetails from "./pages/CarDetails";
import TestDrive from "./pages/TestDrive";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/inventory" element={<Inventory />} />
        <Route path="/services" element={<Services />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/car/:id" element={<CarDetails />} />
        <Route path="/test-drive" element={<TestDrive />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;