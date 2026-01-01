import { Link, useLocation } from "react-router-dom";
import { LayoutDashboard, BookOpen, Award, Settings, X, GraduationCap } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

export function Sidebar({ isOpen, onClose }: SidebarProps) {
  const location = useLocation();

  return (
    <>
      {/* Mobile Backdrop */}
      <div 
        className={cn(
          "fixed inset-0 z-50 bg-black/50 lg:hidden transition-opacity",
          isOpen ? "opacity-100 visible" : "opacity-0 invisible"
        )} 
        onClick={onClose} 
      />

      <aside
        className={cn(
          "fixed inset-y-0 left-0 z-50 w-64 bg-sidebar border-r transform transition-transform duration-300 lg:sticky lg:top-16 lg:h-[calc(100vh-4rem)] lg:translate-x-0",
          isOpen ? "translate-x-0" : "-translate-x-full"
        )}
      >
        <div className="flex flex-col h-full">
          <div className="flex items-center justify-between p-4 lg:hidden">
            <span className="font-bold">Menu</span>
            <Button variant="ghost" size="icon" onClick={onClose}><X /></Button>
          </div>
          
          <nav className="flex-1 p-4 space-y-2">
            {[
              { icon: LayoutDashboard, label: "Dashboard", path: "/dashboard" },
              { icon: BookOpen, label: "My Courses", path: "/my-courses" },
              { icon: GraduationCap, label: "Browse Courses", path: "/courses" },
              { icon: Award, label: "Certificates", path: "/certificates" },
              { icon: Settings, label: "Settings", path: "/settings" },
            ].map((item) => (
              <Link
                key={item.path}
                to={item.path}
                onClick={onClose}
                className={cn(
                  "flex items-center gap-3 px-3 py-2 rounded-lg text-sm font-medium",
                  location.pathname === item.path ? "bg-primary text-white" : "hover:bg-muted"
                )}
              >
                <item.icon size={20} />
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
      </aside>
    </>
  );
}