import { motion } from "framer-motion";
import { MdCheck, MdLock } from "react-icons/md";
import Navbar from "../components/Navbar";
import TickerBar from "../components/TickerBar";
import Footer from "../components/Footer";
import PageHero from "../components/PageHero";
import CTABanner from "../components/CTABanner";
import accessHero from "../assets/access-hero.jpg";

const UNSPLASH_KYC_VERIFY = "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=800&q=80&auto=format&fit=crop";
const UNSPLASH_SECURE_TEAM = "https://images.unsplash.com/photo-1553877522-43269d4ea984?w=800&q=80&auto=format&fit=crop";

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
};

const tiers = [
  {
    name: "PUBLIC VISITOR",
    highlight: false,
    features: [
      { text: "View homepage", unlocked: true },
      { text: "Read tournament info", unlocked: true },
      { text: "Limited leaderboard", unlocked: false },
      { text: "Setup history", unlocked: false },
      { text: "Trade analytics", unlocked: false },
      { text: "Tournament participation", unlocked: false },
    ],
  },
  {
    name: "EMAIL REGISTERED",
    highlight: false,
    features: [
      { text: "View homepage", unlocked: true },
      { text: "Read tournament info", unlocked: true },
      { text: "Limited leaderboard data", unlocked: true },
      { text: "Follow season progress", unlocked: true },
      { text: "Setup cards (blurred)", unlocked: true },
      { text: "Tournament participation", unlocked: false },
    ],
  },
  {
    name: "KYC VERIFIED",
    highlight: true,
    features: [
      { text: "Everything in Email tier", unlocked: true },
      { text: "Full setup screenshots", unlocked: true },
      { text: "Complete trade history", unlocked: true },
      { text: "Analytics & equity curves", unlocked: true },
      { text: "Tournament participation", unlocked: true },
      { text: "Trader profile page", unlocked: true },
    ],
  },
];

const Access = () => (
  <div className="bg-background min-h-screen">
    <Navbar />
    <TickerBar />
    <PageHero
      headline="Transparency Is Earned. Here's How Access Works."
      subline="ETL uses progressive access to protect the integrity of the league."
      breadcrumb="Home > Access Levels"
      backgroundImage={accessHero}
      compact
    />

    {/* Three-Tier Cards */}
    <section className="py-16">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {tiers.map((tier, i) => (
            <motion.div
              key={i}
              {...fadeUp}
              transition={{ delay: i * 0.1 }}
              className={`p-6 ${tier.highlight ? "gold-border gold-glow bg-primary/5" : i === 1 ? "border border-blue-900/30 bg-card" : "border border-muted bg-card"}`}
            >
              {tier.highlight && <span className="font-mono text-[10px] tracking-widest text-primary mb-3 block">★ FULL ACCESS</span>}
              <h3 className="font-display text-xl text-foreground mb-6">{tier.name}</h3>
              {tier.features.map((f) => (
                <div key={f.text} className="flex items-center gap-2 mb-3">
                  {f.unlocked ? <MdCheck className="text-primary shrink-0" size={16} /> : <MdLock className="text-muted-foreground shrink-0" size={16} />}
                  <span className={`font-body text-sm ${f.unlocked ? "text-foreground" : "text-muted-foreground"}`}>{f.text}</span>
                </div>
              ))}
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    {/* KYC Process with image */}
    <section className="py-16 grid-bg">
      <div className="container max-w-4xl">
        <motion.h2 {...fadeUp} className="font-display text-3xl text-foreground text-center mb-12">KYC VERIFICATION PROCESS</motion.h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center mb-10">
          <motion.div {...fadeUp} className="relative">
            <img
              src={UNSPLASH_KYC_VERIFY}
              alt="Secure identity verification process"
              className="w-full h-64 object-cover gold-border"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-background/30 to-transparent" />
          </motion.div>
          <div className="space-y-6">
            {[
              { step: "01", title: "Submit ID", desc: "Passport, national ID, or driver's licence" },
              { step: "02", title: "Face Verification", desc: "Selfie matched against your ID" },
              { step: "03", title: "Approved", desc: "Full access granted within 24–48 hours" },
            ].map((item, i) => (
              <motion.div key={i} {...fadeUp} transition={{ delay: i * 0.1 }} className="flex items-start gap-4">
                <span className="font-mono text-2xl text-primary/30 shrink-0">{item.step}</span>
                <div>
                  <h3 className="font-display text-lg text-foreground">{item.title}</h3>
                  <p className="font-body text-sm text-muted-foreground">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
        <motion.p {...fadeUp} className="text-center font-mono text-[10px] text-muted-foreground tracking-widest">
          YOUR DATA IS HANDLED SECURELY AND NEVER SHARED WITH THIRD PARTIES.
        </motion.p>
      </div>
    </section>

    {/* Why KYC with image */}
    <section className="py-16">
      <div className="container max-w-4xl">
        <motion.h2 {...fadeUp} className="font-display text-3xl text-foreground text-center mb-4">WHY WE REQUIRE KYC</motion.h2>
        <motion.p {...fadeUp} className="font-body text-muted-foreground text-center mb-8">
          "This isn't a restriction — it's what makes the leaderboard worth trusting."
        </motion.p>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div>
            {[
              "One account per person — no duplicate entries",
              "No fake results — real identity behind every trade",
              "No anonymous manipulation — accountability is the foundation of ETL",
            ].map((point, i) => (
              <motion.div key={i} {...fadeUp} transition={{ delay: i * 0.1 }} className="flex items-center gap-3 mb-4 p-4 gold-border bg-card">
                <MdCheck className="text-primary shrink-0" size={18} />
                <p className="font-body text-foreground">{point}</p>
              </motion.div>
            ))}
          </div>
          <motion.div {...fadeUp} transition={{ delay: 0.3 }} className="hidden lg:block">
            <img
              src={UNSPLASH_SECURE_TEAM}
              alt="Professional team ensuring platform integrity"
              className="w-full h-72 object-cover gold-border"
              loading="lazy"
            />
          </motion.div>
        </div>
      </div>
    </section>

    <CTABanner headline="Ready for full access?" buttonText="Start KYC Verification →" />
    <Footer />
  </div>
);

export default Access;
