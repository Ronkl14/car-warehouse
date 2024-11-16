import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import CarDashboard from "../Components/Cars/CarDashboard";
import EmployeeDashboard from "../Components/Employees/EmployeeDashboard";
import Navbar from "../layout/Navbar";

const AppRoutes = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<CarDashboard />} />
        <Route path="/employees" element={<EmployeeDashboard />} />
      </Routes>
    </Router>
  );
};

export default AppRoutes;
