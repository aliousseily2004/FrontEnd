import { Link } from "react-router-dom";

export default function Register() {
  return (
    <div className="min-h-[calc(100vh-4rem)] bg-background text-foreground">
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-10 px-4 py-10 md:grid-cols-2 md:py-16">
        {/* Left: Info */}
        <div className="flex flex-col justify-center">
          <h1 className="text-3xl font-bold leading-tight md:text-4xl">
            Create your account
          </h1>

          <p className="mt-3 max-w-md text-sm text-muted-foreground">
            Track lessons, earn certificates, and keep all your learning in one
            place.
          </p>

          <div className="mt-8 grid gap-3 rounded-2xl border border-border bg-card p-5">
            {[
              {
                title: "Personalized learning",
                desc: "Resume where you left off and see progress instantly.",
              },
              {
                title: "Certificates",
                desc: "Earn certificates after quizzes and completion.",
              },
              {
                title: "Search courses fast",
                desc: "Find what you need with a quick search and filters.",
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
            By creating an account, you agree to our{" "}
            <Link
              to="/terms"
              className="text-foreground underline underline-offset-4"
            >
              Terms
            </Link>{" "}
            and{" "}
            <Link
              to="/privacy"
              className="text-foreground underline underline-offset-4"
            >
              Privacy Policy
            </Link>
            .
          </p>
        </div>

        {/* Right: Card */}
        <div className="flex items-center justify-center">
          <div className="w-full max-w-md rounded-2xl border border-border bg-card p-6 shadow-sm md:p-8">
            <div className="mb-6">
              <h2 className="text-xl font-semibold">Get started</h2>
              <p className="mt-1 text-sm text-muted-foreground">
                Create an account in less than a minute.
              </p>
            </div>

            <form className="space-y-4">
              {/* First + Last name */}
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div className="space-y-2">
                  <label htmlFor="firstName" className="text-sm font-medium">
                    First name
                  </label>
                  <input
                    id="firstName"
                    name="firstName"
                    type="text"
                    placeholder="first name"
                    autoComplete="given-name"
                    className="h-11 w-full rounded-xl border border-border bg-background px-3 text-sm outline-none transition focus:ring-2 focus:ring-ring"
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="lastName" className="text-sm font-medium">
                    Last name
                  </label>
                  <input
                    id="lastName"
                    name="lastName"
                    type="text"
                    placeholder="last name"
                    autoComplete="family-name"
                    className="h-11 w-full rounded-xl border border-border bg-background px-3 text-sm outline-none transition focus:ring-2 focus:ring-ring"
                  />
                </div>
              </div>

              {/* Email */}
              <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-medium">
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="test@email.com"
                  autoComplete="email"
                  className="h-11 w-full rounded-xl border border-border bg-background px-3 text-sm outline-none transition focus:ring-2 focus:ring-ring"
                />
              </div>

              {/* Password */}
              <div className="space-y-2">
                <label htmlFor="password" className="text-sm font-medium">
                  Password
                </label>
                <input
                  id="password"
                  name="password"
                  type="password"
                  placeholder="••••••••"
                  autoComplete="new-password"
                  className="h-11 w-full rounded-xl border border-border bg-background px-3 text-sm outline-none transition focus:ring-2 focus:ring-ring"
                />
                <p className="text-xs text-muted-foreground">
                  Use 8+ characters with a mix of letters and numbers.
                </p>
              </div>

              {/* Confirm Password */}
              <div className="space-y-2">
                <label
                  htmlFor="confirmPassword"
                  className="text-sm font-medium"
                >
                  Confirm password
                </label>
                <input
                  id="confirmPassword"
                  name="confirmPassword"
                  type="password"
                  placeholder="••••••••"
                  autoComplete="new-password"
                  className="h-11 w-full rounded-xl border border-border bg-background px-3 text-sm outline-none transition focus:ring-2 focus:ring-ring"
                />
              </div>

              {/* Checkbox */}
              <div className="flex items-start gap-3 pt-1">
                <input
                  id="marketing"
                  name="marketing"
                  type="checkbox"
                  className="mt-1 h-4 w-4 rounded border border-border bg-background"
                />
                <label
                  htmlFor="marketing"
                  className="text-xs text-muted-foreground"
                >
                  Send me product updates and learning tips (optional).
                </label>
              </div>

              {/* Submit */}
              <button
                type="button"
                className="mt-2 inline-flex h-11 w-full items-center justify-center rounded-xl bg-primary px-4 text-sm font-semibold text-primary-foreground transition hover:opacity-95 active:opacity-90"
              >
                Create account
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
                Already have an account?{" "}
                <Link
                  to="/login"
                  className="font-semibold text-foreground underline underline-offset-4"
                >
                  Sign in
                </Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
