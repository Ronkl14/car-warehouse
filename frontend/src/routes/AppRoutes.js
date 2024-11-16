import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import CarDashboard from "../Components/Cars/CarDashboard";
import EmployeeDashboard from "../Components/Employees/EmployeeDashboard";

const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<CarDashboard />} />
        <Route path="/employees" element={<EmployeeDashboard />} />
      </Routes>
    </Router>
  );
};

export default AppRoutes;
