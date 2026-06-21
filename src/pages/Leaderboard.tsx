import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useState } from "react";
import { MdLock, MdSearch, MdTrendingUp, MdShield, MdBolt, MdWorkspacePremium } from "react-icons/md";
import Navbar from "../components/Navbar";
import TickerBar from "../components/TickerBar";
import Footer from "../components/Footer";
import PageHero from "../components/PageHero";
import CTABanner from "../components/CTABanner";
import leaderboardHero from "../assets/leaderboard-hero.jpg";

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
};

type Row = {
  rank: number;
  trader: string;
  country: string;
  setups: number;
  net: string;
  dd: string;
  disc: number;
  status: string;
};

const rows: Row[] = [
  { rank: 1, trader: "AlphaVortex", country: "🇬🇧", setups: 24, net: "+18.4%", dd: "3.2%", disc: 96, status: "Active" },
  { rank: 2, trader: "SilentPips", country: "🇳🇬", setups: 21, net: "+14.7%", dd: "4.1%", disc: 92, status: "Active" },
  { rank: 3, trader: "NightOwlFX", country: "🇺🇸", setups: 19, net: "+12.2%", dd: "2.8%", disc: 94, status: "Active" },
  { rank: 4, trader: "GoldHunterX", country: "🇦🇪", setups: 18, net: "+10.1%", dd: "5.2%", disc: 87, status: "Active" },
  { rank: 5, trader: "PipSurgeon", country: "🇩🇪", setups: 16, net: "+9.5%", dd: "3.9%", disc: 90, status: "Active" },
  { rank: 6, trader: "Locked", country: "—", setups: 0, net: "—", dd: "—", disc: 0, status: "—" },
  { rank: 7, trader: "Locked", country: "—", setups: 0, net: "—", dd: "—", disc: 0, status: "—" },
  { rank: 8, trader: "Locked", country: "—", setups: 0, net: "—", dd: "—", disc: 0, status: "—" },
];

const champion = { ...rows[0], tier: "CHAMPION", accent: "hsl(42 88% 55%)" };
const runnersUp = [
  { ...rows[1], tier: "RUNNER-UP", accent: "hsl(215 19% 62%)" },
  { ...rows[2], tier: "THIRD PLACE", accent: "hsl(25 60% 50%)" },
];

const filters = ["This Week", "This Month", "Full Season"] as const;

const stats: { label: string; value: string; icon: typeof MdBolt }[] = [
  { label: "TOTAL PARTICIPANTS", value: "847", icon: MdBolt },
  { label: "SETUPS THIS WEEK", value: "214", icon: MdTrendingUp },
  { label: "MOST TRADED", value: "XAUUSD", icon: MdShield },
  { label: "HIGHEST RETURN", value: "+18.4%", icon: MdTrendingUp },
];

const DisciplineMeter = ({ value }: { value: number }) => (
  <div className="flex items-center gap-2">
    <div className="h-1.5 w-16 bg-muted overflow-hidden">
      <motion.div
        initial={{ width: 0 }}
        whileInView={{ width: `${value}%` }}
        viewport={{ once: true }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="h-full bg-primary"
      />
    </div>
    <span className="font-mono text-xs text-foreground tabular-nums">{value}</span>
  </div>
);

const Leaderboard = () => {
  const [activeFilter, setActiveFilter] = useState(0);

  return (
    <div className="bg-background min-h-screen">
      <Navbar />
      <TickerBar />
      <PageHero
        headline="The Only Leaderboard That Can't Be Faked."
        subline="Season 01 — 847 verified traders competing in real time."
        breadcrumb="Home > Leaderboard"
        backgroundImage={leaderboardHero}
        compact
      />

      {/* Champion Podium */}
      <section className="relative py-16 md:py-20 overflow-hidden">
        <div className="absolute inset-0 grid-bg opacity-60" />
        <div
          className="absolute left-1/2 top-1/4 h-72 w-72 -translate-x-1/2 rounded-full blur-[120px]"
          style={{ background: "hsl(42 88% 55% / 0.12)" }}
        />
        <div className="container relative z-10">
          <motion.div {...fadeUp} className="text-center mb-14">
            <p className="font-mono text-[10px] tracking-[0.3em] text-primary mb-3">SEASON 01 · TOP PERFORMERS</p>
            <h2 className="font-display text-3xl md:text-5xl text-foreground">THE PODIUM</h2>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-5 gap-5 max-w-5xl mx-auto">
            {/* Champion spotlight */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="lg:col-span-3 relative bg-card gold-glow overflow-hidden"
              style={{ border: "1px solid hsl(42 88% 55% / 0.6)" }}
            >
              {/* corner brackets */}
              <div className="absolute top-0 left-0 w-5 h-5 border-t-2 border-l-2 border-primary z-20" />
              <div className="absolute bottom-0 right-0 w-5 h-5 border-b-2 border-r-2 border-primary z-20" />
              {/* radial sheen */}
              <div
                className="absolute -right-16 -top-16 h-56 w-56 rounded-full blur-[90px]"
                style={{ background: "hsl(42 88% 55% / 0.22)" }}
              />
              {/* faint rank ghost numeral */}
              <span className="pointer-events-none absolute -right-2 bottom-[-2.5rem] font-display text-[12rem] leading-none text-primary/[0.06] select-none">
                1
              </span>

              <div className="relative z-10 p-7 md:p-9">
                <div className="flex items-center gap-2 mb-6">
                  <span className="text-primary" style={{ filter: "drop-shadow(0 0 8px hsl(42 88% 55% / 0.5))" }}>
                    <MdWorkspacePremium size={22} />
                  </span>
                  <span className="font-mono text-[10px] tracking-[0.3em] text-primary">SEASON 01 CHAMPION</span>
                </div>

                <div className="flex items-center gap-5">
                  <div
                    className="flex h-20 w-20 md:h-24 md:w-24 shrink-0 items-center justify-center rounded-full font-display text-4xl md:text-5xl"
                    style={{ background: "hsl(42 88% 55% / 0.12)", color: champion.accent, border: "1px solid hsl(42 88% 55% / 0.5)" }}
                  >
                    {champion.trader.charAt(0)}
                  </div>
                  <div className="min-w-0">
                    <p className="font-display text-3xl md:text-4xl text-foreground leading-none truncate">{champion.trader}</p>
                    <p className="mt-2 font-mono text-xs tracking-widest text-muted-foreground flex items-center gap-2">
                      <span className="text-lg">{champion.country}</span> RANK 01
                    </p>
                  </div>
                </div>

                {/* stat row */}
                <div className="mt-7 grid grid-cols-2 sm:grid-cols-4 gap-px bg-primary/10 border border-primary/10">
                  {[
                    ["NET P&L", champion.net, true],
                    ["SETUPS", String(champion.setups), false],
                    ["MAX DD", champion.dd, false],
                    ["DISCIPLINE", String(champion.disc), false],
                  ].map(([label, value, gain]) => (
                    <div key={label as string} className="bg-card px-3 py-4 text-center">
                      <p className={`font-mono text-xl md:text-2xl ${gain ? "text-gain" : "text-foreground"}`}>{value}</p>
                      <p className="mt-1 font-mono text-[9px] tracking-widest text-muted-foreground">{label}</p>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Runners-up stack */}
            <div className="lg:col-span-2 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-5">
              {runnersUp.map((p, i) => (
                <motion.div
                  key={p.rank}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.12 + i * 0.1, duration: 0.5 }}
                  className="relative bg-card p-5 flex items-center gap-4 overflow-hidden group"
                  style={{ border: `1px solid ${p.accent}55` }}
                >
                  <span className="absolute left-0 top-0 h-full w-1" style={{ background: p.accent }} />
                  <span
                    className="pointer-events-none absolute -right-1 bottom-[-1.5rem] font-display text-7xl leading-none select-none"
                    style={{ color: `${p.accent}1f` }}
                  >
                    {p.rank}
                  </span>
                  <div
                    className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full font-display text-2xl"
                    style={{ background: `${p.accent}1a`, color: p.accent, border: `1px solid ${p.accent}66` }}
                  >
                    {p.trader.charAt(0)}
                  </div>
                  <div className="relative z-10 min-w-0 flex-1">
                    <p className="font-mono text-[9px] tracking-[0.25em]" style={{ color: p.accent }}>{p.tier}</p>
                    <p className="font-display text-lg text-foreground leading-tight truncate">{p.trader}</p>
                    <div className="mt-1 flex items-center gap-2 font-mono text-[11px] text-muted-foreground">
                      <span className="text-sm">{p.country}</span>
                      <span className={p.net.startsWith("+") ? "text-gain" : "text-foreground"}>{p.net}</span>
                      <span className="text-primary/20">·</span>
                      <span>{p.disc} disc</span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Access Gate */}
      <section className="py-4">
        <div className="container">
          <motion.div
            {...fadeUp}
            className="relative gold-border bg-primary/5 p-5 flex flex-col md:flex-row items-center justify-between gap-4 overflow-hidden"
          >
            <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-primary" />
            <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-primary" />
            <div className="flex items-center gap-3">
              <span className="flex h-9 w-9 shrink-0 items-center justify-center bg-primary/10 text-primary">
                <MdLock size={18} />
              </span>
              <p className="font-body text-sm text-foreground">
                You're viewing a <span className="text-primary">preview</span>. Complete KYC to unlock full standings,
                setup history, and trade analytics.
              </p>
            </div>
            <Link
              to="/waitlist"
              className="btn-shimmer font-mono text-[10px] tracking-widest text-primary-foreground px-5 py-2.5 whitespace-nowrap"
            >
              VERIFY NOW →
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Stats Strip */}
      <section className="py-8">
        <div className="container">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {stats.map(({ label, value, icon: Icon }, i) => (
              <motion.div
                key={label}
                {...fadeUp}
                transition={{ delay: i * 0.08 }}
                className="group relative gold-border bg-card p-5 overflow-hidden"
              >
                <div className="absolute -right-4 -top-4 text-primary/5 transition-colors group-hover:text-primary/10">
                  <Icon size={72} />
                </div>
                <p className="relative font-mono text-[10px] text-muted-foreground tracking-widest">{label}</p>
                <p className="relative font-mono text-2xl text-foreground mt-2">{value}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Filter + Search Bar */}
      <section className="py-4">
        <div className="container flex flex-wrap gap-3 items-center">
          <div className="relative inline-flex gold-border p-1 bg-card">
            {filters.map((f, i) => (
              <button
                key={f}
                onClick={() => setActiveFilter(i)}
                className="relative font-mono text-[10px] tracking-widest px-4 py-2 transition-colors"
              >
                {activeFilter === i && (
                  <motion.span
                    layoutId="filterPill"
                    className="absolute inset-0 bg-primary"
                    transition={{ type: "spring", stiffness: 400, damping: 32 }}
                  />
                )}
                <span className={`relative z-10 ${activeFilter === i ? "text-primary-foreground" : "text-muted-foreground hover:text-foreground"}`}>
                  {f}
                </span>
              </button>
            ))}
          </div>
          <div className="ml-auto flex items-center gap-2 gold-border px-3 py-2.5 opacity-50 cursor-not-allowed">
            <MdSearch size={14} className="text-muted-foreground" />
            <span className="font-mono text-[10px] text-muted-foreground">Search traders</span>
            <MdLock size={12} className="text-muted-foreground" />
          </div>
        </div>
      </section>

      {/* Full Standings */}
      <section className="pb-8">
        <div className="container">
          <motion.div {...fadeUp} className="flex items-center justify-between mb-5">
            <h3 className="font-display text-2xl text-foreground">FULL STANDINGS</h3>
            <span className="flex items-center gap-1.5 font-mono text-[10px] tracking-widest text-gain">
              <span className="h-1.5 w-1.5 rounded-full bg-gain animate-pulse-dot" /> LIVE
            </span>
          </motion.div>

          <div className="relative gold-border bg-card overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full min-w-[760px]">
                <thead>
                  <tr className="border-b border-primary/20 bg-primary/[0.03]">
                    {["Rank", "Trader", "Setups", "Net P&L", "Max DD", "Discipline", "Status"].map((h) => (
                      <th
                        key={h}
                        className="font-mono text-[10px] tracking-widest text-muted-foreground text-left px-4 py-4 first:pl-6"
                      >
                        {h}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {rows.map((row, i) => {
                    const locked = i >= 5;
                    const medal = i === 0 ? "hsl(42 88% 55%)" : i === 1 ? "hsl(215 19% 62%)" : i === 2 ? "hsl(25 60% 50%)" : null;
                    return (
                      <motion.tr
                        key={i}
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.04 }}
                        className={`group border-b border-primary/5 transition-colors last:border-b-0 ${
                          locked ? "select-none" : "hover:bg-primary/[0.04]"
                        }`}
                      >
                        <td className="px-4 py-4 first:pl-6">
                          <div className="flex items-center gap-2">
                            {medal ? (
                              <span
                                className="flex h-7 w-7 items-center justify-center rounded-full font-mono text-xs font-medium"
                                style={{ background: `${medal}1f`, color: medal, border: `1px solid ${medal}66` }}
                              >
                                {row.rank}
                              </span>
                            ) : (
                              <span className={`font-mono text-sm pl-2 ${locked ? "text-muted-foreground/40" : "text-muted-foreground"}`}>
                                {locked ? "—" : row.rank}
                              </span>
                            )}
                          </div>
                        </td>
                        <td className="px-4 py-4">
                          {locked ? (
                            <span className="inline-flex items-center gap-2 font-mono text-sm text-muted-foreground/40">
                              <MdLock size={13} /> Locked Trader
                            </span>
                          ) : (
                            <span className="flex items-center gap-2.5">
                              <span className="text-base">{row.country}</span>
                              <span className="font-mono text-sm text-foreground group-hover:text-primary transition-colors">
                                {row.trader}
                              </span>
                            </span>
                          )}
                        </td>
                        <td className={`font-mono text-sm px-4 py-4 ${locked ? "text-muted-foreground/40" : "text-foreground"}`}>
                          {locked ? "—" : row.setups}
                        </td>
                        <td className={`font-mono text-sm px-4 py-4 ${locked ? "text-muted-foreground/40" : row.net.startsWith("+") ? "text-gain" : "text-muted-foreground"}`}>
                          {locked ? "—" : row.net}
                        </td>
                        <td className={`font-mono text-sm px-4 py-4 ${locked ? "text-muted-foreground/40" : "text-foreground"}`}>
                          {locked ? "—" : row.dd}
                        </td>
                        <td className="px-4 py-4">
                          {locked ? <span className="font-mono text-sm text-muted-foreground/40">—</span> : <DisciplineMeter value={row.disc} />}
                        </td>
                        <td className="px-4 py-4">
                          {locked ? (
                            <span className="font-mono text-[10px] tracking-widest text-muted-foreground/40">—</span>
                          ) : (
                            <span className="inline-flex items-center gap-1.5 font-mono text-[10px] tracking-widest text-gain">
                              <span className="h-1.5 w-1.5 rounded-full bg-gain" /> {row.status.toUpperCase()}
                            </span>
                          )}
                        </td>
                      </motion.tr>
                    );
                  })}
                </tbody>
              </table>
            </div>

            {/* Locked overlay seal */}
            <div className="relative">
              <div className="pointer-events-none absolute inset-x-0 -top-28 h-28 bg-gradient-to-t from-card to-transparent" />
              <div className="frosted-glass border-t border-primary/20 p-8 text-center">
                <span className="mx-auto mb-3 flex h-11 w-11 items-center justify-center bg-primary/10 text-primary">
                  <MdLock size={20} />
                </span>
                <p className="font-body text-sm text-foreground mb-1">842 more traders ranked below</p>
                <p className="font-mono text-[10px] tracking-widest text-muted-foreground mb-4">
                  COMPLETE KYC TO UNLOCK FULL STANDINGS
                </p>
                <Link
                  to="/waitlist"
                  className="btn-shimmer inline-block font-mono text-xs tracking-widest text-primary-foreground px-6 py-3"
                >
                  VERIFY NOW →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CTABanner headline="Your rank is waiting." buttonText="Complete KYC Verification →" />
      <Footer />
    </div>
  );
};

export default Leaderboard;
