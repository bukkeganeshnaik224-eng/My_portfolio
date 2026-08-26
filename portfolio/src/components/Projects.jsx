import { useRef } from 'react'
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion'
import Reveal from './Reveal.jsx'
import Eyebrow from './Eyebrow.jsx'

const FEATURES = [
  'Analyzes user profiles / resumes',
  'Matches skills against target job requirements',
  'Provides personalized learning guidance',
  'Practical, data-driven skill development',
]

export default function Projects() {
  const ref = useRef(null)
  const x = useMotionValue(0.5)
  const y = useMotionValue(0.5)
  const rotateX = useSpring(useTransform(y, [0, 1], [6, -6]), { stiffness: 150, damping: 20 })
  const rotateY = useSpring(useTransform(x, [0, 1], [-6, 6]), { stiffness: 150, damping: 20 })

  function handleMouseMove(e) {
    const rect = ref.current.getBoundingClientRect()
    x.set((e.clientX - rect.left) / rect.width)
    y.set((e.clientY - rect.top) / rect.height)
  }
  function handleMouseLeave() {
    x.set(0.5)
    y.set(0.5)
  }

  return (
    <section id="projects" className="py-28 md:py-32">
      <div className="max-w-[1180px] mx-auto px-6">
        <Reveal><Eyebrow>Featured Build</Eyebrow></Reveal>
        <Reveal delay={0.08}>
          <h2 className="font-display font-bold text-[clamp(28px,4vw,44px)] tracking-tight mb-3.5">Projects</h2>
        </Reveal>
        <Reveal delay={0.16}>
          <p className="text-muted max-w-[560px] text-[15px] leading-[1.7] mb-12">
            The main project I've been building.
          </p>
        </Reveal>

        <Reveal>
          <motion.div
            ref={ref}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={{ rotateX, rotateY, transformPerspective: 1000 }}
            className="glass overflow-hidden hover:shadow-[0_40px_80px_-30px_rgba(76,201,240,0.28)] transition-shadow duration-500"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-9 items-center p-8 md:p-11 pb-0">
              <div className="aspect-[16/11] rounded-2xl relative overflow-hidden border border-border-2" style={{ background: 'linear-gradient(155deg,#0d1420,#141c2c)' }}>
                <div
                  className="absolute inset-0"
                  style={{
                    backgroundImage:
                      'linear-gradient(rgba(76,201,240,.08) 1px,transparent 1px),linear-gradient(90deg,rgba(76,201,240,.08) 1px,transparent 1px)',
                    backgroundSize: '26px 26px',
                  }}
                />
                <div className="absolute top-4 left-4 font-mono text-[10.5px] text-green flex items-center gap-1.5 bg-[rgba(10,14,20,0.7)] px-2.5 py-1.5 rounded-full border border-border-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-green" />
                  LIVE ANALYSIS
                </div>
                <div
                  className="absolute border border-dashed border-cyan/35 rounded-full spin-slow"
                  style={{ width: 170, height: 170, top: '50%', left: '50%', transform: 'translate(-50%,-50%)' }}
                />
                <div
                  className="absolute border border-dashed border-cyan/35 rounded-full spin-slow"
                  style={{ width: 230, height: 230, top: '50%', left: '50%', transform: 'translate(-50%,-50%)', animationDuration: '26s', animationDirection: 'reverse' }}
                />
                <div className="absolute rounded-[10px] bg-white/[0.04] border border-border-2 backdrop-blur" style={{ width: 34, height: 34, top: '20%', left: '18%' }} />
                <div className="absolute rounded-[10px] bg-white/[0.04] border border-border-2 backdrop-blur" style={{ width: 26, height: 26, bottom: '16%', right: '16%' }} />
                <div className="absolute rounded-[10px] bg-white/[0.04] border border-border-2 backdrop-blur" style={{ width: 20, height: 20, top: '22%', right: '22%' }} />
                <div
                  className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full flex items-center justify-center font-mono text-[10px] text-cyan"
                  style={{
                    width: 64,
                    height: 64,
                    background: 'radial-gradient(circle, rgba(76,201,240,.35), rgba(139,107,255,.15) 60%, transparent 75%)',
                    boxShadow: '0 0 40px rgba(76,201,240,.35)',
                  }}
                >
                  SKILLGAP
                </div>
              </div>

              <div>
                <h3 className="font-display font-bold text-[28px] mb-3.5">SkillGap AI</h3>
                <p className="text-muted text-[15px] leading-[1.75] mb-5">
                  AI-powered platform that identifies skill gaps and recommends personalized learning paths.
                </p>
                <ul className="flex flex-col gap-2.5 mb-6 list-none">
                  {FEATURES.map((f) => (
                    <li key={f} className="flex gap-2.5 text-sm text-white items-start">
                      <span className="text-cyan shrink-0">▸</span>
                      {f}
                    </li>
                  ))}
                </ul>
                <div className="flex gap-3.5 flex-wrap">
                  <a
                    href="#contact"
                    className="inline-flex items-center gap-2 font-semibold text-[13px] px-4 py-2.5 rounded-[9px] bg-gradient-to-br from-cyan to-violet text-[#04070c] hover:-translate-y-0.5 transition-all"
                  >
                    View Project
                  </a>
                  <a
                    href="https://github.com/bukkeganeshnaik224-eng"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 font-semibold text-[13px] px-4 py-2.5 rounded-[9px] border border-border-2 bg-white/[0.03] hover:bg-white/[0.07] hover:border-cyan hover:-translate-y-0.5 transition-all"
                  >
                    GitHub ↗
                  </a>
                </div>
              </div>
            </div>

            <div className="border-t border-border mt-9 px-8 md:px-11 py-4 flex flex-col md:flex-row justify-between gap-1.5 font-mono text-[11.5px] text-muted-2">
              <span>TYPE: AI / EDTECH</span>
              <span>STATUS: IN DEVELOPMENT</span>
            </div>
          </motion.div>
        </Reveal>
      </div>
    </section>
  )
}
