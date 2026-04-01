import { useScroll, useSpring, motion } from 'framer-motion'

export default function ScrollProgress() {
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  })

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-[2px] origin-left z-[9998]"
      style={{
        scaleX,
        background: 'linear-gradient(to right, #3ECFB2, #9B8EC4, #B5541E)',
      }}
    />
  )
}
