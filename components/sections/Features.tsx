const features = [
  {
    title: 'Live Portfolio Value',
    desc: 'Total AUM, deployed capital, and available capital — updated every hour when the AI engine runs. P&L in dollars and percent, all-time.',
  },
  {
    title: 'Open Positions',
    desc: 'Every live trade across crypto, forex, metals, and equities. Entry price, current price, unrealized P&L, stop loss, take profit — all visible.',
  },
  {
    title: 'AI Signal Feed',
    desc: 'Every signal the engine generated across all 34 instruments — whether acted on or rejected. Full indicator values and rationale logged.',
  },
  {
    title: 'Trade History',
    desc: 'Complete closed trade log with realized P&L, exit reason (stop loss, take profit, timeout, kill switch), duration, and fees.',
  },
  {
    title: 'Live Markets',
    desc: 'Real-time prices across all 4 asset classes. Crypto via Binance. Forex and metals via OANDA. US equities via Alpaca. African EM pairs included.',
  },
  {
    title: 'Strategy Registry',
    desc: '42 strategies tracked live. Status (Active / Degrading / Suspended), win rates, Sharpe, and allocation weights — updated weekly by the AI reflection engine.',
  },
  {
    title: 'Market Regime',
    desc: 'The AI classifies current market conditions as Low Volatility, High Volatility, or Crisis. Regime determines allocation multiplier across the entire portfolio.',
  },
  {
    title: 'Performance Chart',
    desc: '90-day portfolio value chart with daily snapshots. Drawdown, Sharpe ratio, and sortino tracked over time.',
  },
  {
    title: 'Risk Events',
    desc: 'Kill switch activations, drawdown alerts, strategy suspensions — every risk event is logged with severity, context, and resolution status.',
  },
]

export default function Features() {
  return (
    <section id="features" className="py-32 px-6 border-b border-[#1a1a1a]">
      <div className="max-w-6xl mx-auto">
        <p className="text-[#444] text-xs tracking-[0.3em] uppercase mb-6">Features</p>
        <h2 className="text-5xl font-black text-white mb-4">Everything you need. Nothing you don't.</h2>
        <p className="text-[#666] mb-16 max-w-xl">
          Full real-time visibility into your investment. No monthly PDFs. No delayed reporting. The fund runs 24/7 and so does your dashboard.
        </p>
        <div className="grid md:grid-cols-3 gap-px bg-[#1a1a1a]">
          {features.map((f) => (
            <div key={f.title} className="bg-black p-8">
              <h3 className="text-white font-bold text-lg mb-3">{f.title}</h3>
              <p className="text-[#666] text-sm leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
