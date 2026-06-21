import { Link } from "react-router-dom";
import { MdOpenInNew } from "react-icons/md";

const footerLinks = [
  { label: "Tournament", href: "/tournament" },
  { label: "How It Works", href: "/how-it-works" },
  { label: "Leaderboard", href: "/leaderboard" },
  { label: "Access Levels", href: "/access" },
  { label: "Waitlist", href: "/waitlist" },
];

const socials = [
  { label: "Twitter/X", href: "#" },
  { label: "Instagram", href: "#" },
  { label: "LinkedIn", href: "#" },
  { label: "Telegram", href: "#" },
];

const legalLinks = ["Terms", "Privacy", "Risk Disclosure", "Contact"];

const Footer = () => (
  <footer className="border-t border-primary/10 bg-background">
    <div className="container py-12 md:py-16">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <div className="font-display text-2xl tracking-wider text-foreground mb-2">
            ELITE TRADER <span className="text-gold-gradient">LEAGUE</span>
          </div>
          <p className="font-mono text-[10px] text-muted-foreground tracking-wider mb-4">
            BY ELITESFORGE
          </p>
          <p className="font-body text-sm text-muted-foreground max-w-xs leading-relaxed">
            The transparent trading tournament — where skill is proven on record,
            not claimed on social media.
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
          <div className="flex flex-wrap gap-4 mb-6">
            {socials.map((s) => (
              <a
                key={s.label}
                href={s.href}
                aria-label={s.label}
                className="font-mono text-[10px] text-muted-foreground hover:text-primary transition-colors flex items-center gap-1"
              >
                {s.label} <MdOpenInNew size={10} />
              </a>
            ))}
          </div>
          <h4 className="font-mono text-[10px] tracking-widest text-muted-foreground mb-4">LEGAL</h4>
          <div className="flex flex-wrap gap-x-4 gap-y-2">
            {legalLinks.map((l) => (
              <a
                key={l}
                href="#"
                className="font-body text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                {l}
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className="mt-12 pt-6 border-t border-primary/10">
        <p className="font-body text-[11px] text-muted-foreground/70 leading-relaxed mb-4 max-w-3xl">
          <span className="text-muted-foreground">Risk disclosure:</span> Elite Trader League is a
          skill-based competition conducted on demo accounts only. No real capital is traded, no
          payment is required to enter, and nothing on this site constitutes financial advice.
          Trading carries substantial risk; past performance is not indicative of future results.
        </p>
        <p className="font-mono text-[10px] text-muted-foreground text-center">
          © 2026 ElitesForge. All rights reserved. Demo trading only.
        </p>
      </div>
    </div>
  </footer>
);

export default Footer;
