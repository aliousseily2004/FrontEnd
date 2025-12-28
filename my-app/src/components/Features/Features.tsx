import React from "react";
import { Card, CardContent } from "../ui/card";
import { BookOpen, Award, Users } from "lucide-react";

export default function Features() {
  const features = [
    {
      icon: BookOpen,
      title: "Expert-Led Courses",
      description:
        "Learn from industry professionals with real-world experience.",
    },
    {
      icon: Award,
      title: "Earn Certificates",
      description: "Get recognized certifications upon course completion.",
    },
    {
      icon: Users,
      title: "Learn at Your Pace",
      description: "Access courses anytime, anywhere, on any device.",
    },
  ];

  return (
    <section className="py-16">
      {/* Text ABOVE cards */}
      <div className="text-center mb-12">
        <h2 className="font-display text-2xl md:text-3xl font-bold">
          Why Choose LearnHub?
        </h2>
        <p className="text-muted-foreground mt-2 max-w-xl mx-auto">
          Everything you need to accelerate your learning journey
        </p>
      </div>

      {/* Cards */}
      <div className="grid gap-8 md:grid-cols-3 max-w-6xl mx-auto">
        {features.map((feature) => (
          <Card
            key={feature.title}
            className="
              group
              border-0 !border-0 ring-0 !ring-0
              bg-card
              shadow-none
              transition-all duration-300
              hover:-translate-y-1 hover:shadow-lg
            "
          >
            <CardContent className="p-6 text-center">
              <div className="inline-flex h-14 w-14 items-center justify-center rounded-xl gradient-bg mb-4 transition-transform duration-300 group-hover:scale-110">
                <feature.icon className="h-7 w-7 text-primary-foreground" />
              </div>

              <h3 className="font-display text-lg font-semibold mb-2">
                {feature.title}
              </h3>

              <p className="text-sm text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}
