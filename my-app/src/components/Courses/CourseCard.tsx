import React from "react";
import { BookOpen, Clock, Star, ArrowRight } from "lucide-react";

interface CourseCardProps {
  title: string;
  description: string;
  instructor: string;
  imageUrl: string;
  rating: number;
  lessons: number;
  hours: number;
  progress: number;
}

const CourseCard: React.FC<CourseCardProps> = ({
  title,
  description,
  instructor,
  imageUrl,
  rating,
  lessons,
  hours,
  progress,
}) => {
  return (
    <div className="group bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden flex flex-col">
      {/* Image Container */}
      <div className="relative overflow-hidden">
        <img
          className="w-full h-48 object-cover transform group-hover:scale-105 transition-transform duration-500"
          src={imageUrl}
          alt={title}
        />
        <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full shadow-sm">
          <span className="text-xs font-semibold text-blue-600">
            {instructor}
          </span>
        </div>
      </div>

      <div className="p-5 flex flex-col grow">
        <div className="flex items-center gap-1 mb-2">
          {[...Array(5)].map((_, i) => (
            <Star
              key={i}
              size={14}
              fill={i < rating ? "#f59e0b" : "none"}
              className={i < rating ? "text-yellow-500" : "text-gray-300"}
            />
          ))}
          <span className="text-xs text-gray-400 ml-1">({rating}.0)</span>
        </div>

        <h2 className="text-xl font-bold text-gray-800 mb-2 line-clamp-1 group-hover:text-blue-600 transition-colors">
          {title}
        </h2>
        <p className="text-gray-500 text-sm mb-4 line-clamp-2 leading-relaxed">
          {description}
        </p>

        {/* Stats Row */}
        <div className="flex items-center gap-4 text-gray-500 text-xs font-medium mb-5">
          <div className="flex items-center gap-1.5">
            <BookOpen size={14} className="text-blue-500" />
            {lessons} Lessons
          </div>
          <div className="flex items-center gap-1.5">
            <Clock size={14} className="text-blue-500" />
            {hours}h total
          </div>
        </div>

        {/* Progress Section */}
        <div className="mt-auto">
          <div className="flex justify-between items-center mb-1.5">
            <span className="text-xs font-semibold text-gray-700">
              Course Progress
            </span>
            <span className="text-xs font-bold text-blue-600">{progress}%</span>
          </div>
          <div className="w-full bg-gray-100 rounded-full h-2">
            <div
              className="bg-blue-500 h-2 rounded-full transition-all duration-1000"
              style={{ width: `${progress}%` }}
            ></div>
          </div>

          <button className="mt-5 w-full bg-gray-900 hover:bg-blue-600 text-white font-semibold py-3 px-4 rounded-xl transition-colors flex items-center justify-center gap-2 group/btn">
            Continue Learning
            <ArrowRight
              size={18}
              className="group-hover/btn:translate-x-1 transition-transform"
            />
          </button>
        </div>
      </div>
    </div>
  );
};

export default CourseCard;
