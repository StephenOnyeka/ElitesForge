import { motion } from "framer-motion";
import { MdVerified, MdShield, MdGroups, MdTimeline } from "react-icons/md";
import Navbar from "../components/Navbar";
import TickerBar from "../components/TickerBar";
import Footer from "../components/Footer";
import PageHero from "../components/PageHero";
import CTABanner from "../components/CTABanner";

// Dark, aspirational skyline — sets an elite, ambitious tone behind the gold overlay.
const ABOUT_HERO = "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1600&q=80&auto=format&fit=crop";
// Team collaboration shot for the "Powered by ElitesForge" section.
const TEAM_IMAGE = "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&q=80&auto=format&fit=crop";
const FLOOR_IMAGE = "/images/traders-competition.png";

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
};

const values = [
  {
    icon: MdVerified,
    title: "VERIFIED OR NOTHING",
    desc: "Every trader passes KYC. Every result is recorded on a demo account we control. No screenshots, no claims — only proof.",
  },
  {
    icon: MdShield,
    title: "INTEGRITY FIRST",
    desc: "One account per person. No anonymous entries, no manipulation. The standings mean something because they can't be gamed.",
  },
  {
    icon: MdTimeline,
    title: "SKILL ON RECORD",
    desc: "Discipline, drawdown, and consistency are scored — not just raw profit. The league rewards the trader, not the gambler.",
  },
  {
    icon: MdGroups,
    title: "BUILT FOR TRADERS",
    desc: "A stage for serious retail traders to prove themselves and get seen by prop firms, sponsors, and the wider community.",
  },
];

const milestones = [
  { id: "01", label: "The Idea", desc: "Frustrated by faked social-media track records, ElitesForge set out to build a competition where results can't be invented." },
  { id: "02", label: "The Build", desc: "A transparent, KYC-gated platform with controlled demo accounts and a weighted scoring engine." },
  { id: "03", label: "Season 01", desc: "The first Elite Trader League season opens — 847 verified traders competing on a single source of truth." },
  { id: "04", label: "What's Next", desc: "Prop-firm recruitment partners, sponsor exposure, and a permanent archive of every champion." },
];

const stats = [
  ["847", "VERIFIED TRADERS"],
  ["100%", "DEMO ACCOUNTS"],
  ["0", "REAL CAPITAL AT RISK"],
  ["1", "SOURCE OF TRUTH"],
];

const About = () => (
  <div className="bg-background min-h-screen">
    <Navbar />
    <TickerBar />
    <PageHero
      headline="We Built the League We Couldn't Find."
      subline="ElitesForge exists to settle one question: who can actually trade?"
      breadcrumb="Home > About Us"
      backgroundImage={ABOUT_HERO}
      compact
    />

    {/* Mission */}
    <section className="py-16 md:py-20">
      <div className="container max-w-5xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <motion.div {...fadeUp}>
            <p className="font-mono text-[10px] tracking-[0.3em] text-primary mb-4">OUR MISSION</p>
            <h2 className="font-display text-3xl md:text-4xl text-foreground leading-tight mb-6">
              Skill should be proven on record — not claimed on social media.
            </h2>
            <div className="space-y-4 font-body text-muted-foreground leading-relaxed">
              <p>
                The trading world is loud with screenshots, edited statements, and overnight "experts."
                We were tired of it. Real skill is quiet, consistent, and verifiable — so we built a place
                where the only thing that talks is the track record.
              </p>
              <p>
                The <span className="text-foreground">Elite Trader League</span> is a transparent,
                identity-verified tournament run entirely on demo accounts. No entry fees, no real capital,
                no anonymous entries. Just traders, ranked honestly, on a leaderboard that
                <span className="text-primary"> can't be faked</span>.
              </p>
            </div>
          </motion.div>
          <motion.div {...fadeUp} transition={{ delay: 0.15 }} className="relative">
            <img
              src={FLOOR_IMAGE}
              alt="Traders competing in the Elite Trader League"
              className="w-full h-80 object-cover gold-border"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/70 to-transparent" />
            <div className="absolute top-0 left-0 w-5 h-5 border-t-2 border-l-2 border-primary" />
            <div className="absolute bottom-0 right-0 w-5 h-5 border-b-2 border-r-2 border-primary" />
          </motion.div>
        </div>
      </div>
    </section>

    {/* Proof stat strip */}
    <section className="py-8 grid-bg">
      <div className="container">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-primary/10 border border-primary/15 max-w-5xl mx-auto">
          {stats.map(([value, label], i) => (
            <motion.div key={label} {...fadeUp} transition={{ delay: i * 0.08 }} className="bg-card px-4 py-7 text-center">
              <p className="font-display text-3xl md:text-4xl text-gold-gradient">{value}</p>
              <p className="mt-2 font-mono text-[9px] tracking-widest text-muted-foreground">{label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    {/* Values */}
    <section className="py-16 md:py-20">
      <div className="container">
        <motion.div {...fadeUp} className="text-center mb-12">
          <p className="font-mono text-[10px] tracking-[0.3em] text-primary mb-3">WHAT WE STAND FOR</p>
          <h2 className="font-display text-3xl md:text-4xl text-foreground">OUR PRINCIPLES</h2>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 max-w-5xl mx-auto">
          {values.map((v, i) => {
            const Icon = v.icon;
            return (
              <motion.div
                key={v.title}
                {...fadeUp}
                transition={{ delay: i * 0.1 }}
                className="group relative gold-border bg-card p-6 overflow-hidden"
              >
                <div className="absolute -right-5 -top-5 text-primary/5 transition-colors group-hover:text-primary/10">
                  <Icon size={88} />
                </div>
                <span className="relative flex h-11 w-11 items-center justify-center bg-primary/10 text-primary mb-4">
                  <Icon size={22} />
                </span>
                <h3 className="relative font-display text-lg text-foreground mb-2">{v.title}</h3>
                <p className="relative font-body text-sm text-muted-foreground leading-relaxed">{v.desc}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>

    {/* Story timeline */}
    <section className="py-16 md:py-20 grid-bg">
      <div className="container max-w-3xl">
        <motion.div {...fadeUp} className="text-center mb-12">
          <p className="font-mono text-[10px] tracking-[0.3em] text-primary mb-3">HOW WE GOT HERE</p>
          <h2 className="font-display text-3xl md:text-4xl text-foreground">THE STORY</h2>
        </motion.div>
        <div className="relative ml-2 border-l border-primary/20 pl-8 space-y-9">
          {milestones.map((m, i) => (
            <motion.div
              key={m.id}
              initial={{ opacity: 0, x: -12 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.45 }}
              className="relative"
            >
              <span className="absolute -left-[41px] top-1 h-3 w-3 rotate-45 bg-primary" />
              <div className="flex items-center gap-3">
                <span className="font-mono text-[10px] tracking-widest text-primary/40">{m.id}</span>
                <h3 className="font-display text-lg text-foreground">{m.label}</h3>
              </div>
              <p className="mt-1 font-body text-sm text-muted-foreground leading-relaxed">{m.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    {/* Team / backing */}
    <section className="py-16 md:py-20">
      <div className="container max-w-5xl">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 items-center">
          <motion.div {...fadeUp} className="lg:col-span-2 relative">
            <img
              src={TEAM_IMAGE}
              alt="The ElitesForge team"
              className="w-full h-72 object-cover gold-border"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent" />
          </motion.div>
          <motion.div {...fadeUp} transition={{ delay: 0.15 }} className="lg:col-span-3">
            <p className="font-mono text-[10px] tracking-[0.3em] text-primary mb-4">BEHIND THE LEAGUE</p>
            <h2 className="font-display text-2xl md:text-3xl text-foreground mb-5">POWERED BY ELITESFORGE</h2>
            <p className="font-body text-muted-foreground leading-relaxed mb-4">
              ElitesForge is a team of traders, engineers, and designers who believe the markets reward
              proof, not promises. We handle the verification, the infrastructure, and the scoring so the
              only variable left is skill.
            </p>
            <p className="font-body text-muted-foreground leading-relaxed">
              We're independent, we don't take entry fees, and we run every season on demo accounts —
              because integrity isn't a feature, it's the entire point.
            </p>
          </motion.div>
        </div>
      </div>
    </section>

    <CTABanner headline="Think you can prove it?" buttonText="Join the Waitlist →" />
    <Footer />
  </div>
);

export default About;
