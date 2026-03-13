import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import {
  FaHome,
  FaCalendarAlt,
  FaBed,
  FaSwimmer,
  FaImages,
  FaEnvelope,
  FaCog,
  FaSignOutAlt,
} from "react-icons/fa";
import "./Sidebar.css";

const Sidebar = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/");
  };

  return (
    <div className="admin-sidebar">
      <div className="sidebar-header">
        <h2>Admin Panel</h2>
      </div>
      <ul className="sidebar-menu">
        <li>
          <NavLink to="/admin/dashboard" end>
            <FaHome /> Dashboard
          </NavLink>
        </li>

        <li>
          <NavLink to="/admin/inquiries">
            <FaEnvelope /> Inquiries
          </NavLink>
        </li>
      </ul>
      <div className="sidebar-footer">
        <button onClick={handleLogout} className="logout-btn">
          <FaSignOutAlt /> Logout
        </button>
        <div style={{marginTop: '16px', fontSize: '0.7rem', color: '#aaa', textAlign: 'center', lineHeight: '1.6'}}>
          <div>All rights reserved HQ8X</div>
          <div>Developed by <strong style={{color: '#ccc'}}>HQ8X Technologies</strong></div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
