import { useRouter } from 'next/router'
import { playClickSound } from '../../utils/sound'

export default function ModelButton({ model }) {
  const router = useRouter()

  const handleClick = () => {
    playClickSound()
    router.push(`/models/${model}`)
  }

  return (
    <button
      onClick={handleClick}
      className="group outline-none"
    >
      {/* Main button with glass effect */}
      <div className="relative w-32 h-32 rounded-full bg-gradient-to-br from-white to-gray-50 
                    border-4 border-[#004aad] shadow-lg 
                    transition-all duration-300 
                    group-hover:-translate-y-2 group-hover:shadow-2xl
                    flex items-center justify-center font-bold text-[#004aad] text-xl
                    overflow-hidden">
        
        {/* Hover shine effect */}
        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 
                      bg-gradient-to-tr from-white/60 via-transparent to-transparent 
                      transition-opacity duration-500"></div>
        
        {/* Text */}
        <span className="relative z-10">{model}</span>
      </div>
    </button>
  )
}
