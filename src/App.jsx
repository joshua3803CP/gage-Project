import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Login from "./pages/LoginPage";
import DashboardPage from "./pages/DashboardPage";

function App() {
  return (
    <Router>
      <Routes>
  <Route path="/" element={<Navigate to="/login" />} />
  <Route path="/login" element={<Login />} />
  <Route path="/dashboard" element={<DashboardPage activeTab="dashboard" />} />
  <Route path="/sourcing" element={<DashboardPage activeTab="sourcing" />} />
  <Route path="/reporting" element={<DashboardPage activeTab="reporting" />} />
  <Route path="/settings" element={<DashboardPage activeTab="settings" />} />
</Routes>

    </Router>
  );
}

export default App;
