import { useEffect, useMemo, useState } from "react";
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
import { Link, useNavigate, useParams } from "react-router-dom";

type ApiUser = {
  id: string;
  email: string;
  userName?: string;
  firstName?: string;
  lastName?: string;
  createdAt?: string;
};

export default function UserDetails() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();

  const [user, setUser] = useState<ApiUser | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const API_BASE = "https://localhost:5251";

  useEffect(() => {
    let cancelled = false;

    async function load() {
      if (!id) {
        setError("Missing user id in route.");
        setLoading(false);
        return;
      }

      try {
        setLoading(true);
        setError(null);

        const res = await fetch(`${API_BASE}/api/User/${id}`, {
          method: "GET",
          credentials: "include", // IMPORTANT for cookie auth
          headers: { Accept: "application/json" },
        });

        if (!res.ok) {
          const txt = await res.text();
          throw new Error(txt || `Failed to load user (${res.status})`);
        }

        const data = (await res.json()) as ApiUser;
        if (!cancelled) setUser(data);
      } catch (e: any) {
        if (!cancelled) setError(e?.message || "Failed to load user");
      } finally {
        if (!cancelled) setLoading(false);
      }
    }

    load();
    return () => {
      cancelled = true;
    };
  }, [id]);

  const displayName = useMemo(() => {
    if (!user) return "—";
    const name = `${user.firstName ?? ""} ${user.lastName ?? ""}`.trim();
    return name || user.userName || user.email || "User";
  }, [user]);

  const initials = useMemo(() => {
    if (!user) return "??";
    const parts = displayName.split(" ").filter(Boolean);
    const a = parts[0]?.[0] ?? "U";
    const b = parts[1]?.[0] ?? "";
    return (a + b).toUpperCase();
  }, [displayName, user]);

  if (loading) {
    return (
      <div className="p-6 lg:p-8 max-w-6xl mx-auto">
        <Link
          to={"/admin/users"}
          className="flex items-center text-sm font-bold text-muted-foreground hover:text-primary transition-colors"
        >
          <ArrowLeft className="h-4 w-4 mr-2" /> Back to Users
        </Link>
        <div className="mt-6 rounded-2xl border border-border bg-card p-6">
          <p className="text-sm text-muted-foreground">Loading user details…</p>
        </div>
      </div>
    );
  }

  if (error || !user) {
    return (
      <div className="p-6 lg:p-8 max-w-6xl mx-auto space-y-4">
        <Link
          to={"/admin/users"}
          className="flex items-center text-sm font-bold text-muted-foreground hover:text-primary transition-colors"
        >
          <ArrowLeft className="h-4 w-4 mr-2" /> Back to Users
        </Link>

        <div className="rounded-2xl border border-border bg-card p-6">
          <p className="text-sm font-semibold text-red-500">
            Couldn’t load user details
          </p>
          <p className="mt-1 text-sm text-muted-foreground">{error}</p>

          <div className="mt-4 flex gap-2">
            <Button
              variant="outline"
              className="rounded-xl"
              onClick={() => navigate(0)}
            >
              Retry
            </Button>
            <Button
              className="rounded-xl"
              onClick={() => navigate("/admin/users")}
            >
              Go back
            </Button>
          </div>
        </div>
      </div>
    );
  }

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
                  {initials}
                </div>
              </div>
              <div className="pb-2">
                <h2 className="text-2xl font-display font-bold">
                  {displayName}
                </h2>
                <p className="text-muted-foreground text-sm flex items-center gap-2">
                  <Mail className="h-3 w-3" /> {user.email}
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

      {/* Keep your UI sections (still dummy until you add endpoints for metrics/quizzes/certs) */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
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
                <span className="font-bold">—</span>
              </div>
              <div className="flex justify-between p-3 rounded-xl bg-secondary">
                <span className="text-sm text-muted-foreground flex items-center gap-2">
                  <BarChart3 className="h-4 w-4" /> Avg. Score
                </span>
                <span className="font-bold text-success">—</span>
              </div>
              <div className="flex justify-between p-3 rounded-xl bg-secondary">
                <span className="text-sm text-muted-foreground flex items-center gap-2">
                  <CheckCircle className="h-4 w-4" /> Certificates
                </span>
                <span className="font-bold">—</span>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="lg:col-span-2 space-y-6">
          <Card className="border-0 shadow-card bg-card">
            <CardHeader>
              <CardTitle className="font-display">
                Recent Quiz Attempts
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                Add an endpoint like{" "}
                <span className="font-semibold">
                  GET /api/User/{id}/quiz-attempts
                </span>{" "}
                to show real data.
              </p>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-card bg-card">
            <CardHeader>
              <CardTitle className="font-display">
                Certificates Issued
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                Add an endpoint like{" "}
                <span className="font-semibold">
                  GET /api/User/{id}/certificates
                </span>{" "}
                to show real data.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
