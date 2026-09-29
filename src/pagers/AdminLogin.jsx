import { useState } from "react";
import { useNavigate } from "react-router-dom";
import API from "../api";

function AdminLogin() {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const [error, setError] = useState("");

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setError("");

      const response = await API.post(
        "/auth/login",
        form
      );

      localStorage.setItem(
        "adminToken",
        response.data.token
      );

      localStorage.setItem(
        "admin",
        JSON.stringify(response.data.admin)
      );

      navigate("/admin");
    } catch (error) {
      setError(
        error.response?.data?.message ||
          "Login failed"
      );
    }
  };

  return (
    <section className="admin-login">

      <form
        className="admin-login-form"
        onSubmit={handleSubmit}
      >
        <h1>PetroPak Admin</h1>

        <p>Login to Dashboard</p>

        {error && (
          <div className="error-message">
            {error}
          </div>
        )}

        <input
          type="email"
          name="email"
          placeholder="Admin Email"
          value={form.email}
          onChange={handleChange}
          required
        />

        <input
          type="password"
          name="password"
          placeholder="Password"
          value={form.password}
          onChange={handleChange}
          required
        />

        <button className="btn">
          Login
        </button>
      </form>

    </section>
  );
}

export default AdminLogin;