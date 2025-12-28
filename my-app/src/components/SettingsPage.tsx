import { User, Mail, Lock, Bell, Shield, Save } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function SettingsPage() {
  return (
    <div className="p-6 lg:p-8 animate-fade-in">
      <div className="max-w-6xl mx-auto space-y-6">
        {/* Header */}
        <div>
          <h1 className="font-display text-2xl lg:text-3xl font-bold">
            Settings
          </h1>
          <p className="text-muted-foreground mt-1">
            Manage your account settings and preferences
          </p>
        </div>

        {/* Profile */}
        <div className="rounded-2xl bg-card p-6 transition-all hover:shadow-lg">
          <div className="flex items-center gap-2 mb-4">
            <User className="h-5 w-5 text-primary" />
            <h2 className="font-display text-lg font-semibold">Profile</h2>
          </div>
          <p className="text-sm text-muted-foreground mb-6">
            Update your personal information
          </p>

          <div className="flex items-center gap-4 mb-6">
            <img
              src="https://api.dicebear.com/7.x/initials/svg?seed=User"
              alt="User"
              className="h-20 w-20 rounded-full border border-border/60"
            />
            <button className="px-4 py-2 rounded-md border border-border bg-background hover:bg-muted transition">
              Change Photo
            </button>
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            <div>
              <p className="text-sm font-medium mb-1">Full Name</p>
              <input
                type="text"
                placeholder="Your name"
                className="w-full rounded-md border border-border bg-background px-3 py-2 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/40"
              />
            </div>

            <div>
              <p className="text-sm font-medium mb-1">Email</p>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <input
                  type="email"
                  placeholder="you@email.com"
                  className="w-full pl-10 rounded-md border border-border bg-background px-3 py-2 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/40"
                />
              </div>
            </div>
          </div>

          <Button className="mt-6 gradient-bg text-white shadow-lg shadow-primary/20">
            <Save className="h-4 w-4 mr-2" />
            Save Changes
          </Button>
        </div>

        {/* Grid */}
        <div className="grid gap-6 lg:grid-cols-2">
          {/* Password */}
          <div className="rounded-2xl bg-card p-6 transition-all hover:shadow-lg">
            <div className="flex items-center gap-2 mb-4">
              <Lock className="h-5 w-5 text-primary" />
              <h2 className="font-display text-lg font-semibold">Password</h2>
            </div>
            <p className="text-sm text-muted-foreground mb-6">
              Change your password
            </p>

            <div className="space-y-4">
              <div>
                <p className="text-sm font-medium mb-1">Current Password</p>
                <input
                  placeholder="Current Password"
                  type="password"
                  className="w-full rounded-md border border-border bg-background px-3 py-2"
                />
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <p className="text-sm font-medium mb-1">New Password</p>
                  <input
                    placeholder="New Password"
                    type="password"
                    className="w-full rounded-md border border-border bg-background px-3 py-2"
                  />
                </div>

                <div>
                  <p className="text-sm font-medium mb-1">Confirm Password</p>
                  <input
                    placeholder="Confirm Password"
                    type="password"
                    className="w-full rounded-md border border-border bg-background px-3 py-2"
                  />
                </div>
              </div>

              <button className="mt-2 px-4 py-2 rounded-md border border-border bg-background hover:bg-muted transition">
                Update Password
              </button>
            </div>
          </div>

          {/* Notifications (static UI) */}
          <div className="rounded-2xl bg-card p-6 transition-all hover:shadow-lg">
            <div className="flex items-center gap-2 mb-4">
              <Bell className="h-5 w-5 text-primary" />
              <h2 className="font-display text-lg font-semibold">
                Notifications
              </h2>
            </div>
            <p className="text-sm text-muted-foreground mb-6">
              Manage notification preferences
            </p>

            {[
              "Email Notifications",
              "Course Updates",
              "Promotional Emails",
            ].map((item) => (
              <div
                key={item}
                className="flex items-center justify-between mb-3 rounded-lg bg-muted/40 p-3"
              >
                <span className="font-medium">{item}</span>
                <div className="h-5 w-10 rounded-full bg-border" />
              </div>
            ))}
          </div>
        </div>

        {/* Privacy */}
        <div className="rounded-2xl bg-card p-6 transition-all hover:shadow-lg">
          <div className="flex items-center gap-2 mb-4">
            <Shield className="h-5 w-5 text-primary" />
            <h2 className="font-display text-lg font-semibold">Privacy</h2>
          </div>
          <p className="text-sm text-muted-foreground mb-4">Manage your data</p>

          <button className="px-4 py-2 rounded-md border border-destructive/30 text-destructive hover:bg-destructive/10 transition">
            Delete Account
          </button>

          <p className="text-xs text-muted-foreground mt-2">
            This action is irreversible.
          </p>
        </div>
      </div>
    </div>
  );
}
