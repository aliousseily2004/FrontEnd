import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import { Sidebar } from "./components/Sidebar";
import { Button } from "@/components/ui/button";
import Courses from "./pages/Courses";
import Certificates from "./pages/Certificates";
import MyCourses from "./pages/MyCourses";
import Home from "./pages/Home";
function App() {
  const [sidebarOpen, setSidebarOpen] = useState(true);

  return (
    <div className="flex min-h-screen">
      {/* Sidebar */}
      <Sidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />

      {/* Main content */}
      <div className="flex-1 p-6">
        <Button className="mb-4 lg:hidden" onClick={() => setSidebarOpen(true)}>
          Open Menu
        </Button>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/dashboard" element={<h1>Dashboard</h1>} />
          <Route path="/my-courses" element={<MyCourses />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/certificates" element={<Certificates />} />
          <Route path="/settings" element={<h1>Settings</h1>} />
          <Route path="*" element={<h1>Welcome</h1>} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
