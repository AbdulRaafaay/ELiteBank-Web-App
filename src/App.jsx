import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/pages/Home";
import AboutUs from "./components/pages/Aboutus";
import Features from "./components/pages/Features";
import Security from "./components/pages/Security";
import SignUp from "./components/pages/Signup";
import Login from "./components/pages/Login";
import Admin from "./components/pages/Admin";
import AdminDashboard from "./components/adminDashboard/AdminDashboard";
import UserDashboard from "./components/userDashboard/User-dashboard";


function AppWrapper() {
  const location = useLocation();
  const hideNavbarRoutes = ["/admin-dashboard","/user-dashboard"];

  return (
    <>
      {!hideNavbarRoutes.includes(location.pathname) && <Navbar />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/features" element={<Features />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/security" element={<Security />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/admin-dashboard" element={<AdminDashboard />} />
        <Route path="/user-dashboard" element={<UserDashboard />} />

      </Routes>
    </>
  );
}

function App() {
  return (
    <Router>
      <AppWrapper />
    </Router>
  );
}

export default App;
