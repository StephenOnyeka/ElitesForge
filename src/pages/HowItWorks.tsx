import { motion } from "framer-motion";
import type { IconType } from "react-icons";
import { MdCameraAlt, MdEdit, MdLock, MdTrendingUp, MdArchive, MdLightbulb, MdSwapVert } from "react-icons/md";
import Navbar from "../components/Navbar";
import TickerBar from "../components/TickerBar";
import Footer from "../components/Footer";
import PageHero from "../components/PageHero";
import CTABanner from "../components/CTABanner";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import howItWorksHero from "../assets/how-it-works-hero.jpg";

const UNSPLASH_CHART_ANALYSIS = "https://images.unsplash.com/photo-1642790106117-e829e14a795f?w=800&q=80&auto=format&fit=crop";
// const UNSPLASH_TRADER_LAPTOP = "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80&auto=format&fit=crop";
// const UNSPLASH_TRADER_LAPTOP = "images/laptop.jpg";
const UNSPLASH_TRADER_LAPTOP = "images/trader laptop.jpg";

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
};

type CoreStep = { icon: IconType; title: string; desc: string };
type CorePhase = { phase: string; label: string; tagline: string; steps: CoreStep[] };

const corePhases: CorePhase[] = [
  {
    phase: "01",
    label: "DOCUMENT",
    tagline: "Capture your thesis before you trade",
    steps: [
      { icon: MdLightbulb, title: "Idea", desc: "You spot a trading opportunity" },
      { icon: MdCameraAlt, title: "Chart Screenshot", desc: "Upload your chart with the setup marked" },
      { icon: MdEdit, title: "Written Explanation", desc: "Strategy, entry logic, SL/TP reasoning" },
    ],
  },
  {
    phase: "02",
    label: "COMMIT & EXECUTE",
    tagline: "Lock in your plan, then trade it",
    steps: [
      { icon: MdLock, title: "Submit Setup", desc: "Locked and timestamped on the platform" },
      { icon: MdSwapVert, title: "Execute Trades", desc: "Up to 3 trades linked to this setup" },
    ],
  },
  {
    phase: "03",
    label: "RECORD & ARCHIVE",
    tagline: "Every outcome becomes public history",
    steps: [
      { icon: MdTrendingUp, title: "Outcome Recorded", desc: "Win, loss, or breakeven — permanent" },
      { icon: MdArchive, title: "Archive", desc: "Public record viewable by KYC-verified users" },
    ],
  },
];

const coreSteps = corePhases.flatMap((phase) => phase.steps);

const globalStepNumber = (phaseIndex: number, stepIndex: number) => {
  const offsets = [0, 3, 5];
  return offsets[phaseIndex] + stepIndex + 1;
};

const faqs = [
  { q: "Can I submit multiple setups per session?", a: "No, one per session. This ensures quality over quantity." },
  { q: "What if my trade doesn't follow my setup?", a: "It will be flagged and may impact your discipline score." },
  { q: "Is my setup visible immediately after submission?", a: "Yes, to KYC-verified users." },
  { q: "Can I edit my setup after submitting?", a: "No, submissions are locked and timestamped permanently." },
  { q: "What platform does ETL use?", a: "MT5 / MT4 demo accounts." },
  { q: "How long does KYC take?", a: "24–48 hours after submission." },
];

const HowItWorks = () => (
  <div className="bg-background min-h-screen">
    <Navbar />
    <TickerBar />
    <PageHero
      headline="From Idea to Outcome — Every Trade Documented."
      subline="ETL's accountability system ensures your strategy is on record before you execute."
      breadcrumb="Home > How It Works"
      backgroundImage={howItWorksHero}
      compact
    />

    {/* Core Loop */}
    <section className="py-16 md:py-20 relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[480px] w-[480px] rounded-full bg-primary/[0.04] blur-3xl" />
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
      </div>

      <div className="container relative">
        <motion.div {...fadeUp} className="mx-auto mb-14 max-w-2xl text-center">
          <p className="font-mono text-[10px] tracking-widest text-primary mb-3">ETL ACCOUNTABILITY ENGINE</p>
          <h2 className="font-display text-3xl md:text-4xl text-foreground">THE CORE LOOP</h2>
          <p className="font-body text-sm md:text-base text-muted-foreground mt-4">
            Seven steps across three phases. Your idea, execution, and outcome — permanently linked before the next session begins.
          </p>
        </motion.div>

        {/* Desktop: three-phase pipeline */}
        <div className="relative hidden lg:block">
          <div className="grid grid-cols-3 gap-6 xl:gap-8">
            {corePhases.map((phase, phaseIndex) => (
              <motion.div
                key={phase.phase}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: phaseIndex * 0.12, duration: 0.55 }}
                className={`relative gold-border bg-card p-6 xl:p-8 ${
                  phaseIndex === 1 ? "gold-glow bg-primary/[0.03]" : ""
                }`}
              >
                {phaseIndex === 1 && (
                  <>
                    <div className="absolute top-0 left-0 h-4 w-4 border-l-2 border-t-2 border-primary" />
                    <div className="absolute bottom-0 right-0 h-4 w-4 border-b-2 border-r-2 border-primary" />
                  </>
                )}

                <div className="mb-6 border-b border-primary/10 pb-5">
                  <span className="font-mono text-3xl text-primary/20 leading-none">{phase.phase}</span>
                  <h3 className="font-display text-lg text-primary mt-2">{phase.label}</h3>
                  <p className="font-body text-xs text-muted-foreground mt-1">{phase.tagline}</p>
                </div>

                <div className="space-y-1">
                  {phase.steps.map((step, stepIndex) => {
                    const StepIcon = step.icon;
                    const stepNum = globalStepNumber(phaseIndex, stepIndex);

                    return (
                      <div key={step.title}>
                        <motion.div
                          initial={{ opacity: 0, x: -12 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: phaseIndex * 0.12 + stepIndex * 0.08, duration: 0.45 }}
                          className="group flex gap-4 p-3 transition-colors hover:bg-primary/[0.04]"
                        >
                          <div className="flex shrink-0 flex-col items-center">
                            <div className="flex h-10 w-10 items-center justify-center gold-border bg-background text-primary transition-colors group-hover:bg-primary/10">
                              <StepIcon size={20} />
                            </div>
                          </div>
                          <div className="min-w-0 pt-0.5">
                            <p className="font-mono text-[10px] tracking-widest text-primary/50">
                              STEP {String(stepNum).padStart(2, "0")}
                            </p>
                            <h4 className="font-display text-base text-foreground">{step.title}</h4>
                            <p className="font-body text-xs text-muted-foreground mt-0.5 leading-relaxed">{step.desc}</p>
                          </div>
                        </motion.div>
                        {stepIndex < phase.steps.length - 1 && (
                          <div className="ml-[19px] h-5 w-px bg-primary/25" />
                        )}
                      </div>
                    );
                  })}
                </div>

                {phaseIndex < corePhases.length - 1 && (
                  <div className="pointer-events-none absolute -right-4 xl:-right-5 top-1/2 z-10 flex -translate-y-1/2 items-center">
                    <span className="hidden xl:block h-px w-3 bg-primary/30" />
                    <span className="font-mono text-lg text-primary">→</span>
                  </div>
                )}
              </motion.div>
            ))}
          </div>

          <motion.div
            {...fadeUp}
            transition={{ delay: 0.4 }}
            className="mt-10 flex flex-col items-center gap-3 sm:flex-row sm:justify-center"
          >
            <div className="flex items-center gap-3">
              <span className="h-px w-10 bg-primary/25" />
              <span className="font-mono text-[10px] tracking-widest text-muted-foreground uppercase">
                Archive feeds the next session
              </span>
              <span className="h-px w-10 bg-primary/25" />
            </div>
            <div className="flex items-center gap-2 font-mono text-sm text-primary">
              <span>IDEA</span>
              <span className="text-primary/40">→</span>
              <span>ARCHIVE</span>
              <span className="text-primary/40">→</span>
              <span className="inline-flex items-center gap-1">
                <span>IDEA</span>
                <span className="text-lg leading-none">↻</span>
              </span>
            </div>
          </motion.div>
        </div>

        {/* Tablet: horizontal scroll snap */}
        <div className="hidden md:block lg:hidden -mx-4 px-4">
          <div className="flex snap-x snap-mandatory gap-4 overflow-x-auto pb-4 scrollbar-none">
            {coreSteps.map((step, i) => {
              const StepIcon = step.icon;
              return (
                <motion.div
                  key={step.title}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.06, duration: 0.45 }}
                  className="w-[240px] shrink-0 snap-center gold-border bg-card p-5"
                >
                  <p className="font-mono text-[10px] tracking-widest text-primary/50 mb-3">
                    {String(i + 1).padStart(2, "0")} / 07
                  </p>
                  <div className="mb-3 flex h-10 w-10 items-center justify-center gold-border text-primary">
                    <StepIcon size={20} />
                  </div>
                  <h4 className="font-display text-sm text-foreground">{step.title}</h4>
                  <p className="font-body text-xs text-muted-foreground mt-1 leading-relaxed">{step.desc}</p>
                </motion.div>
              );
            })}
          </div>
          <p className="font-mono text-[10px] tracking-widest text-muted-foreground text-center mt-2">
            SWIPE TO EXPLORE ALL 7 STEPS →
          </p>
        </div>

        {/* Mobile: vertical timeline */}
        <div className="md:hidden relative ml-3 border-l-2 border-primary/20 pl-8">
          {corePhases.map((phase, phaseIndex) => (
            <div key={phase.phase} className={phaseIndex > 0 ? "mt-10" : ""}>
              <motion.div
                {...fadeUp}
                transition={{ delay: phaseIndex * 0.08 }}
                className="relative -ml-[41px] mb-6 pl-2"
              >
                <div className="absolute left-0 top-1 h-3 w-3 -translate-x-[5px] bg-primary" />
                <p className="font-mono text-[10px] tracking-widest text-primary">{phase.phase} · {phase.label}</p>
                <p className="font-body text-xs text-muted-foreground mt-0.5">{phase.tagline}</p>
              </motion.div>

              {phase.steps.map((step, stepIndex) => {
                const StepIcon = step.icon;
                const stepNum = globalStepNumber(phaseIndex, stepIndex);

                return (
                  <motion.div
                    key={step.title}
                    initial={{ opacity: 0, x: -16 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: phaseIndex * 0.1 + stepIndex * 0.06, duration: 0.45 }}
                    className="relative mb-6 last:mb-0"
                  >
                    <div className="absolute -left-[33px] top-4 h-2.5 w-2.5 rounded-full border-2 border-primary bg-background" />
                    <div className="gold-border bg-card p-4">
                      <div className="flex items-start gap-3">
                        <div className="flex h-9 w-9 shrink-0 items-center justify-center gold-border text-primary">
                          <StepIcon size={18} />
                        </div>
                        <div>
                          <p className="font-mono text-[10px] tracking-widest text-primary/50">
                            STEP {String(stepNum).padStart(2, "0")}
                          </p>
                          <h4 className="font-display text-sm text-foreground">{step.title}</h4>
                          <p className="font-body text-xs text-muted-foreground mt-1 leading-relaxed">{step.desc}</p>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          ))}

          <motion.div
            {...fadeUp}
            transition={{ delay: 0.35 }}
            className="relative -ml-[41px] mt-8 flex items-center gap-2 pl-2"
          >
            <div className="absolute left-0 top-1.5 h-3 w-3 -translate-x-[5px] border-2 border-primary bg-background" />
            <span className="font-mono text-[10px] tracking-widest text-primary">LOOP CLOSED</span>
            <span className="text-primary text-lg leading-none">↻</span>
          </motion.div>
        </div>
      </div>
    </section>

    {/* Step by Step with image */}
    <section className="py-16 grid-bg">
      <div className="container max-w-4xl">
        <motion.h2 {...fadeUp} className="font-display text-3xl text-foreground text-center mb-12">STEP BY STEP</motion.h2>
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
          <div className="lg:col-span-3">
            {[
              "Register and complete KYC verification",
              "When ready to trade, open the Setup Submission form",
              "Upload chart screenshot + write your analysis",
              "Submit — your setup is now locked and timestamped",
              "Execute up to 3 trades aligned with that setup",
              "Results are automatically recorded and linked",
              "Your idea, execution, and outcome become part of the public archive",
            ].map((step, i) => (
              <motion.div key={i} {...fadeUp} transition={{ delay: i * 0.05 }} className="flex gap-4 mb-4 p-3 border-b border-primary/10">
                <span className="font-mono text-primary/40 text-lg">{String(i + 1).padStart(2, "0")}</span>
                <p className="font-body text-foreground">{step}</p>
              </motion.div>
            ))}
          </div>
          <motion.div {...fadeUp} transition={{ delay: 0.2 }} className="lg:col-span-2 hidden lg:block">
            <img
              src={UNSPLASH_CHART_ANALYSIS}
              alt="Trader analyzing chart patterns"
              className="w-full h-full object-cover gold-border sticky top-32"
              loading="lazy"
            />
          </motion.div>
        </div>
      </div>
    </section>

    {/* Setup Submission Mockup */}
    <section className="py-16">
      <div className="container max-w-2xl">
        <motion.h2 {...fadeUp} className="font-display text-3xl text-foreground text-center mb-12">SETUP SUBMISSION</motion.h2>
        <motion.div {...fadeUp} className="gold-border bg-card p-8">
          <p className="font-mono text-[10px] text-muted-foreground tracking-widest mb-6">ETL / SETUP FORM / PREVIEW</p>
          {[
            { label: "CHART UPLOAD", placeholder: "Drag & drop your chart screenshot here" },
            { label: "STRATEGY NAME", placeholder: "e.g. XAUUSD Breakout Long" },
            { label: "ENTRY LOGIC", placeholder: "Describe your entry criteria..." },
            { label: "SL/TP REASONING", placeholder: "Stop loss & take profit logic..." },
          ].map((field) => (
            <div key={field.label} className="mb-4">
              <label className="font-mono text-[10px] text-primary tracking-widest block mb-1">{field.label}</label>
              <div className="border border-primary/20 bg-muted p-3">
                <p className="font-mono text-xs text-muted-foreground">{field.placeholder}</p>
              </div>
            </div>
          ))}
          <div className="btn-shimmer p-3 text-center font-mono text-xs tracking-widest text-primary-foreground mt-4">
            SUBMIT & LOCK SETUP
          </div>
        </motion.div>
      </div>
    </section>

    {/* Accountability Trail */}
    <section className="py-16 grid-bg">
      <div className="container max-w-4xl">
        <motion.h2 {...fadeUp} className="font-display text-3xl text-foreground text-center mb-12">THE ACCOUNTABILITY TRAIL</motion.h2>
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 items-start">
          <motion.div {...fadeUp} className="lg:col-span-3 relative border-l-2 border-primary/30 pl-6 space-y-6">
            <div className="gold-border bg-card p-4">
              <p className="font-mono text-[10px] text-muted-foreground tracking-widest mb-1">SETUP CARD</p>
              <p className="font-body text-sm text-foreground">████████ · 2025-07-15 14:32 UTC</p>
              <p className="font-body text-xs text-muted-foreground mt-1">XAUUSD — Breakout long from 1920 support</p>
            </div>
            <div className="gold-border bg-card p-4">
              <p className="font-mono text-[10px] text-muted-foreground tracking-widest mb-1">EXECUTION RECORD</p>
              <div className="grid grid-cols-4 gap-2">
                {[["Entry", "1920.50"], ["SL", "1912.00"], ["TP", "1945.00"], ["Lots", "0.50"]].map(([k, v]) => (
                  <div key={k}>
                    <p className="font-mono text-[10px] text-muted-foreground">{k}</p>
                    <p className="font-mono text-sm text-foreground">{v}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="gold-border bg-gain/10 p-4 flex items-center gap-3">
              <span className="font-mono text-lg text-gain font-bold">WIN</span>
              <span className="font-mono text-gain text-lg">+4.2%</span>
            </div>
          </motion.div>
          <motion.div {...fadeUp} transition={{ delay: 0.3 }} className="lg:col-span-2 hidden lg:block">
            <img
              src={UNSPLASH_TRADER_LAPTOP}
              alt="Person reviewing trading data on laptop"
              className="w-full h-72 object-cover gold-border"
              loading="lazy"
            />
            <p className="font-mono text-[10px] text-muted-foreground tracking-widest mt-3 text-center">
              EVERY SETUP. EVERY TRADE. ON RECORD.
            </p>
          </motion.div>
        </div>
      </div>
    </section>

    {/* FAQ */}
    <section className="py-16">
      <div className="container max-w-3xl">
        <motion.h2 {...fadeUp} className="font-display text-3xl text-foreground text-center mb-12">FAQ</motion.h2>
        <Accordion type="single" collapsible>
          {faqs.map((faq, i) => (
            <AccordionItem key={i} value={`faq-${i}`} className="border-b border-primary/10">
              <AccordionTrigger className="font-body text-foreground text-left hover:text-primary">{faq.q}</AccordionTrigger>
              <AccordionContent className="font-body text-muted-foreground">{faq.a}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>

    <CTABanner headline="Understood the process? Your first setup awaits." buttonText="Register Now →" />
    <Footer />
  </div>
);

export default HowItWorks;
