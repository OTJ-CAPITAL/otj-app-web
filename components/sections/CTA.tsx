export default function CTA() {
  return (
    <section className="py-32 px-6">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-[clamp(2.5rem,7vw,7rem)] font-black text-white leading-none tracking-tighter">
          Ready to invest?
        </h2>
        <p className="text-[#666] mt-6 text-lg max-w-lg mx-auto">
          Join OTJ Capital and get full real-time visibility into Africa's first AI-native hedge fund — trading crypto, forex, metals, and equities around the clock.
        </p>
        <a
          href="mailto:invest@otjcapital.com"
          className="inline-block mt-10 bg-white text-black font-semibold px-10 py-5 text-sm tracking-wide hover:bg-[#e0e0e0] transition-colors"
        >
          Request Investor Access
        </a>
      </div>
    </section>
  )
}
