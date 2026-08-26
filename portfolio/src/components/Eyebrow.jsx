export default function Eyebrow({ children, center = false }) {
  return (
    <div
      className={`font-mono text-xs tracking-[0.15em] uppercase text-cyan flex items-center gap-2.5 mb-3.5 ${
        center ? 'justify-center' : ''
      }`}
    >
      <span className="inline-block bg-cyan" style={{ width: 22, height: 1 }} />
      {children}
    </div>
  )
}
