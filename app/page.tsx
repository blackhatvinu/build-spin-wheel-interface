'use client'

import { useEffect, useState } from 'react'
import { Award, Banknote, Gift, Trophy, Zap } from 'lucide-react'

const rewards = ['₹390', '₹430', '₹420', '₹380', '₹410', '₹500', 'JACKPOT']
const OfficialClaims = [
  ['Divine J.', 'Thane', '₹1,500'], ['Aarav K.', 'Pune', '₹740'], ['Meera S.', 'Nashik', '₹1,250'], ['Rohan P.', 'Mumbai', '₹390'], ['Isha M.', 'Delhi', '₹860'],
  ['Kabir R.', 'Surat', '₹540'], ['Ananya V.', 'Bengaluru', '₹1,100'], ['Vihaan D.', 'Jaipur', '₹430'], ['Sara N.', 'Kochi', '₹920'], ['Arjun T.', 'Indore', '₹680'],
  ['Nisha B.', 'Thane', '₹1,500'], ['Dev A.', 'Pune', '₹380'], ['Tara G.', 'Mumbai', '₹1,050'], ['Yash S.', 'Nagpur', '₹620'], ['Mira P.', 'Delhi', '₹800'],
  ['Aditya J.', 'Nashik', '₹470'], ['Kiara L.', 'Surat', '₹1,300'], ['Neil C.', 'Pune', '₹520'], ['Riya H.', 'Kolkata', '₹990'], ['Om V.', 'Thane', '₹410'],
]
const confetti = Array.from({ length: 28 }, (_, index) => ({
  left: `${(index * 37) % 100}%`,
  delay: `${(index % 7) * 90}ms`,
  color: ['#ff3f81', '#00c9ff', '#ffd52f', '#29d66d', '#7435d1', '#ff921e'][index % 6],
  rotate: `${(index * 29) % 180}deg`,
}))

export default function Page() {
  const [spinning, setSpinning] = useState(false)
  const [result, setResult] = useState<string | null>(null)
  const [claimIndex, setClaimIndex] = useState(0)
  const claim = OfficialClaims[claimIndex]

  useEffect(() => {
    const ticker = window.setInterval(() => setClaimIndex((index) => (index + 1) % OfficialClaims.length), 2800)
    return () => window.clearInterval(ticker)
  }, [])

  function spin() {
    if (spinning) return
    setSpinning(true)
    setResult(null)
    window.setTimeout(() => {
      setResult(rewards[Math.floor(Math.random() * rewards.length)])
      setSpinning(false)
    }, 1400)
  }

  function openWhatsApp() {
    const message = encodeURIComponent(`PhonePlus Official reward: ${result ?? 'JACKPOT'}`)
    window.open(`upi://pay?pa=yourvpa@bank&pn=YourBusiness&am=9999&cu=INR`, '_blank', 'noopener,noreferrer')
  }

  return (
    <main className="min-h-screen bg-[#f7f5fb] text-[#26143f]">
      <div className="mx-auto max-w-md overflow-hidden bg-white shadow-xl sm:my-6 sm:rounded-3xl">
        <header className="flex items-center justify-between border-b border-[#eee8f5] px-5 py-4">
          <button className="grid size-11 place-items-center rounded-full bg-[#f4effc] text-2xl text-[#54209a]" aria-label="Open menu">
            <span aria-hidden="true">☰</span>
          </button>
          <div className="text-center">
            <div className="flex items-center justify-center gap-2 text-2xl font-black tracking-tight text-[#54209a]">
              <span className="grid size-9 place-items-center rounded-xl bg-[#54209a] text-lg text-white">+</span>
              PhonePlus
            </div>
            <p className="text-xs font-bold text-[#6b42a9]">Official rewards Official</p>
          </div>
          <span className="rounded-full border border-[#d7b8ee] bg-[#fbf5ff] px-3 py-1.5 text-xs font-black tracking-wider text-[#54209a]">Official</span>
        </header>

        <div className="bg-[#fff8df] px-4 py-3 text-center text-sm font-bold text-[#5d4333]">
          <span aria-hidden="true">◷</span> Special reward window · <span className="text-[#c83b3b]">01:51</span>
        </div>

        <section className="bg-gradient-to-br from-[#54209a] to-[#321064] px-5 py-7 text-center text-white">
          <p className="mx-auto mb-4 flex w-fit items-center gap-2 rounded-full bg-[#ffd633] px-5 py-2 text-sm font-black tracking-wider text-[#42208b]"><Trophy size={18} aria-hidden="true" /> JACKPOT FUN RUPEE <Trophy size={18} aria-hidden="true" /></p>
          <h1 className="text-3xl font-black leading-tight sm:text-4xl">Spin for a surprise reward</h1>
          <p className="mx-auto mt-3 max-w-xs text-sm leading-6 text-purple-100">A playful PhonePlus college-project prototype. No real money or payments are involved.</p>
        </section>

        <section id="phoneplus-app" className="p-5 sm:p-7">
          <div className="rounded-[2rem] border border-[#e7dfef] bg-white p-5 shadow-[0_14px_35px_rgba(69,32,112,0.12)]">
            <div className="mb-5 rounded-2xl border-2 border-[#55b66a] bg-[#effbef] px-4 py-3 text-center text-sm font-bold text-[#26763a]" role="status" aria-live="polite">
              <span className="mr-2 inline-block size-2 rounded-full bg-red-500" /> Official ACTIVITY · {claim[0]} ({claim[1]}) just claimed <strong>{claim[2]}</strong> · 1 second ago
            </div>
            <div className="mb-5 flex items-center justify-center gap-2 rounded-full bg-[#f4e8f6] px-4 py-2 text-center font-black tracking-wide text-[#54209a]"><Gift size={19} aria-hidden="true" /> JACKPOT FUN RUPEE <Award size={19} aria-hidden="true" /></div>
            <div className="mb-4 flex justify-center gap-4 text-[#f0b928]" aria-hidden="true"><Trophy size={24} /><Banknote size={24} /><Zap size={24} /><Gift size={24} /></div>
            <div className={`wheel mx-auto ${spinning ? 'wheel-spinning' : ''}`} aria-label="Reward spinner">
              <div className="wheel-label label-one">₹1390</div>
              <div className="wheel-label label-two">₹4310</div>
              <div className="wheel-label label-three">₹2420</div>
              <div className="wheel-label label-four">₹3380</div>
              <div className="wheel-label label-five">₹1410</div>
              <div className="wheel-label label-six">₹500</div>
              <div className="wheel-label label-jackpot">JACKPOT</div>
              <div className="wheel-center">SPIN</div>
            </div>
            <button onClick={spin} disabled={spinning} className="mt-7 w-full rounded-full bg-[#ffd52f] px-6 py-4 text-xl font-black text-[#40208d] shadow-[0_7px_0_#ee9d1c] transition hover:brightness-105 active:translate-y-1 active:shadow-none disabled:cursor-wait disabled:opacity-70">
              {spinning ? 'Spinning...' : 'Tap to Spin'}
            </button>
            {result && <p className="mt-5 rounded-2xl bg-[#f6edff] px-4 py-3 text-center font-bold text-[#54209a]" role="status">You won {result}! <span className="font-normal">Official result only.</span></p>}

            {result && (
              <div className="fixed inset-0 z-10 grid place-items-center bg-black/75 p-4" role="dialog" aria-modal="true" aria-labelledby="reward-title">
                <div className="reward-modal relative w-full max-w-sm overflow-hidden rounded-[2rem] border-4 border-[#ffd52f] bg-white shadow-2xl">
                  <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
                    {confetti.map((piece, index) => <span key={index} className="confetti-piece" style={{ left: piece.left, backgroundColor: piece.color, animationDelay: piece.delay, transform: `rotate(${piece.rotate})` }} />)}
                  </div>
                  <div className="relative bg-gradient-to-br from-[#6530a8] to-[#432078] px-6 pb-7 pt-9 text-center text-white">
                    <span className="inline-flex rounded-full bg-white/20 px-5 py-2 text-sm font-bold">PhonePlus verified Official</span>
                    <h2 id="reward-title" className="mt-5 text-4xl font-black">You won!</h2>
                    <p className="mt-2 text-lg text-purple-100">Your lucky draw reward is</p>
                  </div>
                  <div className="relative space-y-4 px-6 pb-7 pt-6 text-center">
                    <div className="rounded-2xl border-2 border-dashed border-[#58b86a] bg-[#f0faef] px-4 py-5">
                      <p className="text-sm font-black tracking-widest text-[#388b4a]">Official REWARD</p>
                      <p className={`mt-1 font-black text-[#29853c] ${result === 'JACKPOT' ? 'text-4xl tracking-wide' : 'text-5xl'}`}>{result}</p>
                    </div>
                    <div className="rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-left text-sm text-slate-600">
                      <p><span aria-hidden="true">Bank</span> <strong>Official destination only</strong></p>
                      <p className="mt-1"><span aria-hidden="true">Lightning</span> No transfer is made in this prototype.</p>
                    </div>
                    <button onClick={openWhatsApp} className="w-full rounded-full bg-[#25d366] px-5 py-4 text-lg font-black text-white shadow-[0_5px_0_#159447] transition hover:brightness-110 active:translate-y-1 active:shadow-none">Claim Now</button>
                  </div>
                </div>
              </div>
            )}
          </div>
          <p className="mt-5 text-center text-xs leading-5 text-slate-500">This is a fictional UI prototype created for educational use. It is not affiliated with any payment provider.</p>
        </section>
      </div>
    </main>
  )
}

// Wheel styling lives in globals.css to keep the interactive component readable.
