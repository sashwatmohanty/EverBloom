import { useState } from "react";
import { Link } from "react-router";
import { trpc } from "@/providers/trpc";
import { useAuth } from "@/hooks/useAuth";
import { LogIn, UserPlus, ArrowLeft, Coffee } from "lucide-react";

export default function Login() {
  const { isAuthenticated, user } = useAuth();
  const [mode, setMode] = useState<"login" | "register">("login");
  const [form, setForm] = useState({ username: "", password: "", displayName: "", email: "", role: "user", adminSecret: "" });
  const [error, setError] = useState("");

  const loginMutation = trpc.localAuth.login.useMutation({
    onSuccess: (data) => {
      localStorage.setItem("local_auth_token", data.token);
      window.location.href = data.user.role === "admin" ? "/admin" : "/";
    },
    onError: (err) => setError(err.message),
  });

  const registerMutation = trpc.localAuth.register.useMutation({
    onSuccess: (data) => {
      localStorage.setItem("local_auth_token", data.token);
      window.location.href = data.user.role === "admin" ? "/admin" : "/";
    },
    onError: (err) => setError(err.message),
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    if (mode === "login") {
      loginMutation.mutate({ username: form.username, password: form.password });
    } else {
      registerMutation.mutate({
        username: form.username,
        password: form.password,
        displayName: form.displayName || undefined,
        email: form.email || undefined,
        role: form.role as "user" | "admin",
        adminSecret: form.role === "admin" ? form.adminSecret : undefined,
      });
    }
  };

  if (isAuthenticated) {
    return (
      <div className="pt-24 min-h-screen flex items-center justify-center px-4">
        <div className="bg-white rounded-3xl p-10 shadow-sm text-center max-w-md">
          <Coffee className="w-16 h-16 text-[var(--color-gold)] mx-auto mb-4" />
          <h2 className="font-display text-2xl text-[var(--color-chocolate)] mb-2">Welcome, {user?.name}!</h2>
          <p className="text-sm text-[var(--color-dusty-rose)] mb-6">You are already signed in.</p>
          <Link to={user?.role === "admin" ? "/admin" : "/"} className="btn-primary">
            {user?.role === "admin" ? "Go to Dashboard" : "Go to Home"}
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="pt-24 min-h-screen flex items-center justify-center px-4 py-12">
      <div className="w-full max-w-md">
        <Link to="/" className="inline-flex items-center gap-2 text-sm text-[var(--color-dusty-rose)] hover:text-[var(--color-chocolate)] mb-8 transition-colors">
          <ArrowLeft className="w-4 h-4" /> Back to home
        </Link>

        <div className="bg-white rounded-3xl p-8 shadow-sm">
          <div className="text-center mb-8">
            <h1 className="font-display text-3xl text-[var(--color-chocolate)] mb-2">
              {mode === "login" ? "Welcome Back" : "Join Demo Restaurant"}
            </h1>
            <p className="text-sm text-[var(--color-dusty-rose)]">
              {mode === "login" ? "Sign in to your account" : "Create your account"}
            </p>
          </div>

          {/* Local Auth Form */}
          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            {mode === "register" && (
              <div className="flex bg-[var(--color-cream)] p-1 rounded-xl mb-2">
                <button
                  type="button"
                  onClick={() => setForm({ ...form, role: "user" })}
                  className={`flex-1 py-2 text-xs font-medium rounded-lg transition-colors ${form.role === "user" ? "bg-[var(--color-chocolate)] text-white shadow-sm" : "text-[var(--color-dusty-rose)]"}`}
                >
                  Customer
                </button>
                <button
                  type="button"
                  onClick={() => setForm({ ...form, role: "admin" })}
                  className={`flex-1 py-2 text-xs font-medium rounded-lg transition-colors ${form.role === "admin" ? "bg-[var(--color-chocolate)] text-white shadow-sm" : "text-[var(--color-dusty-rose)]"}`}
                >
                  Admin
                </button>
              </div>
            )}

            <div>
              <label className="text-sm font-medium text-[var(--color-chocolate)] mb-1.5 block">Username</label>
              <input
                type="text"
                value={form.username}
                onChange={(e) => setForm({ ...form, username: e.target.value })}
                className="w-full px-4 py-3 rounded-xl border border-[var(--color-chocolate)]/10 bg-[var(--color-cream)] text-[var(--color-chocolate)] text-sm focus:outline-none focus:ring-2 focus:ring-[var(--color-gold)]/50"
                placeholder="Enter username"
                required
              />
            </div>

            {mode === "register" && (
              <>
                <div>
                  <label className="text-sm font-medium text-[var(--color-chocolate)] mb-1.5 block">Display Name</label>
                  <input
                    type="text"
                    value={form.displayName}
                    onChange={(e) => setForm({ ...form, displayName: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-[var(--color-chocolate)]/10 bg-[var(--color-cream)] text-[var(--color-chocolate)] text-sm focus:outline-none focus:ring-2 focus:ring-[var(--color-gold)]/50"
                    placeholder="Your display name"
                  />
                </div>
                <div>
                  <label className="text-sm font-medium text-[var(--color-chocolate)] mb-1.5 block">Email (optional)</label>
                  <input
                    type="email"
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-[var(--color-chocolate)]/10 bg-[var(--color-cream)] text-[var(--color-chocolate)] text-sm focus:outline-none focus:ring-2 focus:ring-[var(--color-gold)]/50"
                    placeholder="your@email.com"
                  />
                </div>
                {form.role === "admin" && (
                  <div>
                    <label className="text-sm font-medium text-red-600 mb-1.5 block">Admin Secret Key</label>
                    <input
                      type="password"
                      value={form.adminSecret}
                      onChange={(e) => setForm({ ...form, adminSecret: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-red-200 bg-red-50 text-[var(--color-chocolate)] text-sm focus:outline-none focus:ring-2 focus:ring-red-500/50"
                      placeholder="Enter Admin Secret Key"
                      required
                    />
                  </div>
                )}
              </>
            )}

            <div>
              <label className="text-sm font-medium text-[var(--color-chocolate)] mb-1.5 block">Password</label>
              <input
                type="password"
                value={form.password}
                onChange={(e) => setForm({ ...form, password: e.target.value })}
                className="w-full px-4 py-3 rounded-xl border border-[var(--color-chocolate)]/10 bg-[var(--color-cream)] text-[var(--color-chocolate)] text-sm focus:outline-none focus:ring-2 focus:ring-[var(--color-gold)]/50"
                placeholder={mode === "register" ? "Min 6 characters" : "Enter password"}
                required
                minLength={mode === "register" ? 6 : undefined}
              />
            </div>

            {error && (
              <p className="text-sm text-red-500 bg-red-50 px-4 py-2 rounded-xl">{error}</p>
            )}

            <button
              type="submit"
              disabled={loginMutation.isPending || registerMutation.isPending}
              className="btn-primary disabled:opacity-50"
            >
              {mode === "login" ? (
                <><LogIn className="w-4 h-4 mr-2" /> {loginMutation.isPending ? "Signing in..." : "Sign In"}</>
              ) : (
                <><UserPlus className="w-4 h-4 mr-2" /> {registerMutation.isPending ? "Creating..." : "Create Account"}</>
              )}
            </button>
          </form>

          <p className="text-center text-sm text-[var(--color-dusty-rose)] mt-6">
            {mode === "login" ? (
              <>Don't have an account? <button onClick={() => { setMode("register"); setError(""); }} className="text-[var(--color-chocolate)] font-medium hover:underline">Register</button></>
            ) : (
              <>Already have an account? <button onClick={() => { setMode("login"); setError(""); }} className="text-[var(--color-chocolate)] font-medium hover:underline">Sign In</button></>
            )}
          </p>
        </div>
      </div>
    </div>
  );
}
