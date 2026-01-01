import {
  BookOpen,
  Users,
  HelpCircle,
  Award,
  PlusCircle,
  ChevronRight,
  TrendingUp,
} from "lucide-react";
import { Link } from "react-router-dom";

const stats = [
  { label: "My Courses", value: 12, icon: BookOpen, trend: "+2 this month" },
  { label: "Students", value: 340, icon: Users, trend: "+12% growth" },
  { label: "Quizzes", value: 28, icon: HelpCircle, trend: "4 pending review" },
  { label: "Certificates", value: 96, icon: Award, trend: "View all" },
];

const recentCourses = [
  { id: 1, title: "React Fundamentals", students: 120, status: "Published", revenue: "$1,200" },
  { id: 2, title: "Spring Boot Basics", students: 85, status: "Draft", revenue: "$0" },
  { id: 3, title: "Advanced TypeScript", students: 64, status: "Published", revenue: "$840" },
];

export default function TeacherDashboard() {
  return (
    <div className="space-y-10 p-4 lg:p-0">
      {/* Header with Glassmorphism / Modern feel */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6">
        <div>
          <h1 className="text-3xl font-display font-bold tracking-tight">
            Teacher <span className="gradient-text">Dashboard</span> 👋
          </h1>
          <p className="text-muted-foreground mt-1">
            Manage your curriculum and track student performance.
          </p>
        </div>

        <Link
          to="/teacher/CreateCourse"
          className="gradient-bg text-white px-6 py-3 rounded-xl font-bold 
          flex items-center gap-2 shadow-lg shadow-primary/20 hover:scale-[1.02] transition-all"
        >
          <PlusCircle className="w-5 h-5" />
          Create Course
        </Link>
      </div>

      {/* Stats cards - Grid with better visual hierarchy */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat) => (
          <div
            key={stat.label}
            className="group bg-card border border-border/50 rounded-2xl p-6 transition-all hover:border-primary/50 hover:shadow-md"
          >
            <div className="flex items-start justify-between">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                <stat.icon className="w-6 h-6" />
              </div>
              <span className="text-[10px] font-bold uppercase tracking-wider text-muted-foreground bg-muted px-2 py-1 rounded">
                Stats
              </span>
            </div>
            <div className="mt-4">
              <p className="text-3xl font-bold tracking-tight">{stat.value}</p>
              <p className="text-sm font-medium text-muted-foreground">{stat.label}</p>
            </div>
            <p className="mt-3 text-xs text-primary font-semibold flex items-center gap-1">
              <TrendingUp className="w-3 h-3" /> {stat.trend}
            </p>
          </div>
        ))}
      </div>

      {/* Main Grid: Content + Actions */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        
        {/* Recent courses Table-style */}
        <div className="lg:col-span-2 bg-card border border-border/50 rounded-2xl overflow-hidden shadow-sm">
          <div className="p-6 border-b flex items-center justify-between">
            <h2 className="font-display font-bold text-xl">Recent Courses</h2>
            <Link to="/teacher/courses" className="text-sm text-primary font-semibold hover:underline">
              See all
            </Link>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left">
              <thead className="bg-muted/50 text-xs uppercase text-muted-foreground font-semibold">
                <tr>
                  <th className="px-6 py-4">Course Title</th>
                  <th className="px-6 py-4">Students</th>
                  <th className="px-6 py-4">Status</th>
                  <th className="px-6 py-4 text-right">Action</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border/50">
                {recentCourses.map((course) => (
                  <tr key={course.id} className="hover:bg-muted/30 transition-colors group">
                    <td className="px-6 py-4 font-medium">{course.title}</td>
                    <td className="px-6 py-4 text-sm text-muted-foreground">{course.students}</td>
                    <td className="px-6 py-4">
                      <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-bold ${
                        course.status === "Published" 
                        ? "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400" 
                        : "bg-muted text-muted-foreground"
                      }`}>
                        {course.status}
                      </span>
                    </td>
                    <td className="px-6 py-4 text-right">
                      <button className="p-2 rounded-lg hover:bg-background opacity-0 group-hover:opacity-100 transition-opacity">
                        <ChevronRight className="w-4 h-4 text-primary" />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Quick Actions - Sidebar style */}
        <div className="space-y-6">
          <div className="bg-card border border-border/50 rounded-2xl p-6 shadow-sm">
            <h2 className="font-display font-bold text-xl mb-6">Quick Actions</h2>
            <div className="grid gap-3">
              {[
                { to: "/teacher/CreateCourse", label: "Create Course", icon: PlusCircle, primary: true },
                { to: "/teacher/students", label: "Manage Students", icon: Users },
                { to: "/teacher/quizzes", label: "Quiz Bank", icon: HelpCircle },
                { to: "/teacher/settings", label: "Instructor Settings", icon: Award },
              ].map((action, i) => (
                <Link
                  key={i}
                  to={action.to}
                  className={`flex items-center gap-3 px-4 py-3 rounded-xl font-medium transition-all ${
                    action.primary 
                    ? "bg-primary/10 text-primary hover:bg-primary hover:text-white" 
                    : "hover:bg-muted"
                  }`}
                >
                  <action.icon className="w-5 h-5" />
                  {action.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Tips / Announcement card */}
          <div className="gradient-bg rounded-2xl p-6 text-white relative overflow-hidden">
             <div className="relative z-10">
               <h3 className="font-bold mb-2">Teaching Tip</h3>
               <p className="text-sm opacity-90 leading-relaxed">
                 Courses with at least 5 quizzes see 40% higher student completion rates!
               </p>
             </div>
             <HelpCircle className="absolute -bottom-4 -right-4 w-24 h-24 opacity-10 rotate-12" />
          </div>
        </div>
      </div>
    </div>
  );
}