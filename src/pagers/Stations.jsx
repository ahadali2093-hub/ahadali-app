import { useEffect, useState } from "react";
import API from "../api";

function Stations() {
  const [stations, setStations] = useState([]);
  const [city, setCity] = useState("All");

  const loadData = async () => {
    try {
      const response = await API.get("/stations");
      setStations(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    loadData();
  }, []);

  const filteredStations =
    city === "All"
      ? stations
      : stations.filter(
          (station) => station.city === city
        );

  const cities = [
    ...new Set(
      stations.map((station) => station.city)
    ),
  ];

  const editStation = async (station) => {
    try {
      const name = window.prompt(
        "Station name:",
        station.name
      );

      if (!name) return;

      const updatedCity = window.prompt(
        "City:",
        station.city
      );

      if (!updatedCity) return;

      const address = window.prompt(
        "Address:",
        station.address
      );

      if (!address) return;

      await API.put(`/stations/${station._id}`, {
        name,
        city: updatedCity,
        address,
        phone: station.phone,
        openingHours: station.openingHours,
        image: station.image,
      });

      await loadData();

      alert("Station updated successfully!");
    } catch (error) {
      console.log(error);
      alert("Failed to update station.");
    }
  };

  return (
    <section className="page">

      <div className="page-header">
        <p>OUR NETWORK</p>
        <h1>Find a Station</h1>
      </div>

      <div className="station-filter">
        <select
          value={city}
          onChange={(e) => setCity(e.target.value)}
        >
          <option value="All">
            All Cities
          </option>

          {cities.map((cityName) => (
            <option
              key={cityName}
              value={cityName}
            >
              {cityName}
            </option>
          ))}
        </select>
      </div>

      <div className="station-grid">

        {filteredStations.map((station) => (
          <div
            className="station-card"
            key={station._id}
          >

            {station.image ? (
              <img
                src={station.image}
                alt={station.name}
                className="station-real-image"
              />
            ) : (
              <div className="station-icon">
                ⛽
              </div>
            )}

            <h3>{station.name}</h3>

            <p>
              📍 {station.address}
            </p>

            <p>
              📞 {station.phone || "N/A"}
            </p>

            <p>
              🕐 {station.openingHours || "N/A"}
            </p>

            <button
              className="edit-btn"
              onClick={() => editStation(station)}
            >
              Edit
            </button>

          </div>
        ))}

      </div>

    </section>
  );
}

export default Stations;