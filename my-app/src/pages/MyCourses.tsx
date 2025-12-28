import React, { useState } from "react";
import CourseCard from "@/components/Courses/CourseCard";
import CourseDetail from "@/components/Courses/CourseDetail";

interface Lesson {
  id: number;
  title: string;
  duration: string;
  isCompleted: boolean;
}

interface Course {
  title: string;
  description: string;
  instructor: string;
  imageUrl: string;
  rating: number;
  lessons: number;
  hours: number;
  progress: number;
  fullDescription: string;
  syllabus: Lesson[];
}

const MyCourses: React.FC = () => {
  const [selectedCourse, setSelectedCourse] = useState<Course | null>(null);

  // Only 2 courses
  const courses: Course[] = [
    {
      title: "React for Beginners",
      description: "Learn React from scratch and build amazing web apps.",
      instructor: "John Doe",
      imageUrl:
        "https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg?auto=compress&cs=tinysrgb&w=400",
      rating: 5,
      lessons: 5,
      hours: 4,
      progress: 50,
      fullDescription:
        "This course provides a comprehensive introduction to React, the popular JavaScript library for building user interfaces. You will learn about components, state management, and hooks while building a real-world project.",
      syllabus: [
        {
          id: 1,
          title: "Course Orientation & Setup",
          duration: "15 min",
          isCompleted: true,
        },
        {
          id: 2,
          title: "JSX and Rendering Elements",
          duration: "45 min",
          isCompleted: true,
        },
        {
          id: 3,
          title: "Components and Props",
          duration: "60 min",
          isCompleted: false,
        },
        {
          id: 4,
          title: "Handling State with useState",
          duration: "50 min",
          isCompleted: false,
        },
        {
          id: 5,
          title: "Final Project: Task Tracker",
          duration: "120 min",
          isCompleted: false,
        },
      ],
    },
    {
      title: "Tailwind CSS Essentials",
      description:
        "Learn how to style your apps beautifully with Tailwind CSS.",
      instructor: "Alice Brown",
      imageUrl:
        "https://images.pexels.com/photos/1181312/pexels-photo-1181312.jpeg?auto=compress&cs=tinysrgb&w=400",
      rating: 5,
      lessons: 6,
      hours: 8,
      progress: 70,
      fullDescription:
        "Tailwind CSS is a utility-first CSS framework. Learn how to build modern, responsive designs without ever leaving your HTML files. We will cover the configuration, customization, and deployment.",
      syllabus: [
        {
          id: 1,
          title: "Installation and Configuration",
          duration: "30 min",
          isCompleted: true,
        },
        {
          id: 2,
          title: "The Utility-First Workflow",
          duration: "45 min",
          isCompleted: true,
        },
        {
          id: 3,
          title: "Responsive Design with Breakpoints",
          duration: "60 min",
          isCompleted: true,
        },
        {
          id: 4,
          title: "Hover, Focus, and Other States",
          duration: "40 min",
          isCompleted: true,
        },
        {
          id: 5,
          title: "Building a Portfolio Landing Page",
          duration: "120 min",
          isCompleted: false,
        },
        {
          id: 6,
          title: "Optimization for Production",
          duration: "25 min",
          isCompleted: false,
        },
      ],
    },
  ];

  // Show course detail if selected
  if (selectedCourse) {
    return (
      <CourseDetail
        course={selectedCourse}
        onBack={() => setSelectedCourse(null)}
      />
    );
  }

  return (
    <div className="min-h-screen bg-background px-4 pb-12 mt-12">
      <div className="max-w-7xl mx-auto mb-8">
        <h1 className="text-3xl font-bold text-card mb-2">My Courses</h1>
        <p className="text-gray-500">
          Continue learning from your enrolled courses.
        </p>
      </div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
        {courses.map((course, index) => (
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
  );
};

export default MyCourses;
