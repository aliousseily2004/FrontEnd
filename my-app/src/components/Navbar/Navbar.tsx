import { Link } from "react-router-dom";
import { BookOpen } from "lucide-react";

function Navbar() {
  return (
    <div>
      <nav className="flex h-16 items-center justify-between px-6">
        {/* Left */}
        <Link to="/" className="flex items-center gap-2">
          <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-to-br from-blue-500 to-sky-500">
            <BookOpen className="h-5 w-5 text-white" />
          </div>
          <span className="hidden font-display text-xl font-semibold text-foreground md:inline-block">
            LearnHub
          </span>
        </Link>

        {/* Center */}
        <div className="hidden md:flex items-center gap-6">
          <Link
            to="/courses"
            className="text-muted-foreground hover:text-foreground"
          >
            Courses
          </Link>
          <Link
            to="/about"
            className="text-muted-foreground hover:text-foreground"
          >
            About
          </Link>
        </div>

        {/* Right */}
        <div className="flex items-center gap-3">
          <Link
            to="/login"
            className="text-sm text-muted-foreground hover:text-foreground"
          >
            Sign in
          </Link>
          <Link
            to="/register"
            className="rounded-md bg-gradient-to-br from-blue-500 to-sky-500 px-4 py-2 text-sm font-medium text-white"
          >
            Get started
          </Link>
        </div>
      </nav>
    </div>
  );
}
export default Navbar;
