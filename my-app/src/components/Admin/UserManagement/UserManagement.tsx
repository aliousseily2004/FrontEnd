import { useEffect, useMemo, useState } from "react";
import {
  Search,
  Filter,
  MoreHorizontal,
  Eye,
  ChevronDown,
  Download,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { useNavigate } from "react-router-dom";

type ApiUser = {
  id: string;
  userName?: string;
  email: string;
  firstName?: string;
  lastName?: string;
  roles?: string[]; // if your API returns roles
  role?: string; // if your API returns a single role
  isDisabled?: boolean; // if your API has this
  status?: string; // if your API has this
  createdAt?: string; // if your API has this
  joined?: string; // if your API has this
};

export default function UserManagement() {
  const navigate = useNavigate();

  const [searchTerm, setSearchTerm] = useState("");
  const [users, setUsers] = useState<ApiUser[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // ✅ Change this if you prefer env:
  const API = "https://localhost:7126";

  useEffect(() => {
    let cancelled = false;

    async function loadUsers() {
      try {
        setLoading(true);
        setError(null);

        const res = await fetch(`${API}/api/User`, {
          method: "GET",
          credentials: "include", // IMPORTANT if you use cookie token
          headers: { Accept: "application/json" },
        });

        if (!res.ok) {
          const txt = await res.text();
          throw new Error(txt || `Failed to fetch users (${res.status})`);
        }

        const data = await res.json();
        if (!cancelled) setUsers(Array.isArray(data) ? data : data.items ?? []);
      } catch (e: any) {
        if (!cancelled) setError(e?.message || "Failed to load users");
      } finally {
        if (!cancelled) setLoading(false);
      }
    }

    loadUsers();
    return () => {
      cancelled = true;
    };
  }, []);

  const filteredUsers = useMemo(() => {
    const q = searchTerm.trim().toLowerCase();
    if (!q) return users;

    return users.filter((u) => {
      const fullName =
        `${u.firstName ?? ""} ${u.lastName ?? ""}`.trim() || u.userName || "";
      return (
        u.id?.toLowerCase().includes(q) ||
        u.email?.toLowerCase().includes(q) ||
        fullName.toLowerCase().includes(q)
      );
    });
  }, [users, searchTerm]);

  function displayName(u: ApiUser) {
    const name = `${u.firstName ?? ""} ${u.lastName ?? ""}`.trim();
    return name || u.userName || u.email || "User";
  }

  function displayRole(u: ApiUser) {
    if (u.role) return u.role;
    if (u.roles?.length) return u.roles[0];
    return "User";
  }

  function displayStatus(u: ApiUser) {
    if (typeof u.isDisabled === "boolean")
      return u.isDisabled ? "Disabled" : "Active";
    if (u.status) return u.status;
    return "Active";
  }

  function displayJoined(u: ApiUser) {
    return u.joined || u.createdAt || "—";
  }

  return (
    <div className="p-6 lg:p-8 space-y-6 animate-fade-in">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="font-display text-2xl lg:text-3xl font-bold">
            User Management
          </h1>
          <p className="text-muted-foreground text-sm">
            Manage identity, roles, and account status
          </p>
        </div>
        <Button className="gradient-bg text-white rounded-xl">
          <Download className="h-4 w-4 mr-2" /> Export Users
        </Button>
      </div>

      {/* Stats (optional: you can compute from users later) */}
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {[
          { label: "Total Users", value: String(users.length) },
          {
            label: "Active",
            value: String(
              users.filter((u) => displayStatus(u) === "Active").length
            ),
          },
          {
            label: "Disabled",
            value: String(
              users.filter((u) => displayStatus(u) === "Disabled").length
            ),
          },
          {
            label: "Admins",
            value: String(
              users.filter((u) => displayRole(u) === "Admin").length
            ),
          },
        ].map((x) => (
          <Card key={x.label} className="border-0 shadow-card bg-card">
            <CardContent className="p-5">
              <p className="text-xs text-muted-foreground uppercase tracking-widest font-bold">
                {x.label}
              </p>
              <p className="mt-2 text-2xl font-display font-bold">{x.value}</p>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Filters Bar */}
      <Card className="border-0 shadow-card bg-card">
        <CardContent className="p-4 flex flex-wrap items-center gap-4">
          <div className="relative flex-1 min-w-[280px]">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <input
              className="w-full bg-secondary border-0 rounded-xl pl-10 pr-4 py-2.5 text-sm outline-none focus:ring-2 focus:ring-primary/20"
              placeholder="Search by name, email or ID..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>

          <Button
            variant="outline"
            className="rounded-xl border-secondary bg-secondary/50"
          >
            <Filter className="h-4 w-4 mr-2" /> Filter{" "}
            <ChevronDown className="ml-2 h-4 w-4" />
          </Button>
        </CardContent>
      </Card>

      {/* Users Table */}
      <Card className="border-0 shadow-card bg-card overflow-hidden">
        <div className="overflow-x-auto">
          <div className="flex items-center justify-between px-6 py-4 border-b border-secondary/50">
            <p className="text-sm text-muted-foreground">
              {loading ? (
                "Loading users..."
              ) : (
                <>
                  Showing{" "}
                  <span className="font-semibold text-foreground">
                    {filteredUsers.length}
                  </span>{" "}
                  users
                </>
              )}
            </p>

            {error && <p className="text-sm text-red-500">{error}</p>}
          </div>

          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-secondary/50 text-[11px] font-bold text-muted-foreground uppercase tracking-widest">
                <th className="px-6 py-4">User</th>
                <th className="px-6 py-4">Role</th>
                <th className="px-6 py-4">Status</th>
                <th className="px-6 py-4">Joined Date</th>
                <th className="px-6 py-4 text-right">Actions</th>
              </tr>
            </thead>

            <tbody className="divide-y divide-secondary/50">
              {!loading &&
                filteredUsers.map((user) => {
                  const name = displayName(user);
                  const role = displayRole(user);
                  const status = displayStatus(user);

                  return (
                    <tr
                      key={user.id}
                      className="hover:bg-secondary/30 transition-colors group"
                    >
                      <td
                        className="px-6 py-4 cursor-pointer"
                        onClick={() => navigate(`/admin/users/${user.id}`)} // ✅ real id
                      >
                        <div className="flex items-center gap-3">
                          <div className="h-9 w-9 rounded-full bg-primary/10 flex items-center justify-center font-bold text-primary text-xs">
                            {name.charAt(0).toUpperCase()}
                          </div>
                          <div>
                            <p className="font-semibold text-sm">{name}</p>
                            <p className="text-xs text-muted-foreground">
                              {user.email}
                            </p>
                          </div>
                        </div>
                      </td>

                      <td className="px-6 py-4 text-sm font-medium">{role}</td>

                      <td className="px-6 py-4">
                        <span
                          className={`px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase ${
                            status === "Active"
                              ? "bg-success/10 text-success"
                              : "bg-muted text-muted-foreground"
                          }`}
                        >
                          {status}
                        </span>
                      </td>

                      <td className="px-6 py-4 text-sm text-muted-foreground">
                        {displayJoined(user)}
                      </td>

                      <td className="px-6 py-4 text-right">
                        <div className="flex justify-end gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                          <Button
                            size="icon"
                            variant="ghost"
                            className="h-8 w-8 text-primary hover:bg-primary/10"
                          >
                            <Eye className="h-4 w-4" />
                          </Button>
                          <Button
                            size="icon"
                            variant="ghost"
                            className="h-8 w-8 text-muted-foreground"
                          >
                            <MoreHorizontal className="h-4 w-4" />
                          </Button>
                        </div>
                      </td>
                    </tr>
                  );
                })}

              {!loading && filteredUsers.length === 0 && (
                <tr>
                  <td
                    className="px-6 py-6 text-sm text-muted-foreground"
                    colSpan={5}
                  >
                    No users found.
                  </td>
                </tr>
              )}

              {loading && (
                <tr>
                  <td
                    className="px-6 py-6 text-sm text-muted-foreground"
                    colSpan={5}
                  >
                    Loading...
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </Card>
    </div>
  );
}
