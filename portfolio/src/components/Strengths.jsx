import { motion } from 'framer-motion'
import Reveal from './Reveal.jsx'
import Eyebrow from './Eyebrow.jsx'

const STRENGTHS = [
  'Flexible to any situation',
  'Self-motivated learner',
  'Problem solving ability',
  'Time management',
]
const SOFT_SKILLS = ['Good communication', 'Team work', 'Quick learner']
const LANGUAGES = [
  { name: 'Telugu', level: 5 },
  { name: 'English', level: 4 },
  { name: 'Hindi', level: 3 },
]

export default function Strengths() {
  return (
    <section id="strengths" className="py-28 md:py-32">
      <div className="max-w-[1180px] mx-auto px-6">
        <Reveal><Eyebrow>Beyond the Code</Eyebrow></Reveal>
        <Reveal delay={0.08}>
          <h2 className="font-display font-bold text-[clamp(28px,4vw,44px)] tracking-tight mb-3.5">
            Strengths &amp; Soft Skills
          </h2>
        </Reveal>
        <Reveal delay={0.16}>
          <p className="text-muted max-w-[560px] text-[15px] leading-[1.7] mb-12">
            What I bring to a team, beyond the tech stack.
          </p>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-[1.3fr_1fr] gap-5">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {STRENGTHS.map((s, idx) => (
              <Reveal key={s} delay={idx * 0.06}>
                <motion.div whileHover={{ y: -4 }} className="glass p-5.5 hover:border-cyan transition-colors" style={{ padding: 22 }}>
                  <div className="font-mono text-[11px] text-muted-2 mb-2.5">{String(idx + 1).padStart(2, '0')}</div>
                  <div className="font-display font-semibold text-[15.5px]">{s}</div>
                </motion.div>
              </Reveal>
            ))}
          </div>

          <div className="flex flex-col gap-4.5" style={{ gap: 18 }}>
            <Reveal delay={0.08}>
              <div className="glass p-5.5" style={{ padding: 22 }}>
                <h4 className="font-mono text-[11px] text-muted-2 uppercase tracking-wide mb-3.5">Soft Skills</h4>
                <div className="flex flex-wrap gap-2.5">
                  {SOFT_SKILLS.map((s) => (
                    <span key={s} className="text-[13px] px-3.5 py-1.5 rounded-full border border-border-2 text-muted hover:text-white hover:border-cyan transition-colors">
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            </Reveal>
            <Reveal delay={0.16}>
              <div className="glass p-5.5" style={{ padding: 22 }}>
                <h4 className="font-mono text-[11px] text-muted-2 uppercase tracking-wide mb-3.5">Languages</h4>
                <div className="flex flex-col gap-3">
                  {LANGUAGES.map((l) => (
                    <div key={l.name} className="flex justify-between items-center text-sm">
                      <span>{l.name}</span>
                      <div className="flex gap-1.5">
                        {Array.from({ length: 5 }).map((_, i) => (
                          <span
                            key={i}
                            className={`w-1.5 h-1.5 rounded-full ${i < l.level ? 'bg-cyan' : 'bg-border-2'}`}
                          />
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  )
}
