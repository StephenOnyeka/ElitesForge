import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { MdMenu, MdClose } from "react-icons/md";

const navLinks = [
  { label: "TOURNAMENT", href: "/tournament" },
  { label: "HOW IT WORKS", href: "/how-it-works" },
  { label: "LEADERBOARD", href: "/leaderboard" },
  { label: "ACCESS", href: "/access" },
  { label: "ABOUT", href: "/about" },
];

// Build the login URL on the `app.` subdomain of the current host.
// e.g. elitetraderleague.com -> https://app.elitetraderleague.com/login
const getAppLoginUrl = () => {
  if (typeof window === "undefined") return "/login";
  const { protocol, hostname, port } = window.location;
  const bareHost = hostname.replace(/^www\./, "");
  const host = bareHost.startsWith("app.") ? bareHost : `app.${bareHost}`;
  const portSuffix = port ? `:${port}` : "";
  return `${protocol}//${host}${portSuffix}/login`;
};

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();
  const isWaitlist = location.pathname === "/waitlist";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  if (isWaitlist) {
    return (
      <nav className="fixed top-0 left-0 right-0 z-50 border-b border-primary/30 bg-background">
        <div className="container flex h-16 items-center justify-center">
          <Link to="/" className="font-display text-2xl tracking-wider text-foreground">
            ELITE TRADER <span className="text-gold-gradient">LEAGUE</span>
          </Link>
        </div>
      </nav>
    );
  }

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled ? "bg-background border-b border-primary/30" : "bg-transparent"
        }`}
      >
        <div className="container flex h-16 items-center justify-between">
          <Link to="/" className="font-display text-xl md:text-2xl tracking-wider text-foreground">
            ELITE TRADER <span className="text-gold-gradient">LEAGUE</span>
          </Link>

          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                className={`font-mono text-[10px] tracking-widest uppercase transition-colors hover:text-primary ${
                  location.pathname === link.href ? "text-primary" : "text-muted-foreground"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          <div className="hidden md:flex items-center gap-3">
            <a
              href={getAppLoginUrl()}
              className="font-mono text-[10px] tracking-widest uppercase text-muted-foreground hover:text-foreground transition-colors px-4 py-2"
            >
              SIGN IN
            </a>
            <Link
              to="/waitlist"
              className="btn-shimmer font-mono text-[10px] tracking-widest uppercase text-primary-foreground px-5 py-2.5 font-medium"
            >
              REGISTER NOW
            </Link>
          </div>

          <button
            className="md:hidden text-foreground"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            {mobileOpen ? <MdClose size={24} /> : <MdMenu size={24} />}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="fixed inset-x-0 top-16 z-40 bg-background border-b border-primary/30 p-6 md:hidden"
          >
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  to={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="font-mono text-xs tracking-widest uppercase text-muted-foreground hover:text-primary"
                >
                  {link.label}
                </Link>
              ))}
              <hr className="border-primary/10" />
              <a
                href={getAppLoginUrl()}
                className="font-mono text-xs tracking-widest uppercase text-muted-foreground hover:text-primary text-center"
              >
                SIGN IN
              </a>
              <Link
                to="/waitlist"
                onClick={() => setMobileOpen(false)}
                className="btn-shimmer font-mono text-xs tracking-widest uppercase text-primary-foreground px-5 py-3 text-center font-medium"
              >
                REGISTER NOW
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
