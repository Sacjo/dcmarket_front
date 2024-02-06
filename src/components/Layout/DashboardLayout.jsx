import React from "react";
import { Link, Outlet } from "react-router-dom"; // Asegúrate de importar Outlet


const DashboardLayout = () => {
  return (
    <div className="dashboard-layout">
      <nav className="sidebar">
        <ul className="sidebar-list">
          <li>
            <Link to="/dashboard">Dashboard</Link>
          </li>
          <li>
            <Link to="/dashboard/users">Users</Link>
          </li>
        </ul>
      </nav>
      <div className="dashboard-layout-content">
        <Outlet /> {/* Asegúrate de usar Outlet aquí */}
      </div>
    </div>
  );
};

export default DashboardLayout;
