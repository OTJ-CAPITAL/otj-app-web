export default function Footer() {
  return (
    <footer className="border-t border-[#1a1a1a] py-12 px-6">
      <div className="max-w-6xl mx-auto flex justify-between items-start gap-8">
        <div>
          <p className="text-white font-bold text-lg tracking-widest">OTJ.APP</p>
          <p className="text-[#444] text-sm mt-1">Investor portal for OTJ Capital</p>
        </div>
        <a href="https://otjcapital.com" className="text-[#444] text-sm hover:text-white transition-colors">
          OTJ Capital →
        </a>
      </div>
      <div className="max-w-6xl mx-auto mt-10 pt-6 border-t border-[#111] text-[#333] text-xs">
        © {new Date().getFullYear()} OTJ Capital. All rights reserved.
      </div>
    </footer>
  )
}
