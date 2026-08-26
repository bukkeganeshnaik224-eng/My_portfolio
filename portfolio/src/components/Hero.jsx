import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import profile from '../assets/profile.jpg'

const SUBTITLE = 'B.Tech CSE Student • Developer • AI & Cybersecurity Enthusiast'
const TAGS = ['JAVA', 'PYTHON', 'SQL', 'HTML', 'CSS', 'AI', 'CYBER SECURITY']

export default function Hero() {
  const [typed, setTyped] = useState('')

  useEffect(() => {
    let i = 0
    const start = setTimeout(function tick() {
      const id = setInterval(() => {
        i++
        setTyped(SUBTITLE.slice(0, i))
        if (i >= SUBTITLE.length) clearInterval(id)
      }, 28)
    }, 1900)
    return () => clearTimeout(start)
  }, [])

  return (
    <section id="hero" className="min-h-screen flex items-center pt-28 relative">
      <div className="max-w-[1180px] mx-auto px-6 grid grid-cols-1 md:grid-cols-[1.15fr_.85fr] gap-14 items-center relative z-[2]">
        <div className="text-center md:text-left">
          <div className="font-mono text-muted text-base mb-2.5">
            $ whoami<span className="caret" />
          </div>
          <h1 className="font-display font-bold text-[clamp(34px,6vw,64px)] leading-[1.04] tracking-tight hero-name-gradient mb-5">
            BUKKE
            <br />
            GANESH NAIK
          </h1>
          <div className="inline-block font-mono text-[14.5px] text-cyan border border-border-2 rounded-full px-4 py-2 mb-5 bg-cyan/5 min-h-[38px]">
            {typed}
            {typed.length > 0 && typed.length < SUBTITLE.length && <span className="caret" />}
          </div>
          <p className="text-muted text-base leading-[1.75] max-w-[520px] mb-8 mx-auto md:mx-0">
            Passionate about technology, problem solving and building practical solutions using
            programming, AI and modern web technologies.
          </p>
          <div className="flex flex-wrap gap-3.5 mb-9 justify-center md:justify-start">
            <a
              href="#projects"
              className="inline-flex items-center gap-2 font-semibold text-[13.5px] px-5.5 py-3 rounded-[9px] bg-gradient-to-br from-cyan to-violet text-[#04070c] hover:-translate-y-0.5 hover:shadow-[0_10px_30px_-8px_rgba(76,201,240,0.5)] transition-all"
              style={{ padding: '11px 22px' }}
            >
              View My Work
            </a>
            <a
              href="/Ganesh_Naik_Resume.docx"
              download
              className="inline-flex items-center gap-2 font-semibold text-[13.5px] rounded-[9px] border border-border-2 bg-white/[0.03] hover:bg-white/[0.07] hover:border-cyan hover:-translate-y-0.5 transition-all"
              style={{ padding: '11px 22px' }}
            >
              Download Resume
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 font-semibold text-[13.5px] rounded-[9px] border border-border-2 bg-white/[0.03] hover:bg-white/[0.07] hover:border-cyan hover:-translate-y-0.5 transition-all"
              style={{ padding: '11px 22px' }}
            >
              Contact Me
            </a>
          </div>
          <div className="flex flex-wrap gap-2.5 justify-center md:justify-start">
            {TAGS.map((t, idx) => (
              <motion.span
                key={t}
                animate={{ y: [0, -6, 0] }}
                transition={{ duration: 5 + (idx % 3) * 0.4, repeat: Infinity, delay: idx * 0.15 }}
                className="font-mono text-xs px-3.5 py-2 rounded-[7px] border border-border-2 text-muted bg-panel"
              >
                {t}
              </motion.span>
            ))}
          </div>
        </div>

        <div className="relative flex justify-center" style={{ perspective: 1000 }}>
          <motion.div
            animate={{ y: [0, -14, 0], rotate: [0, 1, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
            className="relative w-[min(360px,78vw)] aspect-square rounded-[28px] p-[3px] bg-gradient-to-br from-cyan via-violet to-green shadow-[0_30px_80px_-20px_rgba(76,201,240,0.25)]"
          >
            <div className="w-full h-full rounded-[26px] overflow-hidden relative bg-panel">
              <img
                src={profile}
                alt="Bukke Ganesh Naik"
                className="w-full h-full object-cover"
                style={{ filter: 'saturate(1.05) contrast(1.02)' }}
              />
              <div className="scan-line" />
              <div className="absolute top-3.5 left-3.5 w-5.5 h-5.5 border-t-2 border-l-2 border-cyan rounded-tl-md" style={{ width: 22, height: 22 }} />
              <div className="absolute bottom-3.5 right-3.5 border-b-2 border-r-2 border-cyan rounded-br-md" style={{ width: 22, height: 22 }} />
            </div>
          </motion.div>

          <motion.div
            animate={{ y: [0, -6, 0] }}
            transition={{ duration: 5, repeat: Infinity }}
            className="absolute -top-2 right-0 md:-right-3.5 font-mono text-[11px] px-3 py-2 rounded-[10px] bg-[rgba(10,14,20,0.85)] border border-border-2 backdrop-blur flex items-center gap-1.5 shadow-lg"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-green shadow-[0_0_8px_#39d98a] animate-pulse" />
            STATUS: OPEN TO WORK
          </motion.div>
          <motion.div
            animate={{ y: [0, -6, 0] }}
            transition={{ duration: 5.6, repeat: Infinity, delay: 0.3 }}
            className="absolute bottom-3 left-0 md:-left-6 font-mono text-[11px] px-3 py-2 rounded-[10px] bg-[rgba(10,14,20,0.85)] border border-border-2 backdrop-blur shadow-lg"
          >
            B.TECH · CSE · 2029
          </motion.div>
        </div>
      </div>

      <div className="absolute bottom-7 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-2 text-muted-2 font-mono text-[11px] tracking-[0.1em]">
        <motion.div
          animate={{ scaleY: [0, 1, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          className="w-px h-8 bg-gradient-to-b from-cyan to-transparent"
        />
        SCROLL
      </div>
    </section>
  )
}
