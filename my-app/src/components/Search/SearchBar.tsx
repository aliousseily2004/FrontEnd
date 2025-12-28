import { Search } from "lucide-react";

export default function SearchBar() {
  return (
    <div className="relative w-full max-w-sm group">
      {/* Search Icon */}
      <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
        <Search className="h-4 w-4 text-muted-foreground group-focus-within:text-primary transition-colors" />
      </div>

      {/* Input */}
      <input
        type="text"
        placeholder="Search courses..."
        className="
          w-full
          rounded-md
          border border-input
          bg-background
          text-foreground
          placeholder:text-muted-foreground
          pl-10 pr-3 py-2
          focus:outline-none focus:ring-2 focus:ring-ring/30
        "
      />
    </div>
  );
}
