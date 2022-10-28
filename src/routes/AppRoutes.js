import { Routes, Route } from "react-router-dom";
import Consult from "../pages/Consult";
import Discover from "../pages/Discover";
import Home from "../pages/Home";
import Routine from "../pages/Routine";
import Spaces from "../pages/Spaces";
export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/discover" element={<Discover />} />
      <Route path="/spaces" element={<Spaces />} />
      <Route path="/consult" element={<Consult />} />
      <Route path="/routine" element={<Routine />} />
    </Routes>
  );
}
