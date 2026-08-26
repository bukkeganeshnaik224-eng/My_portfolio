import { motion } from 'framer-motion'
import Reveal from './Reveal.jsx'
import Eyebrow from './Eyebrow.jsx'

const GROUPS = [
  { title: 'Programming', icon: '💻', items: ['Java', 'Python', 'SQL'] },
  { title: 'Web', icon: '🌐', items: ['HTML', 'CSS'] },
  { title: 'Tools', icon: '🛠️', items: ['MS Word', 'MS Excel', 'PowerPoint'] },
]

export default function Skills() {
  return (
    <section id="skills" className="py-28 md:py-32">
      <div className="max-w-[1180px] mx-auto px-6">
        <Reveal><Eyebrow>Toolkit</Eyebrow></Reveal>
        <Reveal delay={0.08}>
          <h2 className="font-display font-bold text-[clamp(28px,4vw,44px)] tracking-tight mb-3.5">Skills</h2>
        </Reveal>
        <Reveal delay={0.16}>
          <p className="text-muted max-w-[560px] text-[15px] leading-[1.7] mb-12">
            Languages and tools I build with.
          </p>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5.5" style={{ gap: 22 }}>
          {GROUPS.map((g, idx) => (
            <Reveal key={g.title} delay={idx * 0.08}>
              <motion.div
                whileHover={{ y: -6 }}
                className="glass p-7 h-full hover:shadow-[0_20px_40px_-20px_rgba(76,201,240,0.2)] transition-shadow"
              >
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-9.5 h-9.5 rounded-[10px] flex items-center justify-center text-[17px] border border-border-2 bg-gradient-to-br from-cyan/15 to-violet/15" style={{ width: 38, height: 38 }}>
                    {g.icon}
                  </div>
                  <div className="font-display font-bold text-base">{g.title}</div>
                </div>
                <ul className="flex flex-col gap-2.5 list-none">
                  {g.items.map((item) => (
                    <li
                      key={item}
                      className="flex items-center gap-2.5 text-sm text-muted font-mono px-3 py-2.5 rounded-[9px] border border-border hover:border-cyan hover:text-white hover:bg-cyan/[0.04] hover:translate-x-1 transition-all"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-cyan shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
