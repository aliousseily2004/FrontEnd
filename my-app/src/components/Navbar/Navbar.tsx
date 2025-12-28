import { Link } from "react-router-dom";
import { BookOpen } from "lucide-react";
import SearchBar from "../Search/SearchBar";
import ThemeToggle from "../ThemeToggle/ThemeToggle";

// This is how we keep the menu items organized
const navItems = [
  { label: "Courses", href: "/courses" },
  { label: "About", href: "/about" },
];

function Navbar() {
  return (
    // Added sticky, background blur, and the border-b from your CSS
    <header className="sticky top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <nav className="flex h-16 items-center justify-between px-6 container mx-auto">
        {/* Left: Logo */}
        <Link
          to="/"
          className="flex items-center gap-2 transition-opacity hover:opacity-90"
        >
          <div className="flex h-9 w-9 items-center justify-center rounded-lg gradient-bg shadow-sm">
            <BookOpen className="h-5 w-5 text-white" />
          </div>
          <span className="hidden font-display text-xl font-bold tracking-tight text-foreground md:inline-block">
            LearnHub
          </span>
        </Link>

        {/* Center: Search and Links */}
        <div className="flex flex-1 items-center justify-center px-6 gap-8">
          <div className="hidden lg:block w-full max-w-sm">
            <SearchBar />
          </div>

          <div className="hidden md:flex items-center gap-6">
            {navItems.map((item) => (
              <Link
                key={item.label}
                to={item.href}
                className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>

        {/* Right: Actions */}
        <div className="flex items-center gap-4">
          <ThemeToggle />

          <div className="hidden sm:flex items-center gap-3 border-l border-border pl-4">
            <Link
              to="/login"
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              Sign in
            </Link>
            <Link
              to="/register"
              className="rounded-full gradient-bg px-5 py-2 text-sm font-semibold text-white shadow-md hover:shadow-lg hover:scale-[1.02] transition-all"
            >
              Get started
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
