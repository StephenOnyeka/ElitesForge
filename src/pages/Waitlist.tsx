import { useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { MdCheck, MdArrowBack } from "react-icons/md";
import waitlistBg from "../assets/waitlist-bg.jpg";

const UNSPLASH_FOCUSED_TRADER = "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&q=80&auto=format&fit=crop";
const UNSPLASH_TRADING_FLOOR = "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=800&q=80&auto=format&fit=crop";

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
};

const countries = [
  "United States", "United Kingdom", "Nigeria", "Germany", "United Arab Emirates",
  "South Africa", "India", "Canada", "Australia", "Singapore", "Japan", "France",
  "Netherlands", "Switzerland", "Brazil", "Kenya", "Ghana", "Egypt", "Malaysia", "Philippines",
];

const Waitlist = () => {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    name: "", email: "", country: "", experience: "", instruments: [] as string[], agreeKYC: false,
  });

  const instruments = ["FX", "Indices", "Commodities", "Crypto"];

  const toggleInstrument = (inst: string) => {
    setForm((prev) => ({
      ...prev,
      instruments: prev.instruments.includes(inst)
        ? prev.instruments.filter((i) => i !== inst)
        : [...prev.instruments, inst],
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="bg-background min-h-screen relative">
      <div className="fixed inset-0 z-0">
        <img src={waitlistBg} alt="" className="w-full h-full object-cover opacity-15" />
        <div className="absolute inset-0 bg-background/80" />
      </div>

      <nav className="fixed top-0 left-0 right-0 z-50 border-b border-primary/30 bg-background/90">
        <div className="container flex h-16 items-center justify-center">
          <Link to="/" className="font-display text-2xl tracking-wider text-foreground">
            ELITE TRADER <span className="text-gold-gradient">LEAGUE</span>
          </Link>
        </div>
      </nav>

      <div className="pt-24 pb-16 relative z-10">
        <div className="container">
          <AnimatePresence mode="wait">
            {!submitted ? (
              <motion.div key="form" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
                {/* Left Panel */}
                <div className="flex flex-col justify-center">
                  <motion.h1 {...fadeUp} className="font-display text-4xl md:text-5xl lg:text-6xl text-foreground leading-tight">
                    SEASON 01 IS FILLING UP.{" "}
                    <span className="text-gold-gradient">SERIOUS TRADERS ONLY.</span>
                  </motion.h1>

                  <div className="mt-8 space-y-4">
                    {[
                      "Full KYC verification — every trader is real",
                      "Submit your setup before you trade — full accountability",
                      "Public archive — your strategy history is your reputation",
                    ].map((point, i) => (
                      <motion.div key={i} {...fadeUp} transition={{ delay: 0.2 + i * 0.1 }} className="flex items-start gap-3">
                        <MdCheck className="text-primary mt-0.5 shrink-0" size={18} />
                        <p className="font-body text-muted-foreground">{point}</p>
                      </motion.div>
                    ))}
                  </div>

                  <motion.p {...fadeUp} transition={{ delay: 0.5 }} className="mt-8 font-mono text-sm text-primary">
                    847 traders already registered across 34 countries
                  </motion.p>

                  {/* People image instead of reusing waitlistBg */}
                  <motion.div {...fadeUp} transition={{ delay: 0.6 }} className="mt-8 relative hidden lg:block">
                    <img
                      src={UNSPLASH_TRADING_FLOOR}
                      alt="Active trading environment"
                      className="w-full h-48 object-cover gold-border"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent" />
                    <p className="absolute bottom-3 left-4 font-mono text-[10px] tracking-widest text-primary">
                      JOIN 847+ VERIFIED TRADERS
                    </p>
                  </motion.div>
                </div>

                {/* Right Panel - Form */}
                <motion.form onSubmit={handleSubmit} {...fadeUp} transition={{ delay: 0.2 }} className="gold-border bg-card/90 p-6 md:p-8">
                  <p className="font-mono text-[10px] tracking-widest text-muted-foreground mb-6">WAITLIST REGISTRATION</p>
                  <div className="space-y-4">
                    <div>
                      <label className="font-mono text-[10px] tracking-widest text-primary block mb-1">FULL NAME</label>
                      <input type="text" required value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} className="w-full bg-muted border border-primary/20 p-3 font-mono text-sm text-foreground focus:border-primary outline-none" />
                    </div>
                    <div>
                      <label className="font-mono text-[10px] tracking-widest text-primary block mb-1">EMAIL ADDRESS</label>
                      <input type="email" required value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} className="w-full bg-muted border border-primary/20 p-3 font-mono text-sm text-foreground focus:border-primary outline-none" />
                    </div>
                    <div>
                      <label className="font-mono text-[10px] tracking-widest text-primary block mb-1">COUNTRY</label>
                      <select required value={form.country} onChange={(e) => setForm({ ...form, country: e.target.value })} className="w-full bg-muted border border-primary/20 p-3 font-mono text-sm text-foreground focus:border-primary outline-none">
                        <option value="">Select country</option>
                        {countries.map((c) => <option key={c} value={c}>{c}</option>)}
                      </select>
                    </div>
                    <div>
                      <label className="font-mono text-[10px] tracking-widest text-primary block mb-1">TRADING EXPERIENCE</label>
                      <select required value={form.experience} onChange={(e) => setForm({ ...form, experience: e.target.value })} className="w-full bg-muted border border-primary/20 p-3 font-mono text-sm text-foreground focus:border-primary outline-none">
                        <option value="">Select level</option>
                        <option value="beginner">Beginner</option>
                        <option value="intermediate">Intermediate</option>
                        <option value="professional">Professional</option>
                      </select>
                    </div>
                    <div>
                      <label className="font-mono text-[10px] tracking-widest text-primary block mb-2">PREFERRED INSTRUMENTS</label>
                      <div className="flex flex-wrap gap-2">
                        {instruments.map((inst) => (
                          <button key={inst} type="button" onClick={() => toggleInstrument(inst)} className={`font-mono text-[10px] tracking-widest px-4 py-2 transition-colors ${form.instruments.includes(inst) ? "bg-primary text-primary-foreground" : "gold-border text-muted-foreground hover:text-foreground"}`}>
                            {inst}
                          </button>
                        ))}
                      </div>
                    </div>
                    <label className="flex items-start gap-3 cursor-pointer mt-4">
                      <input type="checkbox" required checked={form.agreeKYC} onChange={(e) => setForm({ ...form, agreeKYC: e.target.checked })} className="mt-1 accent-primary" />
                      <span className="font-body text-xs text-muted-foreground">I agree to complete KYC before trading access is granted</span>
                    </label>
                  </div>
                  <button type="submit" className="w-full btn-shimmer font-mono text-xs tracking-widest text-primary-foreground px-8 py-4 mt-6 font-medium">
                    SECURE MY SPOT →
                  </button>
                  <p className="mt-3 font-mono text-[10px] text-muted-foreground text-center">No payment required. Demo trading only.</p>
                </motion.form>
              </motion.div>
            ) : (
              <motion.div key="success" initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} className="max-w-xl mx-auto text-center py-20">
                <svg width="80" height="80" viewBox="0 0 80 80" className="mx-auto mb-8">
                  <circle cx="40" cy="40" r="36" fill="none" stroke="hsl(42 88% 55%)" strokeWidth="2" />
                  <path d="M24 40 L35 52 L56 28" fill="none" stroke="hsl(42 88% 55%)" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="animate-draw-check" />
                </svg>
                <h1 className="font-display text-4xl md:text-5xl text-foreground mb-4">YOU'RE ON THE LIST.</h1>
                <p className="font-body text-muted-foreground mb-8">Check your email for next steps. KYC instructions are on their way.</p>
                <p className="font-body text-sm text-muted-foreground mb-4">Know a serious trader? Send them here.</p>
                <div className="flex gap-3 justify-center mb-8">
                  <a href="#" className="gold-border px-4 py-2 font-mono text-[10px] tracking-widest text-foreground hover:bg-primary/5">SHARE ON X</a>
                  <a href="#" className="gold-border px-4 py-2 font-mono text-[10px] tracking-widest text-foreground hover:bg-primary/5">WHATSAPP</a>
                </div>
                <Link to="/" className="font-mono text-xs text-muted-foreground hover:text-primary flex items-center gap-1 justify-center">
                  <MdArrowBack size={14} /> Back to ETL Home
                </Link>
              </motion.div>
            )}
          </AnimatePresence>

          {!submitted && (
            <motion.section {...fadeUp} transition={{ delay: 0.5 }} className="mt-16 max-w-3xl mx-auto">
              <h3 className="font-display text-2xl text-foreground text-center mb-8">WHAT HAPPENS NEXT</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {[
                  { step: "01", title: "Check Email", desc: "Confirmation and KYC instructions sent immediately" },
                  { step: "02", title: "Complete KYC", desc: "Upload ID + selfie, approved in 24–48 hours" },
                  { step: "03", title: "Access Granted", desc: "Submit your first setup when the season opens" },
                ].map((item, i) => (
                  <div key={i} className="text-center">
                    <span className="font-mono text-3xl text-primary/20">{item.step}</span>
                    <h4 className="font-display text-lg text-foreground mt-2">{item.title}</h4>
                    <p className="font-body text-sm text-muted-foreground mt-1">{item.desc}</p>
                  </div>
                ))}
              </div>
            </motion.section>
          )}
        </div>
      </div>
    </div>
  );
};

export default Waitlist;
