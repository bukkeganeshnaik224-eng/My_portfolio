import { useEffect, useRef } from 'react'

export default function BackgroundCanvas() {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    const ctx = canvas.getContext('2d')
    let w, h, nodes = []
    let raf

    function resize() {
      w = canvas.width = window.innerWidth
      h = canvas.height = document.documentElement.scrollHeight
    }
    function initNodes() {
      const count = Math.min(70, Math.floor((w * h) / 38000))
      nodes = Array.from({ length: count }, () => ({
        x: Math.random() * w,
        y: Math.random() * h,
        vx: (Math.random() - 0.5) * 0.15,
        vy: (Math.random() - 0.5) * 0.15,
      }))
    }
    resize()
    initNodes()

    let scrollY = window.scrollY
    const onScroll = () => (scrollY = window.scrollY)
    const onResize = () => { resize(); initNodes() }
    window.addEventListener('scroll', onScroll)
    window.addEventListener('resize', onResize)

    function draw() {
      ctx.clearRect(0, 0, w, h)
      const viewTop = scrollY, viewBottom = scrollY + window.innerHeight
      for (const n of nodes) {
        n.x += n.vx; n.y += n.vy
        if (n.x < 0 || n.x > w) n.vx *= -1
        if (n.y < 0 || n.y > h) n.vy *= -1
      }
      for (let i = 0; i < nodes.length; i++) {
        const a = nodes[i]
        if (a.y < viewTop - 100 || a.y > viewBottom + 100) continue
        for (let j = i + 1; j < nodes.length; j++) {
          const b = nodes[j]
          const dx = a.x - b.x, dy = a.y - b.y
          const d = Math.sqrt(dx * dx + dy * dy)
          if (d < 130) {
            ctx.strokeStyle = `rgba(76,201,240,${0.1 * (1 - d / 130)})`
            ctx.lineWidth = 1
            ctx.beginPath()
            ctx.moveTo(a.x, a.y)
            ctx.lineTo(b.x, b.y)
            ctx.stroke()
          }
        }
      }
      for (const n of nodes) {
        if (n.y < viewTop - 50 || n.y > viewBottom + 50) continue
        ctx.beginPath()
        ctx.arc(n.x, n.y, 1.6, 0, Math.PI * 2)
        ctx.fillStyle = 'rgba(76,201,240,0.5)'
        ctx.fill()
      }
      raf = requestAnimationFrame(draw)
    }
    draw()

    return () => {
      cancelAnimationFrame(raf)
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onResize)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 z-0 pointer-events-none opacity-55"
    />
  )
}
