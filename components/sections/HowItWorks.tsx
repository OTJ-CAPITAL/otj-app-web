const steps = [
  {
    n: '01',
    title: 'Request access',
    desc: 'Email us at invest@otjcapital.com. We review your investor profile and send a personal invite.',
  },
  {
    n: '02',
    title: 'Magic link login',
    desc: 'No passwords. Enter your email, tap the link we send, and you\'re in. Works on desktop and mobile.',
  },
  {
    n: '03',
    title: 'See your fund live',
    desc: 'Your dashboard loads in real time. Portfolio, positions across all 4 asset classes, AI signals, strategy registry, market prices — all live.',
  },
]

export default function HowItWorks() {
  return (
    <section id="how" className="py-32 px-6 border-b border-[#1a1a1a] bg-white text-black">
      <div className="max-w-6xl mx-auto">
        <p className="text-[#999] text-xs tracking-[0.3em] uppercase mb-6">How it works</p>
        <h2 className="text-5xl font-black mb-16">Three steps.</h2>
        <div className="grid md:grid-cols-3 gap-px bg-[#ddd]">
          {steps.map((s) => (
            <div key={s.n} className="bg-white p-10">
              <p className="text-[#ccc] text-5xl font-black">{s.n}</p>
              <h3 className="text-black font-bold text-xl mt-4 mb-3">{s.title}</h3>
              <p className="text-[#666] text-sm leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
