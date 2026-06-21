import { motion } from "framer-motion";
import Navbar from "../components/Navbar";
import TickerBar from "../components/TickerBar";
import Footer from "../components/Footer";
import PageHero from "../components/PageHero";
import CTABanner from "../components/CTABanner";
import tournamentHero from "../assets/tournament-hero.jpg";

const UNSPLASH_COMPETITION = "https://images.unsplash.com/photo-1551836022-4c4c79ecde51?w=800&q=80&auto=format&fit=crop";
const UNSPLASH_TROPHY = "https://images.unsplash.com/photo-1567427017947-545c5f8d16ad?w=600&q=80&auto=format&fit=crop";

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
};

const rules = [
  "One setup per trader per session — no exceptions",
  "Maximum 3 trades per submitted setup",
  "Setup must be submitted before trading begins",
  "All trades are automatically linked to the active setup",
  "Trades not aligned with the submitted setup will be flagged",
];

const timelinePhases = [
  { id: "01", label: "Pre-Season", desc: "Registration & KYC verification", status: "current" as const },
  { id: "02", label: "Week 1–4", desc: "Opening rounds begin", status: "upcoming" as const },
  { id: "03", label: "Week 5–8", desc: "Mid-season intensity", status: "upcoming" as const },
  { id: "04", label: "Week 9–12", desc: "Final push", status: "upcoming" as const },
  { id: "05", label: "Season End", desc: "Rankings finalized", status: "upcoming" as const },
];

const activePhaseIndex = timelinePhases.findIndex((p) => p.status === "current");
const timelineProgress = (activePhaseIndex / (timelinePhases.length - 1)) * 100;

const phaseStatusLabel: Record<string, string> = {
  done: "Complete",
  current: "In Progress",
  upcoming: "Upcoming",
};

const Tournament = () => (
  <div className="bg-background min-h-screen">
    <Navbar />
    <TickerBar />
    <PageHero
      headline="THE RULES OF THE LEAGUE"
      subline="Every rule exists to ensure skill determines the standings."
      breadcrumb="Home > Tournament"
      backgroundImage={tournamentHero}
      compact
    />

    {/* Season Overview */}
    <section className="py-16">
      <div className="container max-w-4xl">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <motion.div {...fadeUp} className="gold-border bg-card p-8 relative">
            <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-primary" />
            <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-primary" />
            <div className="flex items-center gap-2 mb-4">
              <h3 className="font-display text-2xl text-foreground">SEASON 01</h3>
              <span className="flex items-center gap-1 font-mono text-[10px] text-gain tracking-widest">
                <span className="w-2 h-2 rounded-full bg-gain animate-pulse-dot" /> REGISTRATION OPEN
              </span>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[["Platform", "MT5 Demo"], ["Account", "Standard"], ["Ranking", "Weighted Score"], ["Duration", "12 Weeks"]].map(([k, v]) => (
                <div key={k}>
                  <p className="font-mono text-[10px] text-muted-foreground tracking-widest">{k}</p>
                  <p className="font-mono text-sm text-foreground">{v}</p>
                </div>
              ))}
            </div>
          </motion.div>
          <motion.div {...fadeUp} transition={{ delay: 0.2 }} className="relative">
            <img
              src={UNSPLASH_COMPETITION}
              alt="Traders in a competitive environment"
              className="w-full h-64 object-cover gold-border"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent" />
          </motion.div>
        </div>
      </div>
    </section>

    {/* Format Breakdown */}
    <section className="py-16 grid-bg">
      <div className="container">
        <motion.h2 {...fadeUp} className="font-display text-3xl text-foreground text-center mb-12">FORMAT BREAKDOWN</motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            { title: "DAILY TRADE", items: ["Submit one setup per session", "Max 3 trades per setup", "Results recorded same day"] },
            { title: "WEEKLY TRADE", items: ["Weekly performance summary", "Rolling leaderboard update", "Discipline score calculated"] },
            { title: "SEASON CLIMAX", items: ["Final 2 weeks intensified", "Bonus multiplier active", "Championship standings locked"] },
          ].map((col, i) => (
            <motion.div key={i} {...fadeUp} transition={{ delay: i * 0.1 }} className="gold-border p-6 bg-card">
              <h3 className="font-display text-lg text-primary mb-4">{col.title}</h3>
              {col.items.map((item) => (
                <p key={item} className="font-body text-sm text-muted-foreground mb-2">• {item}</p>
              ))}
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    {/* Official Rules */}
    <section className="py-16">
      <div className="container max-w-3xl">
        <motion.h2 {...fadeUp} className="font-display text-3xl text-foreground text-center mb-12">OFFICIAL RULES</motion.h2>
        {rules.map((rule, i) => (
          <motion.div key={i} {...fadeUp} transition={{ delay: i * 0.05 }} className="flex gap-4 mb-4 p-4 border-b border-primary/10">
            <span className="font-mono text-lg text-primary/40">{String(i + 1).padStart(2, "0")}</span>
            <p className="font-body text-foreground">{rule}</p>
          </motion.div>
        ))}
        <motion.div {...fadeUp} className="mt-8 border border-destructive/30 bg-destructive/5 p-6">
          <h4 className="font-display text-lg text-destructive mb-2">DISQUALIFICATION CONDITIONS</h4>
          <p className="font-body text-sm text-muted-foreground">
            KYC failure, rule violations, trade manipulation, or submitting setups after execution will result in immediate disqualification and removal from standings.
          </p>
        </motion.div>
      </div>
    </section>

    {/* Ranking Methodology */}
    <section className="py-16 grid-bg">
      <div className="container max-w-3xl">
        <motion.h2 {...fadeUp} className="font-display text-3xl text-foreground text-center mb-12">RANKING METHODOLOGY</motion.h2>
        {[
          { label: "Net Profit %", weight: 50, desc: "Primary ranking metric — your bottom line" },
          { label: "Drawdown Compliance", weight: 30, desc: "Penalizes reckless risk-taking" },
          { label: "Discipline Score", weight: 20, desc: "Rewards adherence to submitted setups" },
        ].map((item, i) => (
          <motion.div key={i} {...fadeUp} transition={{ delay: i * 0.1 }} className="mb-6">
            <div className="flex justify-between mb-1">
              <span className="font-mono text-sm text-foreground">{item.label}</span>
              <span className="font-mono text-sm text-primary">{item.weight}%</span>
            </div>
            <div className="h-2 bg-muted overflow-hidden">
              <motion.div initial={{ width: 0 }} whileInView={{ width: `${item.weight}%` }} viewport={{ once: true }} transition={{ duration: 1, delay: i * 0.2 }} className="h-full bg-primary" />
            </div>
            <p className="font-body text-xs text-muted-foreground mt-1">{item.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>

    {/* Timeline */}
    <section className="py-16 md:py-20">
      <div className="container max-w-5xl">
        <motion.div {...fadeUp} className="text-center mb-14">
          <p className="font-mono text-[10px] tracking-widest text-primary mb-3">12 WEEKS · 5 PHASES</p>
          <h2 className="font-display text-3xl md:text-4xl text-foreground">SEASON TIMELINE</h2>
        </motion.div>

        {/* Desktop: horizontal progress spine */}
        <div className="hidden md:block">
          <div className="relative">
            {/* base track + animated progress fill */}
            <div className="absolute top-3 left-0 right-0 h-px bg-primary/15" />
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: `${timelineProgress}%` }}
              viewport={{ once: true }}
              transition={{ duration: 1.2, ease: "easeInOut" }}
              className="absolute top-3 left-0 h-px bg-primary"
            />

            <div className="relative grid grid-cols-5 gap-4">
              {timelinePhases.map((phase, i) => {
                const isCurrent = phase.status === "current";
                const isDone = phase.status === "done";
                return (
                  <motion.div
                    key={phase.id}
                    {...fadeUp}
                    transition={{ delay: i * 0.1 }}
                    className="flex flex-col items-center text-center"
                  >
                    <div className="relative flex h-6 items-center justify-center">
                      <span
                        className={`h-3 w-3 rotate-45 ${
                          isDone
                            ? "bg-primary"
                            : isCurrent
                            ? "bg-primary"
                            : "border border-primary/30 bg-background"
                        }`}
                      />
                      {isCurrent && (
                        <span className="absolute h-5 w-5 rotate-45 border border-primary animate-pulse-dot" />
                      )}
                    </div>
                    <span
                      className={`mt-4 font-mono text-[10px] tracking-widest ${
                        isCurrent ? "text-primary" : "text-muted-foreground/60"
                      }`}
                    >
                      {phase.id}
                    </span>
                    <p
                      className={`mt-1 font-mono text-xs tracking-widest ${
                        isCurrent || isDone ? "text-foreground" : "text-muted-foreground"
                      }`}
                    >
                      {phase.label}
                    </p>
                    <p className="mt-1 font-body text-xs text-muted-foreground leading-relaxed max-w-[9rem]">
                      {phase.desc}
                    </p>
                    {isCurrent && (
                      <span className="mt-2 inline-flex items-center gap-1.5 font-mono text-[9px] tracking-widest text-gain">
                        <span className="h-1.5 w-1.5 rounded-full bg-gain animate-pulse-dot" />
                        {phaseStatusLabel[phase.status].toUpperCase()}
                      </span>
                    )}
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Mobile: vertical timeline spine */}
        <div className="md:hidden relative ml-2 border-l border-primary/20 pl-6 space-y-7">
          {timelinePhases.map((phase, i) => {
            const isCurrent = phase.status === "current";
            const isDone = phase.status === "done";
            return (
              <motion.div
                key={phase.id}
                initial={{ opacity: 0, x: -12 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08, duration: 0.45 }}
                className="relative"
              >
                <span
                  className={`absolute -left-[31px] top-1 h-3 w-3 rotate-45 ${
                    isDone || isCurrent ? "bg-primary" : "border border-primary/30 bg-background"
                  }`}
                />
                <div className="flex items-center gap-2">
                  <span className="font-mono text-[10px] tracking-widest text-muted-foreground/60">{phase.id}</span>
                  <p
                    className={`font-mono text-xs tracking-widest ${
                      isCurrent || isDone ? "text-foreground" : "text-muted-foreground"
                    }`}
                  >
                    {phase.label}
                  </p>
                  {isCurrent && (
                    <span className="inline-flex items-center gap-1 font-mono text-[9px] tracking-widest text-gain">
                      <span className="h-1.5 w-1.5 rounded-full bg-gain animate-pulse-dot" />
                      {phaseStatusLabel[phase.status].toUpperCase()}
                    </span>
                  )}
                </div>
                <p className="mt-1 font-body text-xs text-muted-foreground leading-relaxed">{phase.desc}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>

    {/* Prizes */}
    <section className="py-16 grid-bg">
      <div className="container max-w-4xl">
        <motion.h2 {...fadeUp} className="font-display text-3xl text-foreground text-center mb-12">PRIZES & RECOGNITION</motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
          <div className="md:col-span-2">
            <motion.div {...fadeUp} className="relative h-full min-h-[200px]">
              <img src={UNSPLASH_TROPHY} alt="Championship recognition" className="w-full h-full object-cover gold-border" loading="lazy" />
              <div className="absolute inset-0 bg-gradient-to-t from-background/70 to-transparent" />
              <p className="absolute bottom-4 left-4 font-display text-lg text-foreground">SEASON 01<br/><span className="text-gold-gradient">CHAMPION</span></p>
            </motion.div>
          </div>
          <div className="md:col-span-3 grid grid-cols-1 gap-4">
            {[
              "🏆 Leaderboard trophy badge + season archive feature",
              "🔍 Visibility with prop firm recruitment partners",
              "📣 Sponsor exposure and brand partnerships",
              "📜 Permanent archive entry as Season 01 champion",
            ].map((prize, i) => (
              <motion.div key={i} {...fadeUp} transition={{ delay: i * 0.1 }} className="gold-border p-4 bg-card">
                <p className="font-body text-sm text-foreground">{prize}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>

    <CTABanner headline="Ready to compete?" buttonText="Join the Waitlist →" />
    <Footer />
  </div>
);

export default Tournament;
