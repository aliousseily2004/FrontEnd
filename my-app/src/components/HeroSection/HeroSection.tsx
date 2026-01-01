import { Button } from "../ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, Play } from "lucide-react";

interface HeroStatDto {
  value: string;
  label: string;
}

const stats: HeroStatDto[] = [
  { value: "10K+", label: "Students" },
  { value: "50+", label: "Courses" },
  { value: "95%", label: "Satisfaction" },
];

export default function HeroSection() {
  return (
    <div className="animate-fade-in">
      {/* Hero Section */}
      <section className="relative w-full overflow-hidden py-16 lg:py-20">
        {/* SAME BACKGROUND AS MOCK */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-accent/5" />
        <div className="absolute -top-40 -right-40 h-80 w-80 md:h-96 md:w-96 rounded-full bg-primary/10 blur-3xl" />
        <div className="absolute -bottom-40 -left-40 h-80 w-80 md:h-96 md:w-96 rounded-full bg-accent/10 blur-3xl" />

        {/* Content */}
        <div className="container relative mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.1] animate-slide-up">
              Unlock Your{" "}
              <span className="gradient-text">Learning Potential</span>
            </h1>

            <p className="mt-6 text-base md:text-lg text-muted-foreground max-w-xl mx-auto leading-relaxed animate-fade-in">
              Discover thousands of courses taught by expert instructors. Build
              new skills, advance your career, and explore new hobbies with our
              award-winning LMS platform.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in">
              <Button
                asChild
                size="lg"
                className="gradient-bg h-11 px-7 text-base text-white shadow-lg shadow-primary/20 hover:scale-[1.02] transition-all duration-300"
              >
                <Link to="/login" className="flex items-center gap-2">
                  Get Started
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>

              <Button
                asChild
                variant="outline"
                size="lg"
                className="border-primary/20 bg-background/60 backdrop-blur hover:bg-primary/10"
              >
                <Link to="/courses" className="flex items-center gap-2">
                  <Play className="h-4 w-4 fill-current text-primary" />
                  Browse Courses
                </Link>
              </Button>
            </div>

            {/* Stats */}
            <div className="mt-14 grid grid-cols-1 gap-y-8 sm:grid-cols-3 sm:gap-x-10 border-t border-border/50 pt-10 animate-scale-in">
              {stats.map((stat) => (
                <div key={stat.label} className="flex flex-col items-center">
                  <p className="font-display text-3xl md:text-4xl font-bold gradient-text">
                    {stat.value}
                  </p>
                  <p className="text-xs font-medium uppercase tracking-widest text-muted-foreground mt-2">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
