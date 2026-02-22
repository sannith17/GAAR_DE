import { useEffect, useState } from 'react'

export default function EdgeLighting({ trigger, color = '#004aad' }) {
  const [isActive, setIsActive] = useState(false)

  useEffect(() => {
    if (trigger) {
      setIsActive(true)
      const timer = setTimeout(() => setIsActive(false), 1500)
      return () => clearTimeout(timer)
    }
  }, [trigger])

  if (!isActive) return null

  return (
    <div className="fixed inset-0 pointer-events-none z-[9999]">
      {/* Top edge */}
      <div className="absolute top-0 left-0 right-0 h-1 animate-edgeLightFlow">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#004aad] to-transparent blur-md"></div>
      </div>
      
      {/* Right edge */}
      <div className="absolute top-0 bottom-0 right-0 w-1 animate-edgeLightFlow">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#004aad] to-transparent blur-md"></div>
      </div>
      
      {/* Bottom edge */}
      <div className="absolute bottom-0 left-0 right-0 h-1 animate-edgeLightFlow">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#004aad] to-transparent blur-md"></div>
      </div>
      
      {/* Left edge */}
      <div className="absolute top-0 bottom-0 left-0 w-1 animate-edgeLightFlow">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#004aad] to-transparent blur-md"></div>
      </div>

      {/* Corner accents */}
      <div className="absolute top-0 left-0 w-16 h-16">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-[#004aad] to-transparent blur-xl opacity-70 animate-pulse"></div>
      </div>
      <div className="absolute top-0 right-0 w-16 h-16">
        <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-bl from-[#004aad] to-transparent blur-xl opacity-70 animate-pulse"></div>
      </div>
      <div className="absolute bottom-0 left-0 w-16 h-16">
        <div className="absolute bottom-0 left-0 w-full h-full bg-gradient-to-tr from-[#004aad] to-transparent blur-xl opacity-70 animate-pulse"></div>
      </div>
      <div className="absolute bottom-0 right-0 w-16 h-16">
        <div className="absolute bottom-0 right-0 w-full h-full bg-gradient-to-tl from-[#004aad] to-transparent blur-xl opacity-70 animate-pulse"></div>
      </div>
    </div>
  )
}
