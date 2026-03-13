import React, { useState, useEffect } from "react";
import Sidebar from "../components/admin/Sidebar";
import axios from "axios";
import API_URL from "../config";
import "./AdminDashboard.css";

const AdminDashboard = () => {
  const [stats, setStats] = useState({
    totalInquiries: 0,
    newInquiries: 0,
    seenInquiries: 0,
  });
  const [inquiries, setInquiries] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const token = localStorage.getItem("token");
        const config = {
          headers: {
            "x-auth-token": token,
          },
        };

        const res = await axios.get(`${API_URL}/api/inquiries`, config);

        const data = res.data;
        const newInqs = data.filter((inq) => inq.status === "New").length;
        const seenInqs = data.filter((inq) => inq.status !== "New").length;

        setInquiries(data);
        setStats({
          totalInquiries: data.length,
          newInquiries: newInqs,
          seenInquiries: seenInqs,
        });
        setLoading(false);
      } catch (err) {
        console.error(err);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) return <div className="loading">Loading Dashboard...</div>;

  return (
    <div className="admin-layout">
      <Sidebar />
      <div className="admin-content">
        <header className="admin-header">
          <h1>Dashboard Overview</h1>
          <div className="admin-user">Admin</div>
        </header>

        <div className="dashboard-grid">
          <div className="stat-card">
            <h3>Total Inquiries</h3>
            <div className="stat-value">{stats.totalInquiries}</div>
            <div className="stat-label">All time</div>
          </div>
          <div className="stat-card">
            <h3>New Inquiries</h3>
            <div className="stat-value" style={{color: '#ff9800'}}>{stats.newInquiries}</div>
            <div className="stat-label">Needs attention</div>
          </div>
          <div className="stat-card">
            <h3>Seen Inquiries</h3>
            <div className="stat-value" style={{color: '#4caf50'}}>{stats.seenInquiries}</div>
            <div className="stat-label">Reviewed</div>
          </div>
        </div>

        <section className="recent-activity">
          <h2>Recent Inquiries</h2>
          <table className="data-table">
            <thead>
              <tr>
                <th>Name</th>
                <th>Type</th>
                <th>Date</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {inquiries.map((inquiry) => (
                <tr key={inquiry.id}>
                  <td>{inquiry.name}</td>
                  <td>{inquiry.eventType}</td>
                  <td>
                    {(() => {
                      if (!inquiry.date) return "";
                      if (inquiry.date.includes("/")) return inquiry.date;
                      const d = new Date(inquiry.date);
                      if (isNaN(d.getTime())) return inquiry.date;
                      return d.toLocaleDateString("en-GB");
                    })()}
                  </td>
                  <td>
                    <span className={`status ${inquiry.status.toLowerCase()}`}>
                      {inquiry.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </section>
      </div>
    </div>
  );
};

export default AdminDashboard;
