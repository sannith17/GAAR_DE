import { useRouter } from 'next/router'
import { playClickSound } from '../../utils/sound'
import { useContext } from 'react'
import { EdgeLightContext } from '../../context/EdgeLightContext'

export default function ModelButton({ model }) {
  const router = useRouter()
  const { setEdgeLightTrigger, setEdgeLightColor } = useContext(EdgeLightContext)

  const handleClick = () => {
    playClickSound()
    setEdgeLightColor('#004aad') // Blue for models
    setEdgeLightTrigger(prev => !prev)
    setTimeout(() => {
      router.push(`/models/${model}`)
    }, 300)
  }

  return (
    <button
      onClick={handleClick}
      className="relative group outline-none"
    >
      {/* Main button with glass effect */}
      <div className="relative w-32 h-32 rounded-full bg-gradient-to-br from-white/80 to-white/40 
                    backdrop-blur-xl border-4 border-[#004aad] shadow-xl 
                    transition-all duration-300 
                    group-hover:-translate-y-2 group-hover:shadow-2xl
                    flex items-center justify-center font-bold text-[#004aad] text-xl
                    overflow-hidden">
        
        {/* Glass overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-white/60 to-transparent 
                      pointer-events-none"></div>
        
        {/* Inner shine */}
        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 
                      bg-gradient-to-tr from-white/40 via-transparent to-transparent 
                      transition-opacity duration-500"></div>
        
        {/* Text */}
        <span className="relative z-10">{model}</span>
      </div>
    </button>
  )
}
