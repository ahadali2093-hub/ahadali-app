import { useState } from "react";

function AdminDashboard() {
  const [activeTab, setActiveTab] =
    useState("dashboard");

  const logout = () => {
    localStorage.removeItem("adminToken");
    localStorage.removeItem("admin");

    window.location.href = "/admin/login";
  };
  
  return (
    <section className="admin-layout">

      <aside className="admin-sidebar">

        <div className="admin-logo">
          PETRO<span>PAK</span>
        </div>

        <button
          className={
            activeTab === "dashboard"
              ? "sidebar-link active"
              : "sidebar-link"
          }
          onClick={() =>
            setActiveTab("dashboard")
          }
        >
          📊 Dashboard
        </button>

        <button
          className={
            activeTab === "fuel"
              ? "sidebar-link active"
              : "sidebar-link"
          }
          onClick={() =>
            setActiveTab("fuel")
          }
        >
          ⛽ Fuel Prices
        </button>

        <button
          className={
            activeTab === "stations"
              ? "sidebar-link active"
              : "sidebar-link"
          }
          onClick={() =>
            setActiveTab("stations")
          }
        >
          📍 Stations
        </button>

        <button
          className={
            activeTab === "news"
              ? "sidebar-link active"
              : "sidebar-link"
          }
          onClick={() =>
            setActiveTab("news")
          }
        >
          📰 News
        </button>

        <button
          className={
            activeTab === "messages"
              ? "sidebar-link active"
              : "sidebar-link"
          }
          onClick={() =>
            setActiveTab("messages")
          }
        >
          📩 Messages
        </button>

        <button
          className="sidebar-logout"
          onClick={logout}
        >
          🚪 Logout
        </button>

      </aside>

      <div className="admin-content">

        {activeTab === "dashboard" && (
          <div>
            <h3>Patrol</h3>
            <p>Rs. 280</p>
            <button>Edit</button>
            <button>delete</button>
          </div>
        )}

        {activeTab === "fuel" && (
          <FuelManager />
        )}

        {activeTab === "stations" && (
          <StationManager />
        )}

        {activeTab === "news" && (
          <NewsManager />
        )}

        {activeTab === "messages" && (
          <MessageManager />
        )}
        

      </div>

    </section>
  );
}
export default AdminDashboard;