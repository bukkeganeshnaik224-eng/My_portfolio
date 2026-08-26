import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const LINKS = [
  { href: '#hero', label: 'Home' },
  { href: '#about', label: 'About' },
  { href: '#education', label: 'Education' },
  { href: '#skills', label: 'Skills' },
  { href: '#projects', label: 'Projects' },
  { href: '#certifications', label: 'Certifications' },
  { href: '#contact', label: 'Contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-300 border-b ${
          scrolled
            ? 'py-3 bg-[rgba(10,14,20,0.72)] backdrop-blur-md border-border'
            : 'py-5 border-transparent'
        }`}
      >
        <div className="max-w-[1180px] mx-auto px-6 flex items-center justify-between">
          <a href="#hero" className="no-underline">
            <div className="w-10 h-10 rounded-[10px] border border-border-2 flex items-center justify-center font-display font-bold text-xl bg-gradient-to-br from-cyan/10 to-violet/10 relative overflow-hidden">
              GN
            </div>
          </a>
          <ul className="hidden md:flex gap-8 list-none text-sm font-medium">
            {LINKS.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  className="text-muted hover:text-white transition-colors relative group"
                >
                  {l.label}
                  <span className="absolute left-0 -bottom-0.5 w-0 h-px bg-cyan transition-all duration-300 group-hover:w-full" />
                </a>
              </li>
            ))}
          </ul>
          <div className="flex items-center gap-3">
            <a
              href="/Ganesh_Naik_Resume.docx"
              download
              className="hidden md:inline-flex items-center gap-2 text-[13.5px] font-semibold px-5 py-2.5 rounded-[9px] border border-border-2 bg-white/[0.03] hover:bg-white/[0.07] hover:border-cyan hover:-translate-y-0.5 transition-all"
            >
              Resume
            </a>
            <button
              aria-label="Menu"
              onClick={() => setOpen(!open)}
              className="md:hidden flex flex-col gap-[5px] p-1.5"
            >
              <span
                className={`w-5.5 h-0.5 bg-white transition-transform ${open ? 'translate-y-[7px] rotate-45' : ''}`}
                style={{ width: 22 }}
              />
              <span className={`h-0.5 bg-white transition-opacity ${open ? 'opacity-0' : ''}`} style={{ width: 22 }} />
              <span
                className={`h-0.5 bg-white transition-transform ${open ? '-translate-y-[7px] -rotate-45' : ''}`}
                style={{ width: 22 }}
              />
            </button>
          </div>
        </div>
      </nav>

      <AnimatePresence>
        {open && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setOpen(false)}
              className="fixed inset-0 bg-black/50 z-[98]"
            />
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ duration: 0.4, ease: [0.2, 0.8, 0.3, 1] }}
              className="fixed top-0 right-0 h-screen w-[min(300px,78vw)] bg-[rgba(12,16,24,0.98)] backdrop-blur-md border-l border-border z-[99] px-8 pt-24 flex flex-col gap-7"
            >
              {LINKS.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="text-white font-display font-semibold text-lg"
                >
                  {l.label}
                </a>
              ))}
              <a
                href="/Ganesh_Naik_Resume.docx"
                download
                onClick={() => setOpen(false)}
                className="text-cyan font-display font-semibold text-lg"
              >
                Download Resume
              </a>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  )
}
