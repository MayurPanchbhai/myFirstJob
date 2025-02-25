import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { useState } from "react";
import AdminLogin from "./pages/AdminLogin";
import Admin from "./pages/Admin";

const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(
    localStorage.getItem("isAuthenticated") === "true"
  );

  const handleLogin = () => {
    localStorage.setItem("isAuthenticated", "true");
    setIsAuthenticated(true);
  };

  return (
    <Router>
      <Routes>
        <Route
          path="/admin-login"
          element={isAuthenticated ? <Navigate to="/admin" /> : <AdminLogin onLogin={handleLogin} />}
        />
        <Route
          path="/admin"
          element={isAuthenticated ? <Admin /> : <Navigate to="/admin-login" />}
        />
      </Routes>
    </Router>
  );
};

export default App;
