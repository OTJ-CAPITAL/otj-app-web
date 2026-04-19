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
            Every position, every trade, every AI signal — in real time. No monthly PDFs. No delayed reporting. Just full transparency into your investment.
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
      </div>
    </section>
  )
}
