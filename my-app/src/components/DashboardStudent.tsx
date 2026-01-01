import { useState } from "react";
import { BookOpen, Award, Clock, TrendingUp, Play } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import CourseCard from "@/components/Courses/CourseCard";
import CourseDetail from "@/components/Courses/CourseDetail";
import { ProgressBar } from "@/components/Courses/ProgressBar";
import { allCourses, type Course } from "@/components/Courses/CourseData";

export default function Dashboard() {
  const [selectedCourse, setSelectedCourse] = useState<Course | null>(null);

  // ---- mock user/certs for UI ----
  const user = { name: "Ibrahim Dakroub" };
  const certificates = [{ id: 1 }, { id: 2 }];

  // ---- pick a few courses for dashboard preview ----
  const enrolledCourses = allCourses.slice(0, 3); // pretend enrolled
  const completedCourses = enrolledCourses.filter((c) => c.progress === 100);
  const inProgressCourses = enrolledCourses.filter(
    (c) => c.progress > 0 && c.progress < 100
  );

  const totalProgress =
    enrolledCourses.length > 0
      ? Math.round(
          enrolledCourses.reduce((acc, c) => acc + c.progress, 0) /
            enrolledCourses.length
        )
      : 0;

  const lastCourse = inProgressCourses[0] ?? enrolledCourses[0];

  const stats = [
    {
      icon: BookOpen,
      label: "Enrolled Courses",
      value: enrolledCourses.length,
      color: "text-primary",
    },
    {
      icon: TrendingUp,
      label: "In Progress",
      value: inProgressCourses.length,
      color: "text-warning",
    },
    {
      icon: Award,
      label: "Completed",
      value: completedCourses.length,
      color: "text-success",
    },
    {
      icon: Clock,
      label: "Certificates",
      value: certificates.length,
      color: "text-accent",
    },
  ];

  // If a course is selected, show the detail page
  if (selectedCourse) {
    return (
      <CourseDetail
        course={selectedCourse}
        onBack={() => setSelectedCourse(null)}
      />
    );
  }

  return (
    <div className="p-6 lg:p-8 space-y-8 animate-fade-in">
      {/* Welcome Section */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div>
          <h1 className="font-display text-2xl lg:text-3xl font-bold text-foreground">
            Welcome back, {user.name.split(" ")[0]}! 👋
          </h1>
          <p className="text-muted-foreground mt-1">
            Ready to continue your learning journey?
          </p>
        </div>

        <Button
          onClick={() => setSelectedCourse(null)}
          className="gradient-bg text-white"
        >
          Browse Courses
        </Button>
      </div>

      {/* Stats Grid */}
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat) => (
          <Card key={stat.label} className="shadow-card border-0">
            <CardContent className="p-6">
              <div className="flex items-center gap-4">
                <div className={`p-3 rounded-xl bg-secondary ${stat.color}`}>
                  <stat.icon className="h-6 w-6" />
                </div>
                <div>
                  <p className="text-2xl font-display font-bold">
                    {stat.value}
                  </p>
                  <p className="text-sm text-muted-foreground">{stat.label}</p>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Overall Progress */}
      <Card className="border-0 shadow-none hover:shadow-lg transition-all duration-300">
        <CardHeader>
          <CardTitle className="font-display">Overall Progress</CardTitle>
        </CardHeader>

        <CardContent>
          <ProgressBar progress={totalProgress} size="lg" />
          <p className="text-sm text-muted-foreground mt-2">
            You've completed{" "}
            <span className="font-medium text-foreground">
              {totalProgress}%
            </span>{" "}
            of your enrolled courses
          </p>
        </CardContent>
      </Card>

      {/* Continue Learning */}
      {lastCourse && (
        <Card
          className="shadow-card overflow-hidden border-0 cursor-pointer"
          onClick={() => setSelectedCourse(lastCourse)}
        >
          <div className="flex flex-col md:flex-row">
            <div className="md:w-1/3">
              <img
                src={lastCourse.imageUrl}
                alt={lastCourse.title}
                className="h-48 md:h-full w-full object-cover"
              />
            </div>

            <div className="p-6 flex-1 flex flex-col justify-between">
              <div>
                <p className="text-sm text-primary font-medium mb-1">
                  Continue Learning
                </p>
                <h3 className="font-display text-xl font-semibold mb-2">
                  {lastCourse.title}
                </h3>
                <p className="text-muted-foreground text-sm mb-4">
                  {lastCourse.description}
                </p>
                <ProgressBar progress={lastCourse.progress} />
              </div>

              <Button
                className="gradient-bg text-white mt-4 w-fit"
                onClick={() => setSelectedCourse(lastCourse)}
              >
                <Play className="h-4 w-4 mr-2" />
                Continue
              </Button>
            </div>
          </div>
        </Card>
      )}

      {/* Enrolled Courses */}
      {enrolledCourses.length > 0 ? (
        <div>
          <div className="flex items-center justify-between mb-4">
            <h2 className="font-display text-xl font-semibold">My Courses</h2>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {enrolledCourses.map((course, index) => (
              <div
                key={index}
                className="cursor-pointer"
                onClick={() => setSelectedCourse(course)}
              >
                <CourseCard {...course} />
              </div>
            ))}
          </div>
        </div>
      ) : (
        <Card className="shadow-card border-0">
          <CardContent className="p-12 text-center">
            <BookOpen className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
            <h3 className="font-display text-lg font-semibold mb-2">
              No courses enrolled yet
            </h3>
            <p className="text-muted-foreground mb-4">
              Start your learning journey by exploring our course catalog
            </p>
            <Button
              className="gradient-bg text-white"
              onClick={() => setSelectedCourse(null)}
            >
              Browse Courses
            </Button>
          </CardContent>
        </Card>
      )}
    </div>
  );
}
