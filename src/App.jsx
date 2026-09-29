import { Routes, Route } from "react-router-dom";

import Navbar from './components/Navbar'
import Footer from './components/Footar'
import ProtectedRoute from './components/ProtectedRoute'

import Home from './pagers/Home';
import About from './pagers/About';
import FuelPrices from './pagers/FuelPrice';
import Stations from './pagers/Stations';
import Services from './pagers/Services';
import News from './pagers/News';
import Contact from './pagers/Contact';

import AdminLogin from './pagers/AdminLogin';
import AdminDashboard from './pagers/AdminDashboard';

function App() {
  return (
    <>
      <Navbar />

      <main>
        <Routes>

          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route
            path="/fuel-prices"
            element={<FuelPrices />}
          />
          <Route
            path="/stations"
            element={<Stations />}
          />
          <Route
            path="/services"
            element={<Services />}
          />
          <Route
            path="/news"
            element={<News />}
          />
          <Route
            path="/contact"
            element={<Contact />}
          />

          <Route
            path="/admin/login"
            element={<AdminLogin />}
          />

          <Route
            path="/admin"
            element={ <ProtectedRoute>
                <AdminDashboard />
              </ProtectedRoute>}
          />

        </Routes>
      </main>

      <Footer />
    </>
  );
}

export default App;