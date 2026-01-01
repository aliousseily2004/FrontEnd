import React, { useState } from 'react';
import CourseCard from '@/components/Courses/CourseCard';
import CourseDetail from '@/components/Courses/CourseDetail';
import { Button } from '@/components/ui/button';
import { allCourses } from '@/components/Courses/CourseData';

const MyTeachingCourses: React.FC = () => {
  const [selectedCourse, setSelectedCourse] = useState<string | null>(null);

  // Static example courses for teacher
  const teacherCourses = [
    {
      ...allCourses[0],
      instructor: 'Teacher Example',
      title: 'React for Beginners',
    },
    {
      ...allCourses[1],
      instructor: 'Teacher Example',
      title: 'TypeScript Mastery',
    },
    {
      ...allCourses[2],
      instructor: 'Teacher Example',
      title: 'Tailwind CSS Essentials',
    },
  ];

  if (selectedCourse) {
    const course = teacherCourses.find(c => c.title === selectedCourse);
    if (!course) return <p>Course not found</p>;
    return <CourseDetail course={course} onBack={() => setSelectedCourse(null)} />;
  }

  return (
    <div className="min-h-screen bg-gray-50 py-10 px-6">
      <div className="max-w-7xl mx-auto flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold text-gray-900">My Teaching Courses</h1>
        <Button className="bg-blue-600 hover:bg-blue-700" onClick={() => alert('Go to create course page')}>
          + Create Course
        </Button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {teacherCourses.map(course => (
          <div key={course.title} onClick={() => setSelectedCourse(course.title)}>
            <CourseCard {...course} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyTeachingCourses;