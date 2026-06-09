import { Link } from "react-router-dom";
import { IoCarSport } from "react-icons/io5";

function Navbar() {
  return (
    <nav className="navbar">

      <h1 className="logo">
       <span><IoCarSport /></span> Auto<span>Show</span>
        
      </h1>

      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/inventory">Inventory</Link></li>
        <li><Link to="/services">Services</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/contact">Contact</Link></li>
      </ul>
      <Link to="/test-drive">
        <button className="test-drive-btn">Book Test Drive</button>
      </Link>

    </nav>
  );
}

export default Navbar;