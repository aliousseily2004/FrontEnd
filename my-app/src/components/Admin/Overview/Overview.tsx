import {
  Users,
  BookOpen,
  Layers,
  FileQuestion,
  Activity,
  Award,
  Plus,
  ArrowUpRight,
  MoreHorizontal,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function AdminDashboard() {
  const stats = [
    {
      label: "Total Users",
      value: "1,284",
      icon: Users,
      trend: "+12%",
      up: true,
    },
    { label: "Courses", value: "24", icon: BookOpen, trend: "+2", up: true },
    { label: "Lessons", value: "156", icon: Layers, trend: "+8%", up: true },
    {
      label: "Quizzes",
      value: "48",
      icon: FileQuestion,
      trend: "Stable",
      up: true,
    },
    {
      label: "Attempts",
      value: "8,432",
      icon: Activity,
      trend: "+24%",
      up: true,
    },
    {
      label: "Certificates",
      value: "312",
      icon: Award,
      trend: "+18%",
      up: true,
    },
  ];

  return (
    <div className="p-6 lg:p-8 space-y-10 animate-fade-in">
      {/* ================= HEADER ================= */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div>
          <h1 className="font-display text-2xl lg:text-3xl font-bold text-foreground">
            Admin Dashboard
          </h1>
          <p className="text-muted-foreground mt-1">
            System overview and platform health
          </p>
        </div>

        <div className="flex items-center gap-3">
          <Button className="gradient-bg text-white rounded-xl shadow-lg shadow-primary/20">
            <Plus className="h-4 w-4 mr-2" />
            Add User
          </Button>
        </div>
      </div>

      {/* ================= KPI GRID ================= */}
      <div className="grid gap-4 grid-cols-2 md:grid-cols-3 lg:grid-cols-6">
        {stats.map((stat) => (
          <Card
            key={stat.label}
            className=" shadow-card bg-card hover:translate-y-[-2px] transition-transform"
          >
            <CardContent className="p-5">
              <div className="flex flex-col gap-3">
                <div className="flex items-center justify-between">
                  <div className="p-2.5 rounded-xl bg-secondary text-primary">
                    <stat.icon className="h-5 w-5" />
                  </div>
                  <span
                    className={`text-[10px] font-bold px-2 py-1 rounded-full ${
                      stat.up
                        ? "bg-success/10 text-success"
                        : "bg-muted text-muted-foreground"
                    }`}
                  >
                    {stat.trend}
                  </span>
                </div>
                <div>
                  <p className="text-2xl font-display font-bold">
                    {stat.value}
                  </p>
                  <p className="text-xs text-muted-foreground font-medium uppercase tracking-wider">
                    {stat.label}
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* ================= ACTIVITY ================= */}
      <div className="grid lg:grid-cols-3 gap-6">
        {/* New Users (Takes 1/3) */}
        <Card className=" bg-card lg:col-span-1">
          <CardHeader className="flex flex-row items-center justify-between">
            <CardTitle className="font-display text-lg">
              New Registrations
            </CardTitle>
            <button className="text-xs text-primary font-bold">See all</button>
          </CardHeader>
          <CardContent className="space-y-4">
            {[
              { name: "Sarah Connor", email: "s.connor@sky.net", img: "SC" },
              { name: "John Smith", email: "jsmith@mail.com", img: "JS" },
              { name: "Elena Gilbert", email: "elena.g@test.com", img: "EG" },
            ].map((u) => (
              <div
                key={u.email}
                className="flex items-center gap-3 p-2 rounded-xl hover:bg-secondary transition-colors cursor-pointer group"
              >
                <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold text-xs">
                  {u.img}
                </div>
                <div className="flex-1 min-w-0">
                  <p className="font-semibold text-sm truncate group-hover:text-primary transition-colors">
                    {u.name}
                  </p>
                  <p className="text-[11px] text-muted-foreground truncate">
                    {u.email}
                  </p>
                </div>
                <ArrowUpRight className="h-4 w-4 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
            ))}
          </CardContent>
        </Card>

        {/* Latest Attempts (Takes 2/3) */}
        <Card className=" bg-card lg:col-span-2">
          <CardHeader className="flex flex-row items-center justify-between">
            <CardTitle className="font-display text-lg">
              Platform Activity
            </CardTitle>
            <div className="flex gap-2">
              <div className="h-2 w-2 rounded-full bg-success animate-pulse" />
              <span className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest">
                Live Updates
              </span>
            </div>
          </CardHeader>

          <CardContent>
            <div className="overflow-x-auto">
              <table className="w-full text-left">
                <thead>
                  <tr className="text-[11px] font-bold text-muted-foreground uppercase tracking-wider group hover:bg-secondary/50 transition-colors">
                    <th className="pb-3 pl-2">Course/Quiz</th>
                    <th className="pb-3">User</th>
                    <th className="pb-3">Score</th>
                    <th className="pb-3 text-right pr-2">Action</th>
                  </tr>
                </thead>
                <tbody className="text-sm">
                  {[
                    {
                      quiz: "React Basics",
                      user: "John D.",
                      score: "95%",
                      ok: true,
                    },
                    {
                      quiz: "TypeScript Pro",
                      user: "Ahmad K.",
                      score: "40%",
                      ok: false,
                    },
                    {
                      quiz: "Tailwind UI",
                      user: "Laila M.",
                      score: "100%",
                      ok: true,
                    },
                  ].map((a, i) => (
                    <tr
                      key={i}
                      className="border-b last:border-0 border-secondary group hover:bg-secondary/50 transition-colors"
                    >
                      <td className="py-4 pl-2 font-medium">{a.quiz}</td>
                      <td className="py-4 text-muted-foreground">{a.user}</td>
                      <td className="py-4">
                        <span
                          className={`px-2 py-1 rounded-md text-xs font-bold ${
                            a.ok
                              ? "bg-success/10 text-success"
                              : "bg-warning/10 text-warning"
                          }`}
                        >
                          {a.score}
                        </span>
                      </td>
                      <td className="py-4 text-right pr-2">
                        <button
                          title="mh"
                          className="p-1 hover:bg-secondary rounded-lg transition-colors"
                        >
                          <MoreHorizontal className="h-4 w-4 text-muted-foreground" />
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* ================= QUICK ACTIONS ================= */}
      <div>
        <h2 className="font-display text-xl font-semibold mb-4">
          Quick Management
        </h2>

        <div className="grid sm:grid-cols-3 gap-4">
          {[
            {
              label: "Manage Users",
              icon: Users,
              desc: "Edit roles and access",
            },
            {
              label: "Manage Courses",
              icon: BookOpen,
              desc: "Update syllabus content",
            },
            {
              label: "Certificates",
              icon: Award,
              desc: "Verify and issue awards",
            },
          ].map((item) => (
            <button
              key={item.label}
              className="flex items-start gap-4 p-6 rounded-2xl bg-card shadow-card hover:shadow-lg hover:translate-y-[-4px] transition-all text-left group"
            >
              <div className="p-3 rounded-xl bg-secondary text-primary group-hover:gradient-bg group-hover:text-primary transition-all">
                <item.icon className="h-6 w-6" />
              </div>
              <div className="flex-1">
                <span className="block font-bold group-hover:text-primary transition-colors">
                  {item.label}
                </span>
                <span className="text-xs text-muted-foreground mt-1">
                  {item.desc}
                </span>
              </div>
              <ArrowUpRight className="h-4 w-4 text-muted-foreground group-hover:text-primary transition-colors" />
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
