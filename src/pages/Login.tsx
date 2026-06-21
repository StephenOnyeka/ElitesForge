import { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { toast } from "sonner";
import { MdMailOutline, MdLockOutline, MdVisibility, MdVisibilityOff, MdArrowBack } from "react-icons/md";
import waitlistBg from "../assets/waitlist-bg.jpg";

const LoginSchema = z.object({
  email: z.string().min(1, "Email is required").email("Enter a valid email address"),
  password: z.string().min(8, "Password must be at least 8 characters"),
  rememberMe: z.boolean().optional(),
});

type LoginValues = z.infer<typeof LoginSchema>;

// Dashboard root on the `app.` subdomain of the current host.
// e.g. elitetraderleague.com -> https://app.elitetraderleague.com
const getAppDashboardUrl = () => {
  if (typeof window === "undefined") return "/";
  const { protocol, hostname, port } = window.location;
  const bareHost = hostname.replace(/^www\./, "");
  const host = bareHost.startsWith("app.") ? bareHost : `app.${bareHost}`;
  const portSuffix = port ? `:${port}` : "";
  return `${protocol}//${host}${portSuffix}/`;
};

const fadeUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
};

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginValues>({
    resolver: zodResolver(LoginSchema),
    defaultValues: { email: "", password: "", rememberMe: false },
  });

  const onSubmit = (values: LoginValues) => {
    // Frontend stub — no backend yet. Replace with an API call when auth is ready.
    setSubmitting(true);
    setTimeout(() => {
      setSubmitting(false);
      toast.success("Signed in. Redirecting to your dashboard…");
      console.log("login submit", values);
      // Dashboard lives on the app. subdomain — full navigation, not client routing.
      window.location.href = getAppDashboardUrl();
    }, 900);
  };

  return (
    <div className="bg-background min-h-screen relative">
      <div className="fixed inset-0 z-0">
        <img src={waitlistBg} alt="" className="w-full h-full object-cover opacity-15" />
        <div className="absolute inset-0 bg-background/85" />
      </div>

      <nav className="fixed top-0 left-0 right-0 z-50 border-b border-primary/30 bg-background/90">
        <div className="container flex h-16 items-center justify-center">
          <Link to="/" className="font-display text-2xl tracking-wider text-foreground">
            ELITE TRADER <span className="text-gold-gradient">LEAGUE</span>
          </Link>
        </div>
      </nav>

      <div className="relative z-10 flex min-h-screen items-center justify-center px-6 pt-24 pb-12">
        <motion.div {...fadeUp} className="w-full max-w-md">
          <div className="relative gold-border bg-card/90 p-8 md:p-10 overflow-hidden">
            <div className="absolute top-0 left-0 w-5 h-5 border-t-2 border-l-2 border-primary" />
            <div className="absolute bottom-0 right-0 w-5 h-5 border-b-2 border-r-2 border-primary" />

            <p className="font-mono text-[10px] tracking-[0.3em] text-primary mb-3">MEMBER ACCESS</p>
            <h1 className="font-display text-3xl md:text-4xl text-foreground">WELCOME BACK</h1>
            <p className="mt-2 font-body text-sm text-muted-foreground">
              Sign in to your trader account to continue.
            </p>

            <form onSubmit={handleSubmit(onSubmit)} className="mt-8 space-y-5" noValidate>
              {/* Email */}
              <div>
                <label className="font-mono text-[10px] tracking-widest text-primary block mb-1.5">
                  EMAIL ADDRESS
                </label>
                <div className="relative">
                  <MdMailOutline className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" size={16} />
                  <input
                    type="email"
                    autoComplete="email"
                    placeholder="you@example.com"
                    className="w-full bg-muted border border-primary/20 pl-9 pr-3 py-3 font-mono text-sm text-foreground placeholder:text-muted-foreground/50 focus:border-primary outline-none transition-colors"
                    {...register("email")}
                  />
                </div>
                {errors.email && (
                  <p className="mt-1 font-mono text-[10px] text-destructive">{errors.email.message}</p>
                )}
              </div>

              {/* Password */}
              <div>
                <label className="font-mono text-[10px] tracking-widest text-primary block mb-1.5">
                  PASSWORD
                </label>
                <div className="relative">
                  <MdLockOutline className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" size={16} />
                  <input
                    type={showPassword ? "text" : "password"}
                    autoComplete="current-password"
                    placeholder="• • • • • • • •"
                    className="w-full bg-muted border border-primary/20 pl-9 pr-10 py-3 font-mono text-sm text-foreground placeholder:text-muted-foreground/50 focus:border-primary outline-none transition-colors"
                    {...register("password")}
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword((v) => !v)}
                    aria-label={showPassword ? "Hide password" : "Show password"}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
                  >
                    {showPassword ? <MdVisibilityOff size={18} /> : <MdVisibility size={18} />}
                  </button>
                </div>
                {errors.password && (
                  <p className="mt-1 font-mono text-[10px] text-destructive">{errors.password.message}</p>
                )}
              </div>

              {/* Remember + forgot */}
              <div className="flex items-center justify-between">
                <label className="flex items-center gap-2 cursor-pointer">
                  <input type="checkbox" className="accent-primary" {...register("rememberMe")} />
                  <span className="font-body text-xs text-muted-foreground">Keep me logged in</span>
                </label>
                <a href="#" className="font-body text-xs text-muted-foreground underline hover:text-primary">
                  Forgot password?
                </a>
              </div>

              <button
                type="submit"
                disabled={submitting}
                className="w-full btn-shimmer font-mono text-xs tracking-widest text-primary-foreground px-8 py-4 font-medium disabled:opacity-60"
              >
                {submitting ? "SIGNING IN…" : "SIGN IN →"}
              </button>
            </form>

            <div className="mt-6 pt-5 border-t border-primary/10 text-center">
              <p className="font-body text-sm text-muted-foreground">
                Don&apos;t have an account?{" "}
                <Link to="/waitlist" className="text-primary hover:underline">
                  Join the waitlist
                </Link>
              </p>
            </div>
          </div>

          <Link
            to="/"
            className="mt-6 font-mono text-xs text-muted-foreground hover:text-primary flex items-center gap-1 justify-center"
          >
            <MdArrowBack size={14} /> Back to ETL Home
          </Link>
        </motion.div>
      </div>
    </div>
  );
};

export default Login;
