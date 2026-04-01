import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const words = ['Desarrollador', 'Consultor Odoo', 'Solucionador', 'Jonathan.']

export default function Intro({ onDone }) {
  const [phase, setPhase] = useState(0)
  // phase 0: counting up  phase 1: word cycle  phase 2: final curtain  phase 3: done

  // counter
  const [count, setCount] = useState(0)
  useEffect(() => {
    if (phase !== 0) return
    if (count < 100) {
      const t = setTimeout(() => setCount((c) => c + Math.ceil(Math.random() * 4)), 32)
      return () => clearTimeout(t)
    }
    const t = setTimeout(() => setPhase(1), 500)
    return () => clearTimeout(t)
  }, [count, phase])

  // word cycling
  const [wordIdx, setWordIdx] = useState(0)
  useEffect(() => {
    if (phase !== 1) return
    if (wordIdx < words.length - 1) {
      const t = setTimeout(() => setWordIdx((i) => i + 1), 900)
      return () => clearTimeout(t)
    }
    const t = setTimeout(() => setPhase(2), 1200)
    return () => clearTimeout(t)
  }, [phase, wordIdx])

  // curtain done
  useEffect(() => {
    if (phase === 2) {
      const t = setTimeout(() => setPhase(3), 900)
      return () => clearTimeout(t)
    }
    if (phase === 3) onDone()
  }, [phase, onDone])

  return (
    <AnimatePresence>
      {phase < 3 && (
        <motion.div
          key="intro"
          className="fixed inset-0 z-[9999] flex flex-col items-center justify-center overflow-hidden"
          style={{ background: '#1A1A1A' }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5, ease: 'easeInOut' }}
        >
          {/* Animated violet glow blob */}
          <motion.div
            className="absolute w-[600px] h-[600px] rounded-full pointer-events-none"
            style={{ background: 'radial-gradient(circle, rgba(107,170,142,0.25) 0%, transparent 70%)', filter: 'blur(80px)' }}
            animate={{ scale: [1, 1.12, 1], opacity: [0.6, 1, 0.6] }}
            transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
          />

          {/* Grid overlay */}
          <div
            className="absolute inset-0 pointer-events-none opacity-[0.025]"
            style={{
              backgroundImage: 'linear-gradient(rgba(255,255,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)',
              backgroundSize: '55px 55px',
            }}
          />

          <div className="relative z-10 text-center px-8">
            {/* Counter phase */}
            <AnimatePresence mode="wait">
              {phase === 0 && (
                <motion.div
                  key="counter"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.3 }}
                  className="font-display font-bold text-white"
                  style={{ fontSize: 'clamp(5rem, 18vw, 14rem)', lineHeight: 1 }}
                >
                  <span style={{ color: 'transparent', WebkitTextStroke: '1.5px rgba(255,255,255,0.12)' }}>
                    {Math.min(count, 100)}
                  </span>
                  <span className="text-violet text-[0.4em] ml-2">%</span>
                </motion.div>
              )}

              {/* Word phase */}
              {phase === 1 && (
                <motion.div
                  key="words"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <AnimatePresence mode="wait">
                    <motion.p
                      key={wordIdx}
                      initial={{ y: 40, opacity: 0, filter: 'blur(8px)' }}
                      animate={{ y: 0, opacity: 1, filter: 'blur(0px)' }}
                      exit={{ y: -30, opacity: 0, filter: 'blur(4px)' }}
                      transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                      className="font-display font-bold text-white"
                      style={{
                        fontSize: wordIdx === words.length - 1 ? 'clamp(3.5rem, 12vw, 10rem)' : 'clamp(2rem, 6vw, 5rem)',
                        color: wordIdx === words.length - 1 ? undefined : 'transparent',
                        WebkitTextStroke: wordIdx === words.length - 1 ? undefined : '1.5px rgba(139,92,246,0.6)',
                      }}
                    >
                      {words[wordIdx]}
                    </motion.p>
                  </AnimatePresence>
                  {wordIdx === words.length - 1 && (
                    <motion.p
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.2, duration: 0.4 }}
                      className="font-body text-silver text-sm tracking-[0.2em] uppercase mt-4"
                    >
                      Desarrollador & Consultor Odoo
                    </motion.p>
                  )}
                </motion.div>
              )}
            </AnimatePresence>

            {/* Dot row */}
            {phase === 0 && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
                className="flex items-center justify-center gap-2 mt-8"
              >
                {words.map((_, i) => (
                  <span key={i} className="w-1.5 h-1.5 rounded-full bg-edge" />
                ))}
              </motion.div>
            )}
          </div>

          {/* Curtain wipe — slides up on exit */}
          {phase === 2 && (
            <motion.div
              className="absolute inset-0 z-20"
              style={{ background: '#1A1A1A', transformOrigin: 'bottom' }}
              initial={{ scaleY: 1 }}
              animate={{ scaleY: 0 }}
              transition={{ duration: 0.75, ease: [0.76, 0, 0.24, 1] }}
            />
          )}

          {/* Bottom bar */}
          <div className="absolute bottom-8 left-0 right-0 px-8 md:px-14 flex items-center justify-between">
            <span className="font-body text-[10px] text-silver/40 uppercase tracking-[0.2em]">Portfolio</span>
            <motion.div
              className="h-px bg-teal/40"
              initial={{ width: 0 }}
              animate={{ width: phase === 0 ? `${count}%` : '100%' }}
              transition={{ duration: 0.1 }}
              style={{ maxWidth: '200px' }}
            />
            <span className="font-body text-[10px] text-silver/40 uppercase tracking-[0.2em]">2026</span>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

