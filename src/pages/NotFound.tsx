import { Link, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { motion } from "framer-motion";
import { MdArrowForward, MdHome } from "react-icons/md";
import Navbar from "../components/Navbar";
import TickerBar from "../components/TickerBar";
import Footer from "../components/Footer";

const quickLinks = [
  { label: "Tournament", href: "/tournament" },
  { label: "How It Works", href: "/how-it-works" },
  { label: "Leaderboard", href: "/leaderboard" },
  { label: "Access Levels", href: "/access" },
];

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="bg-background min-h-screen flex flex-col">
      <Navbar />
      <TickerBar />

      <section className="relative flex-1 flex items-center overflow-hidden pt-32 pb-20">
        <div className="absolute inset-0 grid-bg opacity-60 z-0" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[40rem] h-[40rem] bg-primary/5 rounded-full blur-[120px] z-0" />

        <div className="container relative z-10 max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex items-center gap-3 mb-6"
          >
            <div className="h-px w-12 bg-primary/40" />
            <span className="font-mono text-[10px] tracking-widest text-primary">ERROR // OFF THE BOARD</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.05 }}
            className="font-display text-[clamp(5rem,18vw,12rem)] leading-[0.85] text-foreground"
          >
            4<span className="text-gold-gradient">0</span>4
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="mt-6 font-body text-lg text-muted-foreground max-w-lg"
          >
            This setup was never submitted. The page you're looking for isn't on the
            league record — it may have moved or never existed.
          </motion.p>

          {location.pathname && (
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.15 }}
              className="mt-3 font-mono text-[10px] tracking-widest text-muted-foreground/60"
            >
              REQUESTED: {location.pathname}
            </motion.p>
          )}

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mt-8 flex flex-wrap gap-4"
          >
            <Link
              to="/"
              className="btn-shimmer font-mono text-xs tracking-widest uppercase text-primary-foreground px-8 py-4 font-medium flex items-center gap-2"
            >
              <MdHome size={16} /> Back to Home
            </Link>
            <Link
              to="/waitlist"
              className="gold-border font-mono text-xs tracking-widest uppercase text-foreground px-8 py-4 hover:bg-primary/5 transition-colors flex items-center gap-2"
            >
              Join Season 01 <MdArrowForward size={14} className="text-primary" />
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.25 }}
            className="mt-12 border-t border-primary/10 pt-6"
          >
            <p className="font-mono text-[10px] tracking-widest text-muted-foreground mb-4">OR EXPLORE</p>
            <div className="flex flex-wrap gap-x-6 gap-y-2">
              {quickLinks.map((link) => (
                <Link
                  key={link.href}
                  to={link.href}
                  className="font-body text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default NotFound;
