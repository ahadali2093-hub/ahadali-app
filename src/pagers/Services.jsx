function Services() {

  const services = [
    {
      icon: "⛽",
      title: "Fuel Station",
      text: "Fuel services for everyday drivers."
    },
    {
      icon: "🚗",
      title: "Car Wash",
      text: "Convenient vehicle cleaning services."
    },
    {
      icon: "🔧",
      title: "Oil Change",
      text: "Basic oil and vehicle maintenance."
    },
    {
      icon: "🛞",
      title: "Tyre & Air",
      text: "Air pressure and tyre assistance."
    },
    {
      icon: "⚡",
      title: "EV Charging",
      text: "Charging support for electric vehicles."
    },
    {
      icon: "🛒",
      title: "Convenience Store",
      text: "Everyday products for your journey."
    }
  ];

  return (
    <section className="page">

      <div className="page-header">
        <p>WHAT WE DO</p>
        <h1>Our Services</h1>
      </div>

      <div className="service-grid">

        {services.map((service) => (
          <div className="service-card" key={service.title}>

            <span>{service.icon}</span>

            <h3>{service.title}</h3>

            <p>{service.text}</p>

          </div>
        ))}

      </div>

    </section>
  );
}
export default Services;