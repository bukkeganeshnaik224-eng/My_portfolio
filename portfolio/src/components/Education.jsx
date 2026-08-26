import Reveal from './Reveal.jsx'
import Eyebrow from './Eyebrow.jsx'

const ITEMS = [
  { year: '2029 · IN PROGRESS', degree: 'B.Tech, Computer Science', school: 'Mohan Babu University, Tirupati', active: true },
  { year: '2025', degree: 'Intermediate', school: 'Narayana Jr College, Kadapa' },
  { year: '2023', degree: 'SSC', school: 'APTWRS, Rayachoty' },
]

export default function Education() {
  return (
    <section id="education" className="py-28 md:py-32">
      <div className="max-w-[1180px] mx-auto px-6">
        <Reveal><Eyebrow>Academic Path</Eyebrow></Reveal>
        <Reveal delay={0.08}>
          <h2 className="font-display font-bold text-[clamp(28px,4vw,44px)] tracking-tight mb-3.5">Education</h2>
        </Reveal>
        <Reveal delay={0.16}>
          <p className="text-muted max-w-[560px] text-[15px] leading-[1.7] mb-14">
            A timeline of where the foundation was built.
          </p>
        </Reveal>

        <div className="relative pl-9">
          <div className="absolute left-1.5 top-1.5 bottom-1.5 w-[1.5px] bg-gradient-to-b from-cyan via-violet to-transparent" />
          {ITEMS.map((item, idx) => (
            <Reveal key={item.degree} delay={idx * 0.08} className="relative pb-11 last:pb-0">
              <div
                className={`absolute -left-9 top-0.5 w-3.5 h-3.5 rounded-full bg-bg border-2 border-cyan ${
                  item.active ? 'bg-cyan shadow-[0_0_16px_2px_rgba(76,201,240,0.7)]' : 'shadow-[0_0_0_4px_rgba(76,201,240,0.1)]'
                }`}
              />
              <div className="glass px-6 py-5.5" style={{ padding: '22px 26px' }}>
                <div className="font-mono text-cyan text-xs tracking-wide">{item.year}</div>
                <div className="font-display font-bold text-[19px] mt-1.5 mb-1">{item.degree}</div>
                <div className="text-muted text-sm">{item.school}</div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
