import {
  Mail,
  Book,
  CheckCircle,
  FileText,
  BarChart3,
  ArrowLeft,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";

export default function UserDetails() {
  return (
    <div className="p-6 lg:p-8 space-y-8 animate-fade-in max-w-6xl mx-auto">
      {/* Top Navigation */}
      <Link
        to={"/admin/users"}
        className="flex items-center text-sm font-bold text-muted-foreground hover:text-primary transition-colors"
      >
        <ArrowLeft className="h-4 w-4 mr-2" /> Back to Users
      </Link>

      {/* Profile Header Card */}
      <Card className="border-0 shadow-card bg-card overflow-hidden">
        <div className="h-24 bg-gradient-to-r from-primary/20 to-accent/20" />
        <CardContent className="p-6 -mt-12">
          <div className="flex flex-col md:flex-row items-end justify-between gap-6">
            <div className="flex items-end gap-6">
              <div className="h-24 w-24 rounded-2xl bg-card border-4 border-card shadow-lg flex items-center justify-center overflow-hidden">
                <div className="h-full w-full bg-primary/10 flex items-center justify-center text-3xl font-bold text-primary">
                  ID
                </div>
              </div>
              <div className="pb-2">
                <h2 className="text-2xl font-display font-bold">
                  Ibrahim Dakroub
                </h2>
                <p className="text-muted-foreground text-sm flex items-center gap-2">
                  <Mail className="h-3 w-3" /> ibrahim@example.com
                </p>
              </div>
            </div>
            <div className="flex gap-3 pb-2">
              <Button variant="outline" className="rounded-xl border-secondary">
                Disable Account
              </Button>
              <Button className="gradient-bg text-white rounded-xl">
                Reset Password
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Left Column: Stats */}
        <div className="space-y-6">
          <Card className="border-0 shadow-card bg-card">
            <CardHeader>
              <CardTitle className="text-sm font-bold uppercase tracking-widest text-muted-foreground">
                User Metrics
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex justify-between p-3 rounded-xl bg-secondary">
                <span className="text-sm text-muted-foreground flex items-center gap-2">
                  <Book className="h-4 w-4" /> Lessons Done
                </span>
                <span className="font-bold">142</span>
              </div>
              <div className="flex justify-between p-3 rounded-xl bg-secondary">
                <span className="text-sm text-muted-foreground flex items-center gap-2">
                  <BarChart3 className="h-4 w-4" /> Avg. Score
                </span>
                <span className="font-bold text-success">88%</span>
              </div>
              <div className="flex justify-between p-3 rounded-xl bg-secondary">
                <span className="text-sm text-muted-foreground flex items-center gap-2">
                  <CheckCircle className="h-4 w-4" /> Certificates
                </span>
                <span className="font-bold">12</span>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Right Column: Activity Lists */}
        <div className="lg:col-span-2 space-y-6">
          {/* Quiz Attempts */}
          <Card className="border-0 shadow-card bg-card">
            <CardHeader>
              <CardTitle className="font-display">
                Recent Quiz Attempts
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {[
                  {
                    title: "React Fundamentals",
                    date: "2 hours ago",
                    score: "90%",
                  },
                  { title: "Advanced TS", date: "Yesterday", score: "75%" },
                  { title: "Next.js 14 API", date: "Oct 24", score: "100%" },
                ].map((quiz, i) => (
                  <div
                    key={i}
                    className="flex items-center justify-between p-4 rounded-xl border border-secondary hover:border-primary/30 transition-all"
                  >
                    <div>
                      <p className="font-semibold text-sm">{quiz.title}</p>
                      <p className="text-[10px] text-muted-foreground uppercase">
                        {quiz.date}
                      </p>
                    </div>
                    <div className="text-right">
                      <p className="font-display font-bold text-primary">
                        {quiz.score}
                      </p>
                      <p className="text-[10px] text-muted-foreground uppercase font-bold">
                        Score
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Certificates issued */}
          <Card className="border-0 shadow-card bg-card">
            <CardHeader>
              <CardTitle className="font-display">
                Certificates Issued
              </CardTitle>
            </CardHeader>
            <CardContent className="grid sm:grid-cols-2 gap-4">
              {["Mastering React", "UI/UX Foundations"].map((cert) => (
                <div
                  key={cert}
                  className="p-4 rounded-xl bg-secondary flex items-center gap-4"
                >
                  <div className="h-10 w-10 rounded-lg bg-accent/20 flex items-center justify-center text-accent">
                    <FileText className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-sm font-bold">{cert}</p>
                    <button className="text-[10px] text-primary font-bold uppercase hover:underline">
                      View PDF
                    </button>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
