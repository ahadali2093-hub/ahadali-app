import { useState } from "react";
import API from "../api";

function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [submitted, setSubmitted] =
    useState(false);

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await API.post("/contacts", form);

      setForm({
        name: "",
        email: "",
        subject: "",
        message: "",
      });

      setSubmitted(true);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <section className="page">

      <div className="page-header">
        <p>GET IN TOUCH</p>
        <h1>Contact Us</h1>
      </div>

      <div className="contact-container">

        <div className="contact-info">
          <h2>Let's Talk</h2>

          <p>
            Have a question or feedback?
            Send us a message.
          </p>

          <div className="contact-item">
            <span>📞</span>
            <div>
              <h3>Phone</h3>
              <p>+92 315 3644159</p>
            </div>
          </div>

          <div className="contact-item">
            <span>✉</span>
            <div>
              <h3>Email</h3>
              <p>maherahad49@gmail.com</p>
            </div>
          </div>

        </div>

        <form
          className="contact-form"
          onSubmit={handleSubmit}
        >

          <input
            name="name"
            placeholder="Your Name"
            value={form.name}
            onChange={handleChange}
            required
          />

          <input
            name="email"
            type="email"
            placeholder="Your Email"
            value={form.email}
            onChange={handleChange}
            required
          />

          <input
            name="subject"
            placeholder="Subject"
            value={form.subject}
            onChange={handleChange}
            required
          />

          <textarea
            name="message"
            rows="6"
            placeholder="Your Message"
            value={form.message}
            onChange={handleChange}
            required
          />

          <button className="btn">
            Send Message
          </button>

          {submitted && (
            <p className="success">
              Message sent successfully!
            </p>
          )}

        </form>

      </div>

    </section>
  );
}

export default Contact;