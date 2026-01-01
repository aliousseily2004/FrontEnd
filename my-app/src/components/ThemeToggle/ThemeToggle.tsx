import { useState } from "react";
import { Moon, Sun } from "lucide-react";

export default function ThemeToggle() {
  const [isDark, setIsDark] = useState(false);

  const toggleTheme = () => {
    setIsDark(!isDark);
    document.documentElement.classList.toggle("dark");
  };

  return (
    <button
      type="button"
      onClick={toggleTheme}
      // "bg-card" uses the white defined in your CSS
      // "border-border" uses the light blue/grey defined in your CSS
      className="flex h-10 w-10 items-center justify-center rounded-lg border border-border bg-card shadow-sm hover:bg-accent/5 transition-all"
    >
      {isDark ? (
        <Sun className="h-5 w-5 text-warning" /> // Uses your --warning color
      ) : (
        <Moon className="h-5 w-5 text-muted-foreground" /> // Uses your --muted-foreground
      )}
    </button>
  );
}
