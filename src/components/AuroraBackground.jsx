export default function AuroraBackground() {
  return (
    <div aria-hidden="true" className="fixed inset-0 pointer-events-none" style={{ zIndex: 0 }}>
      <div
        className="absolute inset-0"
        style={{
          backgroundImage:
            'linear-gradient(rgba(255,255,255,0.025) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.025) 1px, transparent 1px)',
          backgroundSize: '60px 60px',
        }}
      />
      <div
        className="absolute top-0 right-0"
        style={{
          width: '700px', height: '700px', borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(107,170,142,0.12) 0%, transparent 65%)',
          filter: 'blur(80px)', transform: 'translate(25%, -25%)',
        }}
      />
      <div
        className="absolute bottom-0 left-0"
        style={{
          width: '500px', height: '500px', borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(46,64,87,0.15) 0%, transparent 65%)',
          filter: 'blur(80px)', transform: 'translate(-25%, 25%)',
        }}
      />
    </div>
  )
}

