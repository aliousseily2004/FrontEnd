import { useState } from "react";
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

export default function UserManagement() {
  const [searchTerm, setSearchTerm] = useState("");

  const dummyUsers = [
    {
      id: "1",
      name: "john D.",
      email: "john@example.com",
      role: "Admin",
      status: "Active",
      joined: "2023-10-12",
    },
    {
      id: "2",
      name: "Sarah Connor",
      email: "sarah.c@sky.net",
      role: "Student",
      status: "Active",
      joined: "2023-11-05",
    },
    {
      id: "3",
      name: "John Smith",
      email: "jsmith@gmail.com",
      role: "Instructor",
      status: "Disabled",
      joined: "2023-08-20",
    },
  ];
  const navigate = useNavigate();

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

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {[
          { label: "Total Users", value: "1,284" },
          { label: "Active", value: "1,102" },
          { label: "Disabled", value: "182" },
          { label: "Admins", value: "6" },
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
          <div className="flex flex-wrap gap-2">
            {["All", "Admin", "Instructor", "Student"].map((r) => (
              <button
                key={r}
                className="px-3 py-2 rounded-xl text-xs font-semibold bg-secondary hover:bg-secondary/70 transition"
              >
                {r}
              </button>
            ))}
          </div>

          <div className="flex flex-wrap gap-2">
            {["All Status", "Active", "Disabled"].map((s) => (
              <button
                key={s}
                className="px-3 py-2 rounded-xl text-xs font-semibold bg-secondary hover:bg-secondary/70 transition"
              >
                {s}
              </button>
            ))}
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
              Showing <span className="font-semibold text-foreground">3</span>{" "}
              users
            </p>
            <div className="flex items-center gap-2">
              <span className="text-xs text-muted-foreground">Sort:</span>
              <button className="px-3 py-2 rounded-xl bg-secondary text-sm">
                Newest <ChevronDown className="inline h-4 w-4 ml-2" />
              </button>
            </div>
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
              {dummyUsers.map((user) => (
                <tr
                  key={user.id}
                  className="hover:bg-secondary/30 transition-colors group"
                >
                  <td
                    className="px-6 py-4"
                    onClick={() => navigate(`/admin/users/id`)}
                  >
                    <div className="flex items-center gap-3">
                      <div className="h-9 w-9 rounded-full bg-primary/10 flex items-center justify-center font-bold text-primary text-xs">
                        {user.name.charAt(0)}
                      </div>
                      <div>
                        <p className="font-semibold text-sm">{user.name}</p>
                        <p className="text-xs text-muted-foreground">
                          {user.email}
                        </p>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-sm font-medium">{user.role}</td>
                  <td className="px-6 py-4">
                    <span
                      className={`px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase ${
                        user.status === "Active"
                          ? "bg-success/10 text-success"
                          : "bg-muted text-muted-foreground"
                      }`}
                    >
                      {user.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-sm text-muted-foreground">
                    {user.joined}
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
              ))}
            </tbody>
          </table>
        </div>
      </Card>
    </div>
  );
}
