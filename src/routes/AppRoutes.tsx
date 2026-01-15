import { Routes, Route, Navigate } from "react-router-dom";

import AuthPage from "../pages/Auth/AuthPage";
import Home from "../pages/Auth/Home";

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/login" replace />} />
      <Route path="/login" element={<AuthPage mode="login" />} />
      <Route path="/register" element={<AuthPage mode="register" />} />
      <Route path="/home" element={<Home />} />
    </Routes>
  );
}
