import { useState } from "react";
import { Link } from "react-router-dom";
import { BookOpen, Menu, X } from "lucide-react";
import SearchBar from "../Search/SearchBar";
import ThemeToggle from "../ThemeToggle/ThemeToggle";
import { Button } from "@/components/ui/button";

const navItems = [
  { label: "Courses", href: "/courses" },
  { label: "About", href: "/about" },
];

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-[60] w-full border-b border-border bg-background/95 backdrop-blur">
      <nav className="flex h-16 items-center justify-between px-6 container mx-auto gap-4">
        
        {/* Left: Logo */}
        <Link to="/" className="flex items-center gap-2 shrink-0">
          <div className="flex h-9 w-9 items-center justify-center rounded-lg gradient-bg shadow-sm">
            <BookOpen className="h-5 w-5 text-white" />
          </div>
          <span className="font-display text-xl font-bold tracking-tight text-foreground">
            LearnHub
          </span>
        </Link>

        {/* Center: Search Bar (Always Visible) */}
        <div className="flex-1 flex justify-center max-w-sm">
          <SearchBar />
        </div>

        {/* Right Section */}
        <div className="flex items-center gap-2">
          {/* Desktop Links (Hidden on Mobile) */}
          <div className="hidden md:flex items-center gap-6 mr-4">
            {navItems.map((item) => (
              <Link
                key={item.label}
                to={item.href}
                className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
              >
                {item.label}
              </Link>
            ))}
          </div>

          <ThemeToggle />

          {/* Auth Buttons (Hidden on very small screens, or kept small) */}
          <div className="hidden sm:flex items-center gap-3 border-l border-border pl-4">
            <Link to="/login" className="text-sm font-medium text-muted-foreground hover:text-foreground">
              Sign in
            </Link>
          </div>

          {/* Mobile Hamburger Button (Visible only on Mobile) */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>
      </nav>

      {/* Mobile Menu Dropdown */}
      {isMenuOpen && (
        <div className="absolute top-16 left-0 w-full bg-background border-b border-border md:hidden animate-in slide-in-from-top duration-200">
          <div className="flex flex-col p-4 space-y-4">
            {navItems.map((item) => (
              <Link
                key={item.label}
                to={item.href}
                onClick={() => setIsMenuOpen(false)}
                className="text-lg font-medium text-foreground hover:text-primary px-2 py-1"
              >
                {item.label}
              </Link>
            ))}
            <hr className="border-border" />
            <Link 
              to="/login" 
              onClick={() => setIsMenuOpen(false)}
              className="text-lg font-medium text-muted-foreground px-2 py-1"
            >
              Sign in
            </Link>
            <Link 
              to="/register" 
              onClick={() => setIsMenuOpen(false)}
              className="rounded-lg gradient-bg p-3 text-center text-white font-bold"
            >
              Get Started
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}

export default Navbar;