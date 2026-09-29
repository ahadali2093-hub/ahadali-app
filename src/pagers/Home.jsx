import { Link } from "react-router-dom";
function Home() {
  return (
    <>
      <section className="hero">

        <div className="hero-content">

          <p className="small-title">
            POWERING PAKISTAN FORWARD
          </p>

          <h1>
            Quality Fuel.
            <br />
            Reliable Service.
          </h1>

          <p>
            Providing quality fuel and convenient services
            for drivers and communities across Pakistan.
          </p>

          <div className="hero-buttons">
            <Link to="/stations" className="btn">
              Find a Station
            </Link>

            <Link to="/fuel-prices" className="btn btn-outline">
              Fuel Prices
            </Link>
          </div>

        </div>

      </section>

      <section className="section">

        <div className="section-heading">
          <p>OUR PRODUCTS</p>
          <h2>Current Fuel Categories</h2>
        </div>

        <div className="price-grid">

          <div className="price-card">
            <div className="icon">⛽</div>
            <h3>Petrol</h3>
            <h2>Rs. 395</h2>
            <p>Per Liter</p>
          </div>

          <div className="price-card">
            <div className="icon">🚛</div>
            <h3>Diesel</h3>
            <h2>Rs. 400</h2>
            <p>Per Liter</p>
          </div>

          <div className="price-card">
            <div className="icon">🛢️</div>
            <h3>Kerosene</h3>
            <h2>Rs. 450</h2>
            <p>Per Liter</p>
          </div>

        </div>

      </section>

      <section className="section light-section">

        <div className="section-heading">
          <p>WHAT WE OFFER</p>
          <h2>Our Services</h2>
        </div>

        <div className="service-grid">

          <div className="service-card">
            <span>⛽</span>
            <h3>Fuel Station</h3>
            <p>Quality fuel for your everyday journey.</p>
          </div>

          <div className="service-card">
            <span>🚗</span>
            <h3>Car Wash</h3>
            <p>Keep your vehicle clean and fresh.</p>
          </div>

          <div className="service-card">
            <span>🔧</span>
            <h3>Oil Change</h3>
            <p>Basic vehicle maintenance services.</p>
          </div>

          <div className="service-card">
            <span>🛞</span>
            <h3>Tyre & Air</h3>
            <p>Tyre pressure and air service.</p>
          </div>

        </div>

      </section>

      <section className="station-banner">

        <div>
          <p>FIND US</p>
          <h2>Find a Petrol Station Near You</h2>
          <p>
            Explore our station locations across Pakistan.
          </p>
        </div>

        <Link to="/stations" className="btn">
          Explore Stations
        </Link>

      </section>
    </>
  );
}
export default Home;