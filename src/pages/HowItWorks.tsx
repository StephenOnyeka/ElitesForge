import { motion } from "framer-motion";
import { MdCameraAlt, MdEdit, MdLock, MdTrendingUp, MdArchive, MdLightbulb, MdSwapVert } from "react-icons/md";
import Navbar from "../components/Navbar";
import TickerBar from "../components/TickerBar";
import Footer from "../components/Footer";
import PageHero from "../components/PageHero";
import CTABanner from "../components/CTABanner";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import howItWorksHero from "../assets/how-it-works-hero.jpg";

const UNSPLASH_CHART_ANALYSIS = "https://images.unsplash.com/photo-1642790106117-e829e14a795f?w=800&q=80&auto=format&fit=crop";
const UNSPLASH_TRADER_LAPTOP = "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80&auto=format&fit=crop";

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
};

const coreNodes = [
  { icon: <MdLightbulb size={24} />, title: "Idea", desc: "You spot a trading opportunity" },
  { icon: <MdCameraAlt size={24} />, title: "Chart Screenshot", desc: "Upload your chart with the setup marked" },
  { icon: <MdEdit size={24} />, title: "Written Explanation", desc: "Strategy, entry logic, SL/TP reasoning" },
  { icon: <MdLock size={24} />, title: "Submit Setup", desc: "Locked and timestamped on the platform" },
  { icon: <MdSwapVert size={24} />, title: "Execute Trades", desc: "Up to 3 trades linked to this setup" },
  { icon: <MdTrendingUp size={24} />, title: "Outcome Recorded", desc: "Win, loss, or breakeven — permanent" },
  { icon: <MdArchive size={24} />, title: "Archive", desc: "Public record viewable by KYC-verified users" },
];

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
    <section className="py-16">
      <div className="container">
        <motion.h2 {...fadeUp} className="font-display text-3xl text-foreground text-center mb-12">THE CORE LOOP</motion.h2>
        <div className="flex flex-col md:flex-row gap-6 items-stretch">
          {coreNodes.map((node, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15, duration: 0.5 }}
              className="flex-1 gold-border p-4 bg-card text-center relative"
            >
              <div className="text-primary mb-2 flex justify-center">{node.icon}</div>
              <h3 className="font-display text-sm text-foreground">{node.title}</h3>
              <p className="font-body text-xs text-muted-foreground mt-1">{node.desc}</p>
              {i < coreNodes.length - 1 && (
                <div className="hidden md:block absolute -right-3 top-1/2 -translate-y-1/2 text-primary z-10">→</div>
              )}
            </motion.div>
          ))}
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
