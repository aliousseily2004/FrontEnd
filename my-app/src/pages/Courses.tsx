import React, { useState } from "react";
import { allCourses } from "@/components/Courses/CourseData";
import type { Course } from "@/components/Courses/CourseData";
import CourseCard from "@/components/Courses/CourseCard";
import CourseDetail from "@/components/Courses/CourseDetail";

const Courses: React.FC = () => {
  const [selectedCourse, setSelectedCourse] = useState<Course | null>(null);
  const [search, setSearch] = useState("");
  const [filterRating, setFilterRating] = useState<number | "All">("All");
  const [filterDuration, setFilterDuration] = useState<
    "All" | "Short" | "Medium" | "Long"
  >("All");

  const filteredCourses = allCourses.filter((course) => {
    const matchesSearch =
      course.title.toLowerCase().includes(search.toLowerCase()) ||
      course.instructor.toLowerCase().includes(search.toLowerCase());

    const matchesRating =
      filterRating === "All" || course.rating === filterRating;

    let matchesDuration = true;
    if (filterDuration === "Short") matchesDuration = course.hours < 5;
    else if (filterDuration === "Medium")
      matchesDuration = course.hours >= 5 && course.hours <= 10;
    else if (filterDuration === "Long") matchesDuration = course.hours > 10;

    return matchesSearch && matchesRating && matchesDuration;
  });

  if (selectedCourse) {
    return (
      <CourseDetail
        course={selectedCourse}
        onBack={() => setSelectedCourse(null)}
      />
    );
  }

  return (
    <div className="mt-12 min-h-screen bg-background px-4 pb-12 text-foreground">
      <div className="mx-auto mb-8 max-w-7xl">
        <h1 className="mb-2 text-3xl font-bold">My Learning Dashboard</h1>
        <p className="text-muted-foreground">
          Continue your journey to mastery.
        </p>
      </div>

      {/* Filters Section */}
      <div className="mx-auto mb-10 max-w-7xl rounded-2xl border border-border bg-card p-5 shadow-sm">
        <div className="flex flex-col items-center justify-between gap-5 md:flex-row">
          <div className="w-full md:flex-1">
            <label htmlFor="courseSearch" className="sr-only">
              Search by course title or instructor
            </label>
            <input
              id="courseSearch"
              type="text"
              placeholder="Search by course title or instructor..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="h-12 w-full rounded-xl border border-border bg-background px-4 text-sm outline-none transition focus:ring-2 focus:ring-ring"
            />
          </div>

          <div className="flex w-full gap-3 md:w-auto">
            <label className="sr-only" htmlFor="filterRating">
              Filter by rating
            </label>
            <select
              id="filterRating"
              value={filterRating}
              onChange={(e) =>
                setFilterRating(
                  e.target.value === "All" ? "All" : Number(e.target.value)
                )
              }
              className="h-12 w-full rounded-xl border border-border bg-background px-4 text-sm outline-none transition focus:ring-2 focus:ring-ring md:w-auto"
            >
              <option value="All">All Ratings</option>
              <option value={5}>5 ⭐ Stars</option>
              <option value={4}>4 ⭐ Stars</option>
              <option value={3}>3 ⭐ Stars</option>
            </select>

            <label className="sr-only" htmlFor="filterDuration">
              Filter by duration
            </label>
            <select
              id="filterDuration"
              value={filterDuration}
              onChange={(e) =>
                setFilterDuration(
                  e.target.value as "All" | "Short" | "Medium" | "Long"
                )
              }
              className="h-12 w-full rounded-xl border border-border bg-background px-4 text-sm outline-none transition focus:ring-2 focus:ring-ring md:w-auto"
            >
              <option value="All">All Durations</option>
              <option value="Short">Short (&lt; 5h)</option>
              <option value="Medium">Medium (5–10h)</option>
              <option value="Long">Long (&gt; 10h)</option>
            </select>
          </div>
        </div>
      </div>

      {/* Course Cards Grid */}
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
        {filteredCourses.map((course, index) => (
          <div
            key={index}
            onClick={() => setSelectedCourse(course)}
            className="cursor-pointer transition-transform hover:scale-[1.02]"
          >
            {/* Optional wrapper to ensure cards look consistent in themed UI */}
            <div className="rounded-2xl border border-border bg-card">
              <CourseCard {...course} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Courses;
