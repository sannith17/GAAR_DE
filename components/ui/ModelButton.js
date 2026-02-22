import { useRouter } from 'next/router'
import { playClickSound } from '../../utils/sound'
import { getBrandLogo } from '../../utils/brandLogos'
import Image from 'next/image'
import { useState } from 'react'

export default function ModelButton({ model }) {
  const router = useRouter()
  const [imgError, setImgError] = useState(false)
  const logoUrl = getBrandLogo(model)

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
                    group-hover:border-orange-500
                    flex items-center justify-center
                    overflow-hidden">
        
        {/* Hover shine effect */}
        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 
                      bg-gradient-to-tr from-white/60 via-transparent to-transparent 
                      transition-opacity duration-500"></div>
        
        {/* Logo or Brand Name */}
        {logoUrl && !imgError ? (
          <div className="relative w-20 h-20">
            <Image
              src={logoUrl}
              alt={model}
              fill
              className="object-contain p-2 group-hover:scale-110 transition-transform duration-300"
              onError={() => setImgError(true)}
              unoptimized={true}
            />
          </div>
        ) : (
          <span className="text-xl font-bold text-[#004aad] group-hover:text-orange-500 transition-colors duration-300">
            {model}
          </span>
        )}
      </div>
    </button>
  )
}
