import { useEffect, useRef, useState } from 'react'

export default function Cursor() {
  const dotRef = useRef(null)
  const ringRef = useRef(null)
  const [hovered, setHovered] = useState(false)
  const [clicked, setClicked] = useState(false)

  useEffect(() => {
    const dot = dotRef.current
    const ring = ringRef.current
    let mouseX = 0, mouseY = 0
    let ringX = 0, ringY = 0
    let raf

    const onMove = (e) => {
      mouseX = e.clientX
      mouseY = e.clientY
      dot.style.transform = `translate(${mouseX - 5}px, ${mouseY - 5}px)`
    }
    const onDown = () => setClicked(true)
    const onUp = () => setClicked(false)
    const onEnter = () => setHovered(true)
    const onLeave = () => setHovered(false)

    const loop = () => {
      ringX += (mouseX - ringX) * 0.10
      ringY += (mouseY - ringY) * 0.10
      ring.style.transform = `translate(${ringX - 18}px, ${ringY - 18}px)`
      raf = requestAnimationFrame(loop)
    }

    const els = document.querySelectorAll('a, button, [data-cursor]')
    els.forEach(el => {
      el.addEventListener('mouseenter', onEnter)
      el.addEventListener('mouseleave', onLeave)
    })

    window.addEventListener('mousemove', onMove)
    window.addEventListener('mousedown', onDown)
    window.addEventListener('mouseup', onUp)
    raf = requestAnimationFrame(loop)

    return () => {
      cancelAnimationFrame(raf)
      window.removeEventListener('mousemove', onMove)
      window.removeEventListener('mousedown', onDown)
      window.removeEventListener('mouseup', onUp)
      els.forEach(el => {
        el.removeEventListener('mouseenter', onEnter)
        el.removeEventListener('mouseleave', onLeave)
      })
    }
  }, [])

  return (
    <>
      {/* Main dot — mix-blend-mode:difference makes it always visible */}
      <div
        ref={dotRef}
        className="fixed top-0 left-0 z-[99999] pointer-events-none"
        style={{ willChange: 'transform', mixBlendMode: 'difference' }}
      >
        <div
          className="w-2.5 h-2.5 rounded-full bg-white transition-transform duration-100"
          style={{ transform: clicked ? 'scale(0.5)' : 'scale(1)' }}
        />
      </div>

      {/* Follower ring */}
      <div
        ref={ringRef}
        className="fixed top-0 left-0 z-[99998] pointer-events-none"
        style={{ willChange: 'transform', mixBlendMode: 'difference' }}
      >
        <div
          className="w-9 h-9 rounded-full border border-white transition-all duration-300"
          style={{
            transform: hovered ? 'scale(1.6)' : clicked ? 'scale(0.7)' : 'scale(1)',
            background: hovered ? 'rgba(255,255,255,0.1)' : 'transparent',
          }}
        />
      </div>
    </>
  )
}
