import { motion } from "framer-motion";
import { MdLock, MdSearch } from "react-icons/md";
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

const rows = [
  { rank: 1, trader: "AlphaVortex", country: "🇬🇧", setups: 24, net: "+18.4%", dd: "3.2%", disc: 96, status: "Active" },
  { rank: 2, trader: "SilentPips", country: "🇳🇬", setups: 21, net: "+14.7%", dd: "4.1%", disc: 92, status: "Active" },
  { rank: 3, trader: "NightOwlFX", country: "🇺🇸", setups: 19, net: "+12.2%", dd: "2.8%", disc: 94, status: "Active" },
  { rank: 4, trader: "GoldHunterX", country: "🇦🇪", setups: 18, net: "+10.1%", dd: "5.2%", disc: 87, status: "Active" },
  { rank: 5, trader: "PipSurgeon", country: "🇩🇪", setups: 16, net: "+9.5%", dd: "3.9%", disc: 90, status: "Active" },
  { rank: 6, trader: "██████████", country: "—", setups: 0, net: "—", dd: "—", disc: 0, status: "—" },
  { rank: 7, trader: "██████████", country: "—", setups: 0, net: "—", dd: "—", disc: 0, status: "—" },
  { rank: 8, trader: "██████████", country: "—", setups: 0, net: "—", dd: "—", disc: 0, status: "—" },
];

const Leaderboard = () => (
  <div className="bg-background min-h-screen">
    <Navbar />
    <TickerBar />
    <PageHero
      headline="The Only Leaderboard That Can't Be Faked."
      subline="Season 01 — 847 active traders"
      breadcrumb="Home > Leaderboard"
      backgroundImage={leaderboardHero}
      compact
    />

    {/* Access Gate */}
    <section className="py-4">
      <div className="container">
        <motion.div {...fadeUp} className="gold-border bg-primary/5 p-4 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="font-body text-sm text-foreground">
            You are viewing a preview. Complete KYC to unlock full standings, setup history, and trade analytics.
          </p>
          <a href="/waitlist" className="btn-shimmer font-mono text-[10px] tracking-widest text-primary-foreground px-5 py-2 whitespace-nowrap">
            VERIFY NOW →
          </a>
        </motion.div>
      </div>
    </section>

    {/* Stats Strip */}
    <section className="py-8">
      <div className="container">
        <motion.div {...fadeUp} className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            ["TOTAL PARTICIPANTS", "847"],
            ["SETUPS THIS WEEK", "214"],
            ["MOST TRADED", "XAUUSD"],
            ["HIGHEST RETURN", "+18.4%"],
          ].map(([label, value]) => (
            <div key={label} className="gold-border p-4 bg-card text-center">
              <p className="font-mono text-[10px] text-muted-foreground tracking-widest">{label}</p>
              <p className="font-mono text-xl text-foreground mt-1">{value}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>

    {/* Filter Bar */}
    <section className="py-4">
      <div className="container flex flex-wrap gap-3 items-center">
        {["This Week", "This Month", "Full Season"].map((f, i) => (
          <button
            key={f}
            className={`font-mono text-[10px] tracking-widest px-4 py-2 ${
              i === 0 ? "bg-primary text-primary-foreground" : "gold-border text-muted-foreground hover:text-foreground"
            }`}
          >
            {f}
          </button>
        ))}
        <div className="ml-auto flex items-center gap-2 gold-border px-3 py-2 opacity-50 cursor-not-allowed">
          <MdSearch size={14} className="text-muted-foreground" />
          <span className="font-mono text-[10px] text-muted-foreground">Search (KYC only)</span>
          <MdLock size={12} className="text-muted-foreground" />
        </div>
      </div>
    </section>

    {/* Table */}
    <section className="py-8">
      <div className="container overflow-x-auto">
        <motion.table {...fadeUp} className="w-full min-w-[700px]">
          <thead>
            <tr className="border-b border-primary/20">
              {["#", "Trader", "🌍", "Setups", "Net P&L %", "Max DD", "Discipline", "Status"].map((h) => (
                <th key={h} className="font-mono text-[10px] tracking-widest text-muted-foreground text-left p-3">{h}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {rows.map((row, i) => (
              <tr
                key={i}
                className={`border-b border-primary/5 ${i >= 5 ? "blur-sm select-none" : ""} ${
                  i === 0 ? "border-l-2 border-l-primary" : i === 1 ? "border-l-2 border-l-secondary" : i === 2 ? "border-l-2 border-l-orange-700" : ""
                }`}
              >
                <td className="font-mono text-sm p-3 text-foreground">{row.rank}</td>
                <td className="font-mono text-sm p-3 text-foreground">{row.trader}</td>
                <td className="p-3">{row.country}</td>
                <td className="font-mono text-sm p-3 text-foreground">{row.setups}</td>
                <td className={`font-mono text-sm p-3 ${row.net.startsWith("+") ? "text-gain" : "text-muted-foreground"}`}>{row.net}</td>
                <td className="font-mono text-sm p-3 text-foreground">{row.dd}</td>
                <td className="font-mono text-sm p-3 text-foreground">{row.disc || "—"}</td>
                <td className="font-mono text-[10px] p-3 text-gain tracking-widest">{row.status}</td>
              </tr>
            ))}
          </tbody>
        </motion.table>
        <motion.div {...fadeUp} className="mt-4 frosted-glass gold-border p-6 text-center">
          <p className="font-body text-sm text-foreground mb-3">Complete KYC to unlock full standings</p>
          <a href="/waitlist" className="btn-shimmer inline-block font-mono text-xs tracking-widest text-primary-foreground px-6 py-3">
            VERIFY NOW →
          </a>
        </motion.div>
      </div>
    </section>

    <CTABanner headline="Your rank is waiting." buttonText="Complete KYC Verification →" />
    <Footer />
  </div>
);

export default Leaderboard;
