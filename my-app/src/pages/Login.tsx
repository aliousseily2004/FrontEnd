import { Link } from "react-router-dom";

export default function Login() {
  return (
    <div className="min-h-[calc(100vh-4rem)] bg-background text-foreground">
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-10 px-4 py-10 md:grid-cols-2 md:py-16">
        {/* Left: Info */}
        <div className="flex flex-col justify-center">
          <h1 className="text-3xl font-bold leading-tight md:text-4xl">
            Welcome back
          </h1>

          <p className="mt-3 max-w-md text-sm text-muted-foreground">
            Sign in to continue learning, track your progress, and access your
            courses.
          </p>

          <div className="mt-8 grid gap-3 rounded-2xl border border-border bg-card p-5">
            {[
              {
                title: "Continue where you left off",
                desc: "Pick up your lessons instantly and keep your streak going.",
              },
              {
                title: "All your certificates in one place",
                desc: "View, download, and share certificates after completion.",
              },
              {
                title: "Faster access to your dashboard",
                desc: "See enrolled courses, quizzes, and progress at a glance.",
              },
            ].map((item) => (
              <div key={item.title} className="flex items-start gap-3">
                <span className="mt-0.5 inline-flex h-7 w-7 items-center justify-center rounded-lg bg-muted text-xs text-foreground">
                  ✓
                </span>
                <div>
                  <p className="text-sm font-medium">{item.title}</p>
                  <p className="text-xs text-muted-foreground">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <p className="mt-8 text-xs text-muted-foreground">
            New to LearnHub?{" "}
            <Link
              to="/register"
              className="text-foreground underline underline-offset-4"
            >
              Create an account
            </Link>
            .
          </p>
        </div>

        {/* Right: Login Card */}
        <div className="flex items-center justify-center">
          <div className="w-full max-w-md rounded-2xl border border-border bg-card p-6 shadow-sm md:p-8">
            <div className="mb-6">
              <h2 className="text-xl font-semibold">Sign in</h2>
              <p className="mt-1 text-sm text-muted-foreground">
                Enter your email and password to access your account.
              </p>
            </div>

            <form className="space-y-4">
              {/* Email */}
              <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-medium">
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="Test@email.com"
                  autoComplete="email"
                  className="h-11 w-full rounded-xl border border-border bg-background px-3 text-sm outline-none transition focus:ring-2 focus:ring-ring"
                />
              </div>

              {/* Password */}
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <label htmlFor="password" className="text-sm font-medium">
                    Password
                  </label>
                  <Link
                    to="/forgot-password"
                    className="text-xs text-muted-foreground underline underline-offset-4 hover:text-foreground"
                  >
                    Forgot password?
                  </Link>
                </div>

                <input
                  id="password"
                  name="password"
                  type="password"
                  placeholder="••••••••"
                  autoComplete="current-password"
                  className="h-11 w-full rounded-xl border border-border bg-background px-3 text-sm outline-none transition focus:ring-2 focus:ring-ring"
                />
              </div>

              {/* Remember me */}
              <div className="flex items-center justify-between pt-1">
                <label
                  htmlFor="remember"
                  className="flex items-center gap-3 text-sm text-muted-foreground"
                >
                  <input
                    id="remember"
                    name="remember"
                    type="checkbox"
                    className="h-4 w-4 rounded border border-border bg-background"
                  />
                  Remember me
                </label>

                <span className="text-xs text-muted-foreground">
                  Uses secure cookies
                </span>
              </div>

              {/* Submit */}
              <button
                type="button"
                className="mt-2 inline-flex h-11 w-full items-center justify-center rounded-xl bg-primary px-4 text-sm font-semibold text-primary-foreground transition hover:opacity-95 active:opacity-90"
              >
                Sign in
              </button>

              {/* Divider */}
              <div className="relative py-2">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-border" />
                </div>
                <div className="relative flex justify-center">
                  <span className="bg-background px-3 text-xs text-muted-foreground">
                    or
                  </span>
                </div>
              </div>

              {/* Secondary */}
              <button
                type="button"
                className="inline-flex h-11 w-full items-center justify-center rounded-xl border border-border bg-secondary px-4 text-sm font-semibold text-secondary-foreground transition hover:opacity-95"
              >
                Continue with Google
              </button>

              {/* Footer */}
              <p className="pt-2 text-center text-sm text-muted-foreground">
                Don’t have an account?{" "}
                <Link
                  to="/register"
                  className="font-semibold text-foreground underline underline-offset-4"
                >
                  Get started
                </Link>
              </p>
            </form>

            {/* Small helper row */}
            <div className="mt-6 rounded-xl border border-border bg-background/60 p-4">
              <p className="text-xs text-muted-foreground">
                Tip: If you’re testing locally, make sure your API URL and
                cookie settings (SameSite/Secure) match your frontend domain.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
