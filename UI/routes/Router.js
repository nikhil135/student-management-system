import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Dashboard from "../pages/Dashboard";
import Bookings from "../pages/Bookings";
import SellCar from "../pages/SellCar";
import Settings from "../pages/Settings";
import Login from "../pages/Login";
import Grant from "../pages/Grant";
import Thesis from "../pages/Thesis";
import IPR from "../pages/IPR";

const Router = () => {
  return (
    <Routes>
      <Route
        path="/"
        element={<Navigate to="/dashboard" element={<Login />} />}
        />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/bookings" element={<Bookings />} />
      <Route path="/sell-car" element={<SellCar />} />
      <Route path="/settings" element={<Settings />} />
      <Route path="/Grants" element={<Grant/>} />
      <Route path="/Thesis" element={<Thesis/>} />
      <Route path="/IPR" element={<IPR/>} />

    </Routes>
  );
};

export default Router;
