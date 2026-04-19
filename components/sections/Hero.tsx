export default function Hero() {
  return (
    <section className="min-h-screen flex flex-col justify-center px-6 pt-16 border-b border-[#1a1a1a]">
      <div className="max-w-6xl mx-auto w-full">
        <p className="text-[#444] text-sm tracking-[0.3em] uppercase mb-8">Investor Portal</p>
        <h1 className="text-[clamp(3rem,9vw,8rem)] font-black leading-none tracking-tighter text-white">
          Your fund.<br />Live. Always.
        </h1>
        <div className="mt-8 max-w-xl">
          <p className="text-[#888] text-xl leading-relaxed">
            Every position, every trade, every AI signal across crypto, forex, metals, and equities — in real time. No monthly PDFs. No delayed reporting. Just full transparency into your investment.
          </p>
        </div>
        <div className="mt-12 flex gap-4">
          <a href="https://app.otj.app" className="inline-block bg-white text-black font-semibold px-8 py-4 text-sm tracking-wide hover:bg-[#e0e0e0] transition-colors">
            Open Dashboard
          </a>
          <a href="#features" className="inline-block border border-[#333] text-white px-8 py-4 text-sm tracking-wide hover:border-white transition-colors">
            See Features
          </a>
        </div>
        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 border-t border-[#1a1a1a] pt-12">
          {[
            { label: 'Asset Classes',   value: '4' },
            { label: 'Instruments',     value: '34' },
            { label: 'Strategies Live', value: '42' },
            { label: 'Updates',         value: 'Hourly' },
          ].map((stat) => (
            <div key={stat.label}>
              <p className="text-3xl font-bold text-white">{stat.value}</p>
              <p className="text-[#444] text-sm mt-1">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
