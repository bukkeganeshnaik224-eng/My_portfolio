import { motion } from 'framer-motion'
import Reveal from './Reveal.jsx'
import Eyebrow from './Eyebrow.jsx'

const CERTS = [
  { icon: '📄', name: 'MS Office Certification', tag: 'CERTIFICATE' },
  { icon: '🤖', name: 'AI Agents Course', tag: 'GOOGLE' },
  { icon: '🏆', name: 'TATA Crucible Campus Quiz 2025', tag: 'COMPETITION' },
  { icon: '📝', name: 'HP Online Assessment', tag: 'ASSESSMENT' },
  { icon: '🎯', name: 'Daily Quiz — October Series', tag: 'QUIZ SERIES' },
]

export default function Certifications() {
  return (
    <section id="certifications" className="py-28 md:py-32">
      <div className="max-w-[1180px] mx-auto px-6">
        <Reveal><Eyebrow>Verified</Eyebrow></Reveal>
        <Reveal delay={0.08}>
          <h2 className="font-display font-bold text-[clamp(28px,4vw,44px)] tracking-tight mb-3.5">Certifications</h2>
        </Reveal>
        <Reveal delay={0.16}>
          <p className="text-muted max-w-[560px] text-[15px] leading-[1.7] mb-12">
            Courses and assessments completed along the way.
          </p>
        </Reveal>

        <div className="grid gap-4.5" style={{ gap: 18, gridTemplateColumns: 'repeat(auto-fit, minmax(230px, 1fr))' }}>
          {CERTS.map((c, idx) => (
            <Reveal key={c.name} delay={idx * 0.06}>
              <motion.div
                whileHover={{ y: -5, scale: 1.01 }}
                className="glass p-5.5 flex flex-col gap-3.5 h-full"
                style={{ padding: 22 }}
              >
                <div className="w-10 h-10 rounded-[10px] flex items-center justify-center text-[17px] border border-border-2 bg-gradient-to-br from-green/15 to-cyan/15">
                  {c.icon}
                </div>
                <div className="text-[14.5px] font-semibold leading-snug">{c.name}</div>
                <div className="font-mono text-[10.5px] text-muted-2">{c.tag}</div>
              </motion.div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
