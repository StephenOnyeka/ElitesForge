import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { MdVerified, MdPlayArrow, MdLock, MdCheck, MdArrowForward } from "react-icons/md";
import Navbar from "../components/Navbar";
import TickerBar from "../components/TickerBar";
import Footer from "../components/Footer";
import CTABanner from "../components/CTABanner";
import heroBg from "../assets/hero-bg.jpg";
import heroVideoAsset from "../assets/hero-video.mp4.asset.json";
import gridBg from "../assets/grid-pattern-bg.jpg";
import whyEtlBg from "../assets/why-etl-bg.jpg";

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
};

const stagger = (i: number) => ({ transition: { delay: i * 0.1, duration: 0.5 } });

// HERO
const HeroSection = () => (
  <section className="relative min-h-screen flex items-center overflow-hidden pt-24">
    {/* Video Background */}
    <div className="absolute inset-0 z-0">
      <video
        autoPlay
        loop
        muted
        playsInline
        poster={heroBg}
        className="w-full h-full object-cover"
      >
        <source src={heroVideoAsset.url} type="video/mp4" />
      </video>
      <div className="absolute inset-0 bg-background/70" />
      <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-background/60" />
    </div>

    {/* Corner brackets */}
    <div className="absolute top-24 left-8 w-16 h-16 border-t-2 border-l-2 border-primary/30 z-10" />
    <div className="absolute top-24 right-8 w-16 h-16 border-t-2 border-r-2 border-primary/30 z-10" />

    <div className="container relative z-10">
      <motion.div {...fadeUp} {...stagger(0)} className="flex items-center gap-3 mb-6">
        <div className="h-px flex-1 max-w-[60px] bg-primary/40" />
        <span className="font-mono text-[10px] tracking-widest text-primary">SEASON 01 — NOW OPEN</span>
        <span className="w-2 h-2 rounded-full bg-gain animate-pulse-dot" />
      </motion.div>

      <motion.h1
        {...fadeUp}
        {...stagger(1)}
        className="font-display text-[clamp(3.5rem,10vw,9rem)] leading-[0.9] text-foreground"
      >
        ELITE <span className="text-gold-gradient">TRADER</span>
        <br />
        LEAGUE
      </motion.h1>

      <motion.p {...fadeUp} {...stagger(2)} className="mt-6 font-body text-lg md:text-xl text-muted-foreground max-w-xl font-light">
        The tournament that separates real skill from luck.
      </motion.p>

      <motion.div {...fadeUp} {...stagger(3)} className="mt-4 flex items-center gap-2">
        <MdVerified className="text-primary" size={16} />
        <span className="font-mono text-[10px] tracking-wider text-muted-foreground">
          No anonymous trading, no fake results
        </span>
      </motion.div>

      <motion.div {...fadeUp} {...stagger(4)} className="mt-8 flex flex-wrap gap-4">
        <Link to="/waitlist" className="btn-shimmer font-mono text-xs tracking-widest uppercase text-primary-foreground px-8 py-4 font-medium">
          APPLY FOR SEASON 01 →
        </Link>
        <Link to="/how-it-works" className="gold-border font-mono text-xs tracking-widest uppercase text-foreground px-8 py-4 hover:bg-primary/5 transition-colors flex items-center gap-2">
          <MdPlayArrow /> HOW IT WORKS
        </Link>
      </motion.div>

      <motion.div {...fadeUp} {...stagger(5)} className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-px gold-border bg-background/50">
        {[
          ["SEASON", "S01"],
          ["DURATION", "3MO"],
          ["PLATFORM", "MT5"],
          ["ACCESS", "KYC"],
        ].map(([label, value]) => (
          <div key={label} className="p-4 text-center border-r border-primary/10 last:border-r-0">
            <p className="font-mono text-[10px] text-muted-foreground tracking-widest">{label}</p>
            <p className="font-mono text-lg text-foreground mt-1">{value}</p>
          </div>
        ))}
      </motion.div>
    </div>
  </section>
);

// PROBLEM STATEMENT
const ProblemSection = () => (
  <section className="relative py-20 md:py-28 overflow-hidden">
    <div className="absolute inset-0 z-0">
      <img src={gridBg} alt="" className="w-full h-full object-cover opacity-30" loading="lazy" />
      <div className="absolute inset-0 bg-background/90" />
    </div>
    <div className="container relative z-10">
      <motion.h2 {...fadeUp} className="font-display text-3xl md:text-5xl text-foreground text-center mb-12">
        Most trading competitions reward luck.{" "}
        <span className="text-gold-gradient">ETL doesn't.</span>
      </motion.h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {[
          { problem: "Fake Results", solution: "Every trade timestamped and linked to a pre-submitted setup" },
          { problem: "Anonymity Abuse", solution: "Government ID + face verification required" },
          { problem: "No Accountability", solution: "Idea → Execution → Outcome — permanently recorded" },
        ].map((item, i) => (
          <motion.div key={i} {...fadeUp} {...stagger(i)} className="gold-border p-6 bg-card/80">
            <p className="font-mono text-sm text-destructive line-through mb-3">❌ {item.problem}</p>
            <p className="font-body text-sm text-foreground">
              <span className="text-primary mr-2">✅</span>{item.solution}
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

// HOW IT WORKS TEASER
const HowItWorksTeaser = () => (
  <section className="py-20 md:py-28">
    <div className="container">
      <motion.h2 {...fadeUp} className="font-display text-3xl md:text-4xl text-foreground text-center mb-12">
        HOW ETL WORKS
      </motion.h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {[
          { step: "01", title: "Submit Your Setup", desc: "Chart screenshot + written explanation before you trade" },
          { step: "02", title: "Execute Your Trade", desc: "Max 3 trades per setup, automatically linked" },
          { step: "03", title: "Results Are Permanent", desc: "Public archive for all KYC-verified users" },
        ].map((item, i) => (
          <motion.div key={i} {...fadeUp} {...stagger(i)} className="text-center">
            <span className="font-mono text-4xl text-primary/20">{item.step}</span>
            <h3 className="font-display text-xl text-foreground mt-2">{item.title}</h3>
            <p className="font-body text-sm text-muted-foreground mt-2">{item.desc}</p>
            {i < 2 && <div className="hidden md:block text-primary/30 text-2xl mt-4">→</div>}
          </motion.div>
        ))}
      </div>
      <motion.div {...fadeUp} className="text-center mt-8">
        <Link to="/how-it-works" className="font-mono text-xs tracking-widest text-primary hover:underline">
          SEE FULL PROCESS →
        </Link>
      </motion.div>
    </div>
  </section>
);

// TOURNAMENT SNAPSHOT
const TournamentSnapshot = () => (
  <section className="py-20 md:py-28">
    <div className="container max-w-2xl">
      <motion.div {...fadeUp} className="gold-border bg-card p-8 relative">
        <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-primary" />
        <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-primary" />
        <div className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-primary" />
        <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-primary" />
        <h3 className="font-display text-2xl text-foreground mb-4">SEASON 01</h3>
        <div className="grid grid-cols-2 gap-4 mb-6">
          {[
            ["Format", "Individual"],
            ["Dates", "Q3 2025"],
            ["Account", "Demo MT5"],
            ["Ranking", "Weighted Score"],
          ].map(([k, v]) => (
            <div key={k}>
              <p className="font-mono text-[10px] text-muted-foreground tracking-widest">{k}</p>
              <p className="font-mono text-sm text-foreground">{v}</p>
            </div>
          ))}
        </div>
        <div className="mb-2 flex justify-between">
          <span className="font-mono text-[10px] text-primary tracking-widest">REGISTRATION OPEN</span>
          <span className="w-2 h-2 rounded-full bg-gain animate-pulse-dot mt-1" />
        </div>
        <div className="h-1 bg-muted overflow-hidden">
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: "35%" }}
            viewport={{ once: true }}
            transition={{ duration: 1.5 }}
            className="h-full bg-primary"
          />
        </div>
      </motion.div>
    </div>
  </section>
);

// LEADERBOARD TEASER
const LeaderboardTeaser = () => {
  const rows = [
    { rank: 1, trader: "AlphaVortex", score: 92, net: "+12.4%", status: "Active" },
    { rank: 2, trader: "SilentPips", score: 88, net: "+9.7%", status: "Active" },
    { rank: 3, trader: "NightOwlFX", score: 85, net: "+8.2%", status: "Active" },
    { rank: 4, trader: "██████████", score: 81, net: "+7.1%", status: "Active" },
    { rank: 5, trader: "██████████", score: 78, net: "+6.5%", status: "Active" },
  ];

  return (
    <section className="py-20 md:py-28">
      <div className="container">
        <motion.h2 {...fadeUp} className="font-display text-3xl md:text-4xl text-foreground text-center mb-12">
          LEADERBOARD PREVIEW
        </motion.h2>
        <motion.div {...fadeUp} className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-primary/20">
                {["Rank", "Trader", "Setup Score", "Net %", "Status"].map((h) => (
                  <th key={h} className="font-mono text-[10px] tracking-widest text-muted-foreground text-left p-3">{h}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {rows.map((row, i) => (
                <tr
                  key={i}
                  className={`border-b border-primary/5 ${i >= 3 ? "blur-sm select-none" : ""} ${
                    i === 0 ? "border-l-2 border-l-primary" : i === 1 ? "border-l-2 border-l-secondary" : i === 2 ? "border-l-2 border-l-orange-700" : ""
                  }`}
                >
                  <td className="font-mono text-sm p-3 text-foreground">{row.rank}</td>
                  <td className="font-mono text-sm p-3 text-foreground">{row.trader}</td>
                  <td className="font-mono text-sm p-3 text-foreground">{row.score}</td>
                  <td className="font-mono text-sm p-3 text-gain">{row.net}</td>
                  <td className="font-mono text-[10px] p-3 text-gain tracking-widest">{row.status}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </motion.div>
        <motion.div {...fadeUp} className="mt-6 gold-border bg-primary/5 p-6 text-center">
          <p className="font-body text-sm text-foreground mb-3">Complete KYC to unlock full standings</p>
          <Link to="/waitlist" className="btn-shimmer inline-block font-mono text-xs tracking-widest text-primary-foreground px-6 py-3">
            VERIFY NOW →
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

// ACCESS LEVELS
const AccessStrip = () => (
  <section className="py-20 md:py-28">
    <div className="container">
      <motion.h2 {...fadeUp} className="font-display text-3xl md:text-4xl text-foreground text-center mb-12">
        ACCESS LEVELS
      </motion.h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {[
          { tier: "PUBLIC VISITOR", features: ["View homepage", "Read tournament info"], highlight: false },
          { tier: "EMAIL REGISTERED", features: ["Limited leaderboard", "Follow season progress"], highlight: false },
          { tier: "KYC VERIFIED", features: ["Full standings", "Setup history", "Trade analytics", "Participate"], highlight: true },
        ].map((card, i) => (
          <motion.div
            key={i}
            {...fadeUp}
            {...stagger(i)}
            className={`p-6 ${
              card.highlight ? "gold-border gold-glow bg-primary/5" : "border border-muted bg-card"
            }`}
          >
            {card.highlight && (
              <span className="font-mono text-[10px] tracking-widest text-primary mb-3 block">★ FULL ACCESS</span>
            )}
            <h3 className="font-display text-lg text-foreground mb-4">{card.tier}</h3>
            {card.features.map((f) => (
              <div key={f} className="flex items-center gap-2 mb-2">
                {card.highlight ? <MdCheck className="text-primary" size={14} /> : <MdLock className="text-muted-foreground" size={14} />}
                <span className="font-body text-sm text-muted-foreground">{f}</span>
              </div>
            ))}
          </motion.div>
        ))}
      </div>
      <motion.div {...fadeUp} className="text-center mt-6">
        <Link to="/access" className="font-mono text-xs tracking-widest text-primary hover:underline">
          VIEW FULL ACCESS DETAILS →
        </Link>
      </motion.div>
    </div>
  </section>
);

// WHY ETL
const WhyETL = () => (
  <section className="relative py-20 md:py-28 overflow-hidden">
    <div className="absolute inset-0 z-0">
      <img src={whyEtlBg} alt="" className="w-full h-full object-cover opacity-20" loading="lazy" />
      <div className="absolute inset-0 bg-background/85" />
    </div>
    <div className="container relative z-10">
      <motion.h2 {...fadeUp} className="font-display text-3xl md:text-4xl text-foreground text-center mb-12">
        WHO IS ETL FOR?
      </motion.h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
        {[
          { icon: "📈", title: "Pro Traders", desc: "Prove your edge with an auditable track record" },
          { icon: "🏢", title: "Prop Firms & Sponsors", desc: "Discover verified talent, not social media noise" },
          { icon: "🎓", title: "Analysts & Educators", desc: "Showcase real results, not backtested theories" },
        ].map((card, i) => (
          <motion.div key={i} {...fadeUp} {...stagger(i)} className="gold-border p-6 bg-card/80 text-center">
            <span className="text-3xl mb-3 block">{card.icon}</span>
            <h3 className="font-display text-lg text-foreground">{card.title}</h3>
            <p className="font-body text-sm text-muted-foreground mt-2">{card.desc}</p>
          </motion.div>
        ))}
      </div>
      <motion.blockquote {...fadeUp} className="text-center border-l-2 border-primary pl-6 mx-auto max-w-2xl">
        <p className="font-body text-lg text-foreground italic">
          "The first trading league built on transparency, not hype."
        </p>
      </motion.blockquote>
    </div>
  </section>
);

const Index = () => (
  <div className="bg-background min-h-screen">
    <Navbar />
    <TickerBar />
    <HeroSection />
    <ProblemSection />
    <HowItWorksTeaser />
    <TournamentSnapshot />
    <LeaderboardTeaser />
    <AccessStrip />
    <WhyETL />
    <CTABanner
      headline="Season 01 is open. Your setup history starts now."
      buttonText="Join the Waitlist →"
      subline="847 traders already registered across 34 countries"
    />
    <Footer />
  </div>
);

export default Index;
