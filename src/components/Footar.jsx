import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="footer">

      <div className="footer-container">

        <div>
          <h2>Pak<span>patrol</span></h2>
          <p>
            Quality fuel and reliable service for communities
            across Pakistan.
          </p>
        </div>

        <div>
          <h3>Quick Links</h3>

          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/stations">Stations</Link>
          <Link to="/services">Services</Link>
          <Link to="/contact">Contact</Link>
        </div>

        <div>
          <h3>Contact</h3>
          <p>📞 +92 3156344159</p>
          <p>✉ maherahad49@gamil.com</p>
          <p>📍 Islamabad, Pakistan</p>
        </div>

      </div>

      <div className="copyright">
        © 2026 Pakpatrol. All Rights Reserved.
      </div>

    </footer>
  );
}
export default Footer;