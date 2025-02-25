import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Location from "./pages/Location";
import Batch from "./pages/Batch";
import Admin from "./pages/Admin";

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/location" element={<Location />} />
      <Route path="/batch" element={<Batch />} />
      <Route path="/admin" element={<Admin />} />
    </Routes>
  );
}

export default AppRoutes;
