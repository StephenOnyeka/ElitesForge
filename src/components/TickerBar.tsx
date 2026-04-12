const tickerData = [
  { symbol: "EUR/USD", change: +0.42 },
  { symbol: "GBP/USD", change: -0.18 },
  { symbol: "XAU/USD", change: +1.87 },
  { symbol: "USD/JPY", change: -0.56 },
  { symbol: "AUD/USD", change: +0.23 },
  { symbol: "NZD/USD", change: -0.09 },
  { symbol: "USD/CHF", change: +0.31 },
  { symbol: "EUR/GBP", change: -0.44 },
  { symbol: "US30", change: +0.72 },
  { symbol: "NAS100", change: +1.14 },
  { symbol: "BTC/USD", change: +2.34 },
  { symbol: "ETH/USD", change: -1.12 },
];

const TickerItem = ({ symbol, change }: { symbol: string; change: number }) => (
  <span className="inline-flex items-center gap-2 mx-6 whitespace-nowrap">
    <span className="font-mono text-[10px] text-muted-foreground">{symbol}</span>
    <span
      className={`font-mono text-[10px] ${
        change >= 0 ? "text-gain" : "text-destructive"
      }`}
    >
      {change >= 0 ? "+" : ""}
      {change.toFixed(2)}%
    </span>
    <span className="text-primary/20">|</span>
  </span>
);

const TickerBar = () => (
  <div className="fixed top-16 left-0 right-0 z-40 bg-background border-y border-primary/10 overflow-hidden">
    <div className="animate-ticker flex">
      {[...tickerData, ...tickerData].map((item, i) => (
        <TickerItem key={i} symbol={item.symbol} change={item.change} />
      ))}
    </div>
  </div>
);

export default TickerBar;
