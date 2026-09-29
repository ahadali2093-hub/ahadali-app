import { useState } from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <nav className="navbar">
      <div className="nav-container">

        <Link to="/" className="logo" onClick={closeMenu}>
          pak<span>Patrol</span>
        </Link>

        <button
          className="menu-btn"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          ☰
        </button>

        <div className={`nav-links ${menuOpen ? "active" : ""}`}>
          <Link to="/" onClick={closeMenu}>Home</Link>
          <Link to="/about" onClick={closeMenu}>About</Link>
          <Link to="/fuel-prices" onClick={closeMenu}>Fuel Prices</Link>
          <Link to="/stations" onClick={closeMenu}>Stations</Link>
          <Link to="/services" onClick={closeMenu}>Services</Link>
          <Link to="/news" onClick={closeMenu}>News</Link>
          <Link to="/contact" onClick={closeMenu}>Contact</Link>
        </div>

      </div>
    </nav>
  );
}
export default Navbar;