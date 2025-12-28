import { Link } from "react-router-dom";
import { BookOpen, Github, Linkedin, Twitter } from "lucide-react";

export default function Footer() {
  return (
    <footer className="relative mt-20 border-t border-border/40">
      {/* Soft background like the rest of the site */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-accent/5 -z-10" />

      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto py-14">
          {/* Top */}
          <div className="grid gap-10 md:grid-cols-4">
            {/* Brand */}
            <div className="md:col-span-1">
              <div className="flex items-center gap-2 mb-4">
                <div className="flex h-9 w-9 items-center justify-center rounded-lg gradient-bg">
                  <BookOpen className="h-5 w-5 text-white" />
                </div>
                <span className="font-display text-lg font-semibold">
                  LearnHub
                </span>
              </div>

              <p className="text-sm text-muted-foreground leading-relaxed">
                LearnHub is a modern learning platform helping you build skills,
                grow your career, and explore new opportunities.
              </p>
            </div>

            {/* Links */}
            <div>
              <h4 className="font-medium mb-4">Platform</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>
                  <Link to="/courses" className="hover:text-primary transition">
                    Courses
                  </Link>
                </li>
                <li>
                  <Link
                    to="/my-courses"
                    className="hover:text-primary transition"
                  >
                    My Learning
                  </Link>
                </li>
                <li>
                  <Link
                    to="/certificates"
                    className="hover:text-primary transition"
                  >
                    Certificates
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-medium mb-4">Company</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>
                  <Link to="/" className="hover:text-primary transition">
                    About
                  </Link>
                </li>
                <li>
                  <Link to="/" className="hover:text-primary transition">
                    Careers
                  </Link>
                </li>
                <li>
                  <Link to="/" className="hover:text-primary transition">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-medium mb-4">Resources</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>
                  <Link to="/" className="hover:text-primary transition">
                    Help Center
                  </Link>
                </li>
                <li>
                  <Link to="/" className="hover:text-primary transition">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link to="/" className="hover:text-primary transition">
                    Terms of Service
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          {/* Bottom */}
          <div className="mt-12 pt-6 border-t border-border/40 flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} LearnHub. All rights reserved.
            </p>

            <div className="flex items-center gap-4">
              <a
                href="#"
                className="text-muted-foreground hover:text-primary transition"
              >
                <Github className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="text-muted-foreground hover:text-primary transition"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="text-muted-foreground hover:text-primary transition"
              >
                <Twitter className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
