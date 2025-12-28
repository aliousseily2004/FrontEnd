import { Button } from "../ui/button";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Card, CardContent } from "../ui/card";
import { allCourses } from "../Courses/CourseData";

export default function FeaturedCourses() {
  const featuredCourses = allCourses.slice(0, 3);

  return (
    <section className="py-16">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto text-center">
          {/* Header */}
          <div className="flex items-center justify-between mb-10">
            <div>
              <h2 className="font-display text-2xl md:text-3xl font-bold">
                Featured Courses
              </h2>
              <p className="text-muted-foreground mt-2">
                Start learning with our top courses
              </p>
            </div>

            <Button asChild variant="ghost">
              <Link to="/courses" className="flex items-center gap-1">
                View All
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </div>

          {/* Grid */}
          <div className="grid gap-6 md:grid-cols-3">
            {featuredCourses.map((course, index) => (
              <Card
                key={`${course.title}-${index}`}
                className="
              group
              border-0 !border-0 ring-0 !ring-0
              bg-card
              shadow-none
              transition-all duration-300
              hover:-translate-y-1 hover:shadow-lg
              overflow-hidden
            "
              >
                <div className="relative overflow-hidden">
                  <img
                    src={course.imageUrl}
                    alt={course.title}
                    className="h-40 w-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>

                <CardContent className="p-4">
                  <p className="text-xs text-primary font-medium mb-1">
                    {course.instructor}
                  </p>

                  <h3 className="font-display font-semibold line-clamp-2 mb-1">
                    {course.title}
                  </h3>

                  <p className="text-sm text-muted-foreground line-clamp-2">
                    {course.description}
                  </p>

                  <div className="mt-3 flex items-center justify-between text-sm text-muted-foreground">
                    <span>{course.lessons} lessons</span>
                    <span>{course.hours} hrs</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
