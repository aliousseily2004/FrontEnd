import { useState } from "react";
import { Routes, Route, useLocation } from "react-router-dom"; // Import useLocation
import { Sidebar } from "./components/Sidebar";
import { Button } from "@/components/ui/button";
import Courses from "./pages/Courses";
import Certificates from "./pages/Certificates";
import MyCourses from "./pages/MyCourses";
import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";
import Settings from "./pages/Settings";
import Register from "./pages/register";
import Navbar from "./components/Navbar/Navbar";
import Login from "./pages/Login";

function AppContent() {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const location = useLocation();

  // Define paths where you DON'T want the sidebar
  const isHomePage = location.pathname === "/";
  const isLoginpage = location.pathname === "/login";
  const isRegisterPage = location.pathname === "/register";
  return (
    <div className="flex min-h-screen">
      {!isHomePage && !isLoginpage && !isRegisterPage && (
        <Sidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />
      )}

      {/* Main content */}
      <div className="flex-1 ">
        {/* Only show the mobile toggle button if sidebar is hidden (mobile) and NOT on home page */}
        {!isHomePage && (
          <Button
            className="mb-4 lg:hidden"
            onClick={() => setSidebarOpen(true)}
          >
            Open Menu
          </Button>
        )}
        <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/my-courses" element={<MyCourses />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/certificates" element={<Certificates />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="*" element={<h1>Welcome</h1>} />
        </Routes>
      </div>
    </div>
  );
}

// In your main.tsx or App.tsx, ensure AppContent is inside a <BrowserRouter>
export default function App() {
  return <AppContent />;
}
