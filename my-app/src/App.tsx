import { useState } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { Sidebar as StudentSidebar } from "./components/Sidebar";
import TeacherSidebar from "./teacher/TeacherSidebar";
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";

// Student/Public Pages
import Courses from "./pages/Courses";
import Certificates from "./pages/Certificates";
import MyCourses from "./pages/MyCourses";
import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";
import Settings from "./pages/Settings";
import Navbar from "./components/Navbar/Navbar";
import Login from "./pages/Login";
import Register from "./pages/Register";
import About from "./pages/About";
import Mission from "./pages/Mission";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import Contact from "./pages/Contact";
import TermsOfService from "./pages/TermsOfService";
import HelpCenter from "./pages/HelpCenter";
import Careers from "./pages/Careers";
import Layout from "@/components/Layout/Layout";

// Teacher Pages
import TeacherDashboard from "./teacher/TeacherDashboard";
import CreateCourse from "./teacher/CreateCourse";
import MyTeaching from "./teacher/MyTeaching";
import TeacherStudents from "./teacher/students";
import TeacherQuizzes from "./teacher/quizzes";
import TeacherCertificates from "./teacher/certificates";
import { AdminSidebar } from "./components/Admin/AdminSideBar";
import AdminOverview from "./components/Admin/Overview/Overview";
import UserDetails from "./components/Admin/UserManagement/UserDetails";
import UserManagement from "./components/Admin/UserManagement/UserManagement";

function AppContent() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [role, setRole] = useState<"student" | "teacher" | "admin">("student");
  const location = useLocation();

  // Pages where we don't want to show the sidebar or role switcher
  const isAuthPage =
    location.pathname === "/" ||
    location.pathname === "/login" ||
    location.pathname === "/register";

  const showSidebar = !isAuthPage;

  return (
    <div className="flex flex-col min-h-screen bg-background">
      {/* 1. TOP NAVBAR (Always Static/Non-Responsive Links) */}
      <Navbar />

      <div className="flex flex-1">
        {/* 2. SIDEBARS (Mobile Drawer / Desktop Sticky) */}
        {showSidebar && role === "student" && (
          <StudentSidebar
            isOpen={sidebarOpen}
            onClose={() => setSidebarOpen(false)}
          />
        )}

        {showSidebar && role === "teacher" && (
          <TeacherSidebar
            isOpen={sidebarOpen}
            onClose={() => setSidebarOpen(false)}
          />
        )}
        {showSidebar && role === "admin" && (
          <AdminSidebar
            isOpen={sidebarOpen}
            onClose={() => setSidebarOpen(false)}
          />
        )}

        {/* 3. MAIN CONTENT AREA */}
        <main className="flex-1 flex flex-col min-w-0">
          {/* TOP ACTION BAR: Role Switcher & Mobile Menu Trigger */}
          {!isAuthPage && (
            <div className="flex items-center justify-between p-3 border-b bg-card">
              {/* Hamburger Button - Visible only on Mobile (lg:hidden) */}
              <Button
                variant="outline"
                size="icon"
                className="lg:hidden"
                onClick={() => setSidebarOpen(true)}
              >
                <Menu className="h-5 w-5" />
              </Button>

              {/* Role Switching Buttons */}
              <div className="flex gap-2 ml-auto">
                <Button
                  size="sm"
                  variant={role === "student" ? "default" : "outline"}
                  onClick={() => setRole("student")}
                >
                  Student View
                </Button>

                <Button
                  size="sm"
                  variant={role === "teacher" ? "default" : "outline"}
                  onClick={() => setRole("teacher")}
                >
                  Teacher View
                </Button>

                <Button
                  size="sm"
                  variant={role === "admin" ? "default" : "outline"}
                  onClick={() => setRole("admin")}
                >
                  Admin View
                </Button>
              </div>
            </div>
          )}

          {/* PAGE ROUTES */}
          <div className="flex-1">
            <Routes>
              <Route element={<Layout />}>
                {/* PUBLIC ROUTES */}
                <Route path="/" element={<Home />} />
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
                <Route path="/about" element={<About />} />
                <Route path="/mission" element={<Mission />} />
                <Route path="/privacypolicy" element={<PrivacyPolicy />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/termsofservice" element={<TermsOfService />} />
                <Route path="/helpcenter" element={<HelpCenter />} />
                <Route path="/careers" element={<Careers />} />

                {/* STUDENT ROUTES */}
                {role === "student" && (
                  <>
                    <Route path="/dashboard" element={<Dashboard />} />
                    <Route path="/my-courses" element={<MyCourses />} />
                    <Route path="/courses" element={<Courses />} />
                    <Route path="/certificates" element={<Certificates />} />
                    <Route path="/settings" element={<Settings />} />
                  </>
                )}

                {/* TEACHER ROUTES */}
                {role === "teacher" && (
                  <>
                    <Route
                      path="/teacher/dashboard"
                      element={<TeacherDashboard />}
                    />
                    <Route path="/teacher/settings" element={<Settings />} />
                    <Route
                      path="/teacher/CreateCourse"
                      element={<CreateCourse />}
                    />
                    <Route
                      path="/teacher/MyTeaching"
                      element={<MyTeaching />}
                    />
                    <Route
                      path="/teacher/students"
                      element={<TeacherStudents />}
                    />
                    <Route
                      path="/teacher/quizzes"
                      element={<TeacherQuizzes />}
                    />
                    <Route
                      path="/teacher/certificates"
                      element={<TeacherCertificates />}
                    />
                  </>
                )}
                {/*  admin routes */}
                <Route path="/admin/dashboard" element={<AdminOverview />} />
                <Route path="/admin/users/" element={<UserManagement />} />
                <Route path="/admin/users/:id" element={<UserDetails />} />
                <Route
                  path="*"
                  element={
                    <div className="p-10 text-center text-2xl font-bold">
                      404 - Page Not Found
                    </div>
                  }
                />
              </Route>
            </Routes>
          </div>
        </main>
      </div>
    </div>
  );
}

export default function App() {
  return <AppContent />;
}
