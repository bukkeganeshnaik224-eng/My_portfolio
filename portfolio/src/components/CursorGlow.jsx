import { useEffect, useRef } from 'react'

export default function CursorGlow() {
  const ref = useRef(null)
  const pos = useRef({ gx: 0, gy: 0, cx: 0, cy: 0 })

  useEffect(() => {
    if (!window.matchMedia('(pointer: fine)').matches) return
    pos.current.gx = pos.current.cx = window.innerWidth / 2
    pos.current.gy = pos.current.cy = window.innerHeight / 2

    const onMove = (e) => {
      pos.current.gx = e.clientX
      pos.current.gy = e.clientY
    }
    window.addEventListener('mousemove', onMove)

    let raf
    function animate() {
      const p = pos.current
      p.cx += (p.gx - p.cx) * 0.12
      p.cy += (p.gy - p.cy) * 0.12
      if (ref.current) {
        ref.current.style.transform = `translate(${p.cx}px, ${p.cy}px) translate(-50%,-50%)`
      }
      raf = requestAnimationFrame(animate)
    }
    animate()

    return () => {
      window.removeEventListener('mousemove', onMove)
      cancelAnimationFrame(raf)
    }
  }, [])

  return (
    <div
      ref={ref}
      className="fixed w-[420px] h-[420px] rounded-full pointer-events-none z-[1] hidden md:block"
      style={{
        background:
          'radial-gradient(circle, rgba(76,201,240,0.10) 0%, rgba(139,107,255,0.06) 40%, transparent 70%)',
      }}
    />
  )
}
