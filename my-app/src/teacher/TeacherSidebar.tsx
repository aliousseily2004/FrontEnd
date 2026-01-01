import {
  LayoutDashboard,
  BookOpen,
  PlusCircle,
  Users,
  HelpCircle,
  Award,
  Settings,
  X,
} from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { cn } from "@/lib/utils"; // Ensure you have this utility or use standard strings

// Define the interface for the props
interface TeacherSidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

const navItems = [
  { label: "Dashboard", icon: LayoutDashboard, path: "/teacher/dashboard" },
  { label: "My Teaching", icon: BookOpen, path: "/teacher/MyTeaching" },
  { label: "Create Course", icon: PlusCircle, path: "/teacher/CreateCourse" },
  { label: "Students", icon: Users, path: "/teacher/students" },
  { label: "Quizzes", icon: HelpCircle, path: "/teacher/quizzes" },
  { label: "Certificates", icon: Award, path: "/teacher/certificates" },
  { label: "Settings", icon: Settings, path: "/teacher/settings" },
];

export default function TeacherSidebar({ isOpen, onClose }: TeacherSidebarProps) {
  const location = useLocation();

  return (
    <>
      {/* 1. Mobile Overlay (Backdrop) */}
      {isOpen && (
        <div
          onClick={onClose}
          className="fixed inset-0 bg-black/40 z-40 lg:hidden backdrop-blur-sm"
        />
      )}

      {/* 2. Sidebar Container */}
      <aside
        className={cn(
          "fixed inset-y-0 left-0 z-50 w-72 bg-card border-r transition-transform duration-300",
          "lg:sticky lg:translate-x-0 lg:top-16 lg:h-[calc(100vh-4rem)]", // Desktop behavior
          isOpen ? "translate-x-0" : "-translate-x-full" // Mobile behavior
        )}
      >
        {/* Header (Mobile Only) */}
        <div className="flex items-center justify-between px-6 h-16 border-b lg:hidden">
          <span className="font-display text-xl font-bold gradient-text">
            Teacher Panel
          </span>
          <button onClick={onClose} className="p-2 rounded-md hover:bg-muted">
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Navigation Links */}
        <nav className="p-4 space-y-1">
          {navItems.map((item) => {
            const active = location.pathname === item.path;
            const Icon = item.icon;

            return (
              <Link
                key={item.label}
                to={item.path}
                onClick={onClose} // Close sidebar after clicking a link on mobile
                className={cn(
                  "flex items-center gap-3 px-4 py-2.5 rounded-lg text-sm font-medium transition",
                  active
                    ? "bg-primary text-primary-foreground shadow"
                    : "text-muted-foreground hover:bg-muted hover:text-foreground"
                )}
              >
                <Icon className="w-5 h-5" />
                {item.label}
              </Link>
            );
          })}
        </nav>
      </aside>
    </>
  );
}