import React, { useState } from "react";
// Importing the types and data from your external file
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

  // Logic for filtering courses remains the same, but uses the imported 'allCourses'
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

  // ✅ COURSE DETAIL VIEW
  if (selectedCourse) {
    return (
      <CourseDetail
        course={selectedCourse}
        onBack={() => setSelectedCourse(null)}
      />
    );
  }

  // ✅ DASHBOARD GRID VIEW
  return (
    <div className="mt-12 px-4 pb-12 min-h-screen bg-gray-50/50">
      <div className="max-w-7xl mx-auto mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">
          My Learning Dashboard
        </h1>
        <p className="text-gray-500">Continue your journey to mastery.</p>
      </div>

      {/* Filters Section */}
      <div className="max-w-7xl mx-auto bg-white p-5 rounded-2xl shadow-sm border border-gray-100 mb-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-5">
          <div className="w-full md:flex-1">
            <input
              type="text"
              placeholder="Search by course title or instructor..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full pl-4 pr-4 py-3 bg-gray-50 border-none rounded-xl focus:ring-2 focus:ring-blue-500 outline-none"
            />
          </div>

          <div className="flex gap-3 w-full md:w-auto">
            <select
              title="filterRating"
              value={filterRating}
              onChange={(e) =>
                setFilterRating(
                  e.target.value === "All" ? "All" : Number(e.target.value)
                )
              }
              className="px-4 py-3 bg-gray-50 rounded-xl focus:ring-2 focus:ring-blue-500"
            >
              <option value="All">All Ratings</option>
              <option value={5}>5 ⭐ Stars</option>
              <option value={4}>4 ⭐ Stars</option>
              <option value={3}>3 ⭐ Stars</option>
            </select>

            <select
              title="filterDuration"
              value={filterDuration}
              onChange={(e) =>
                setFilterDuration(
                  e.target.value as "All" | "Short" | "Medium" | "Long"
                )
              }
              className="px-4 py-3 bg-gray-50 rounded-xl focus:ring-2 focus:ring-blue-500"
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
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredCourses.map((course, index) => (
          <div
            key={index}
            onClick={() => setSelectedCourse(course)}
            className="cursor-pointer transition-transform hover:scale-[1.02]"
          >
            <CourseCard {...course} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Courses;
