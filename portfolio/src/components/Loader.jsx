import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const LINES = [
  '$ initializing profile...',
  '$ loading modules [java, python, sql]',
  '$ compiling interface...',
  '$ access granted ✓',
]

export default function Loader({ onDone }) {
  const [step, setStep] = useState(0)
  const [visible, setVisible] = useState(true)

  useEffect(() => {
    if (step < LINES.length) {
      const t = setTimeout(() => setStep(step + 1), 420)
      return () => clearTimeout(t)
    } else {
      const t = setTimeout(() => {
        setVisible(false)
        onDone?.()
      }, 300)
      return () => clearTimeout(t)
    }
  }, [step, onDone])

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6 }}
          className="fixed inset-0 z-[9999] bg-bg flex items-center justify-center font-mono"
        >
          <div className="w-[min(420px,86vw)]">
            <div className="text-green text-[13px] tracking-wide min-h-[20px] mb-2">
              {LINES[Math.min(step, LINES.length - 1)]}
              <span className="caret" />
            </div>
            <div className="w-full h-[3px] bg-border rounded overflow-hidden mt-4">
              <motion.div
                className="h-full bg-gradient-to-r from-cyan to-violet"
                animate={{ width: `${(Math.min(step, LINES.length) / LINES.length) * 100}%` }}
                transition={{ duration: 0.15 }}
              />
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
