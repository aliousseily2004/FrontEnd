import React, { useEffect, useState } from 'react';
import CourseCard from '@/components/Courses/CourseCard';
import CourseDetail from '@/components/Courses/CourseDetail';
import { Button } from '@/components/ui/button';

interface Course {
  id: number;
  title: string;
  description: string;
  instructor: string;
  imageUrl: string;
  rating: number;
  lessons: number;
  hours: number;
  progress: number;
  fullDescription: string;
  syllabus: any[]; // adapt if you have a Lesson type
}

const MyTeachingCourses: React.FC = () => {
  const [courses, setCourses] = useState<Course[]>([]);
  const [selectedCourse, setSelectedCourse] = useState<Course | null>(null);
  const [loading, setLoading] = useState(true);

  // Fetch courses from backend
useEffect(() => {
  const fetchCourses = async () => {
    try {
      const res = await fetch('https://localhost:5251/api/course'); // your API endpoint
      if (!res.ok) throw new Error('Failed to fetch courses');
      const data = await res.json();

      // Map backend data to front-end format
      const mappedCourses: Course[] = data.map((c: any) => ({
        id: c.id,
        title: c.courseTitle,
        description: c.shortDescription,
        fullDescription: c.fullDescription,
        instructor: c.creatorName ?? 'Unknown', // ✅ use CreatorName here
        imageUrl: c.courseThumbnail ?? '/default-course.png',
        rating: c.rating ?? 0,
        lessons: c.lessonsCount ?? 0,
        hours: c.courseDuration,
        progress: c.progress ?? 0,
        syllabus: c.syllabus ?? [],
      }));

      setCourses(mappedCourses);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  fetchCourses();
}, []);

  if (loading) return <p className="text-center py-20">Loading courses...</p>;

  // Show selected course detail
  if (selectedCourse) {
    return (
      <CourseDetail
        course={selectedCourse}
        onBack={() => setSelectedCourse(null)}
      />
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-10 px-6">
      <div className="max-w-7xl mx-auto flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold text-gray-900">My Teaching Courses</h1>
        <Button
          className="bg-blue-600 hover:bg-blue-700"
          onClick={() => alert('Go to create course page')}
        >
          + Create Course
        </Button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {courses.map((course) => (
          <div key={course.id} onClick={() => setSelectedCourse(course)}>
            <CourseCard {...course} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyTeachingCourses;
