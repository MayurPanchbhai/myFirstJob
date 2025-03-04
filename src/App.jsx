import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { useState } from "react";
import AdminLogin from "./pages/AdminLogin";
import Admin from "./pages/Admin";
import Home from "./pages/Home";
import JobListHome from "./components/JobListHome";
import JobDetailPage from "./pages/JobDetailPage";
import CityJobs from "./pages/CityJobs";
import BatchJobs from "./pages/BatchJobs";

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
        <Route
          path="/"
          element={<JobListHome />}
        />

        <Route path="/job/:id" element={<JobDetailPage />} />
        {/* <Route path="/admin-login" element={<AdminLogin onLogin={handleLogin} />} /> */}

        <Route path="/jobs/:city" element={<CityJobs />} />
        <Route path="/batch/:batch" element={<BatchJobs />} />
        
      </Routes>
    </Router>
  );
};

export default App;
