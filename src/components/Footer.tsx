import { Link } from "react-router-dom";
import { MdOpenInNew } from "react-icons/md";

const footerLinks = [
  { label: "Tournament", href: "/tournament" },
  { label: "How It Works", href: "/how-it-works" },
  { label: "Leaderboard", href: "/leaderboard" },
  { label: "Access Levels", href: "/access" },
  { label: "Waitlist", href: "/waitlist" },
];

const Footer = () => (
  <footer className="border-t border-primary/10 bg-background">
    <div className="container py-12 md:py-16">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <div className="font-display text-2xl tracking-wider text-foreground mb-2">
            ELITE TRADER <span className="text-gold-gradient">LEAGUE</span>
          </div>
          <p className="font-mono text-[10px] text-muted-foreground tracking-wider">
            BY ELITESFORGE
          </p>
        </div>
        <div>
          <h4 className="font-mono text-[10px] tracking-widest text-muted-foreground mb-4">NAVIGATION</h4>
          <div className="flex flex-col gap-2">
            {footerLinks.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                className="font-body text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
        <div>
          <h4 className="font-mono text-[10px] tracking-widest text-muted-foreground mb-4">CONNECT</h4>
          <div className="flex gap-4">
            {["Twitter/X", "Instagram", "LinkedIn", "Telegram"].map((s) => (
              <a key={s} href="#" className="font-mono text-[10px] text-muted-foreground hover:text-primary transition-colors flex items-center gap-1">
                {s} <MdOpenInNew size={10} />
              </a>
            ))}
          </div>
        </div>
      </div>
      <div className="mt-12 pt-6 border-t border-primary/10">
        <p className="font-mono text-[10px] text-muted-foreground text-center">
          © 2025 ElitesForge. All rights reserved. Demo trading only.
        </p>
      </div>
    </div>
  </footer>
);

export default Footer;
