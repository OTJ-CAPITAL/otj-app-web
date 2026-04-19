const features = [
  { title: 'Live Portfolio Value', desc: 'Your total portfolio value, updated every hour when the AI engine runs. PnL in dollars and percent.' },
  { title: 'Open Positions', desc: 'Every open trade with entry price, current price, unrealized PnL, stop loss, and take profit.' },
  { title: 'AI Signal Feed', desc: 'Every signal the engine generated — whether it acted or not. Full indicator values logged.' },
  { title: 'Trade History', desc: 'Complete closed trade log with realized PnL, exit reason, duration, and fees.' },
  { title: 'Market Intelligence', desc: 'Live crypto, forex, and precious metals prices. African currency pairs included.' },
  { title: 'Performance Chart', desc: '30-day portfolio value chart with daily snapshots, drawdown, and Sharpe ratio.' },
]

export default function Features() {
  return (
    <section id="features" className="py-32 px-6 border-b border-[#1a1a1a]">
      <div className="max-w-6xl mx-auto">
        <p className="text-[#444] text-xs tracking-[0.3em] uppercase mb-6">Features</p>
        <h2 className="text-5xl font-black text-white mb-16">Everything you need. Nothing you don't.</h2>
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
