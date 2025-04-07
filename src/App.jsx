import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { useState } from "react";
import AdminLogin from "./pages/AdminLogin";
import Admin from "./pages/Admin";
import Home from "./pages/Home";
import JobListHome from "./components/JobListHome";
import JobDetailPage from "./pages/JobDetailPage";
import CityJobs from "./pages/CityJobs";
import BatchJobs from "./pages/BatchJobs";
import Contact from "./pages/Contact";
import AboutUs from "./pages/Aboutus";
import PrivacyPolicy from "./pages/Privacy&policy";
import TermsAndConditions from "./pages/T&C";

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
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/p&p" element={<PrivacyPolicy />} />
        <Route path="/t&c" element={<TermsAndConditions />} />
        
      </Routes>
    </Router>
  );
};

export default App;
