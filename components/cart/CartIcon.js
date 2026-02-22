import Link from 'next/link'
import { FaShoppingCart } from 'react-icons/fa'
import { useCart } from '../../context/CartContext'
import { useEffect, useState, useContext } from 'react'
import { EdgeLightContext } from '../../context/EdgeLightContext'

export default function CartIcon() {
  const { cart } = useCart()
  const itemCount = cart.items.reduce((sum, item) => sum + item.quantity, 0)
  const [blast, setBlast] = useState(false)
  const [prevCount, setPrevCount] = useState(itemCount)
  const { setEdgeLightTrigger, setEdgeLightColor } = useContext(EdgeLightContext)

  // Trigger blast animation when item count increases
  useEffect(() => {
    if (itemCount > prevCount) {
      setBlast(true)
      setEdgeLightColor('#FFD700') // Gold for cart
      setEdgeLightTrigger(prev => !prev)
      setTimeout(() => setBlast(false), 800)
    }
    setPrevCount(itemCount)
  }, [itemCount, prevCount, setEdgeLightTrigger, setEdgeLightColor])

  return (
    <Link href="/cart" className="relative group block">
      <div className="relative">
        {/* Main Icon Container */}
        <div className="relative transform group-hover:scale-110 transition-all duration-300">
          {/* Blast/Light Effect */}
          {blast && (
            <>
              {/* Radial blast */}
              <div className="absolute inset-0 animate-ping">
                <div className="w-full h-full rounded-full bg-gradient-to-r from-yellow-300 via-yellow-400 to-yellow-500 opacity-75 blur-xl"></div>
              </div>
              
              {/* Sparkle particles */}
              <div className="absolute -inset-4 animate-pulse">
                {[...Array(8)].map((_, i) => (
                  <div
                    key={i}
                    className="absolute w-1 h-1 bg-yellow-300 rounded-full animate-blast"
                    style={{
                      top: `${Math.random() * 100}%`,
                      left: `${Math.random() * 100}%`,
                      animationDelay: `${i * 0.1}s`,
                      transform: `rotate(${i * 45}deg)`,
                    }}
                  />
                ))}
              </div>
            </>
          )}

          {/* Glowing effect ring (always present) */}
          <div className="absolute -inset-2 rounded-full bg-gradient-to-r from-yellow-300/30 via-yellow-400/30 to-yellow-500/30 
                        blur-md group-hover:from-yellow-300/50 group-hover:via-yellow-400/50 group-hover:to-yellow-500/50 
                        transition-all duration-500 animate-pulse-slow"></div>

          {/* Main icon with glassy effect */}
          <div className="relative">
            {/* Glass overlay */}
            <div className="absolute inset-0 rounded-full bg-gradient-to-br from-white/20 to-transparent 
                          group-hover:from-white/30 transition-all duration-300"></div>
            
            {/* Cart icon with metallic gold */}
            <FaShoppingCart 
              size={24} 
              className="relative z-10 text-[#FFD700] drop-shadow-[0_0_12px_rgba(255,215,0,0.8)]
                       group-hover:text-[#FFE55C] group-hover:drop-shadow-[0_0_20px_rgba(255,215,0,1)]
                       transition-all duration-300 filter brightness-110" 
            />
          </div>

          {/* Scanning light effect */}
          <div className="absolute inset-0 overflow-hidden rounded-full">
            <div className="absolute inset-0 translate-x-[-100%] group-hover:translate-x-[100%] 
                          bg-gradient-to-r from-transparent via-white/40 to-transparent 
                          transition-transform duration-1000 ease-in-out"></div>
          </div>
        </div>

        {/* Item Count Badge - Premium Gold */}
        {itemCount > 0 && (
          <div className="absolute -top-2 -right-2 group/badge">
            {/* Badge glow */}
            <div className="absolute inset-0 animate-ping-slow">
              <div className="w-full h-full rounded-full bg-gradient-to-r from-yellow-400 to-yellow-600 blur-sm"></div>
            </div>
            
            {/* Badge with metallic effect */}
            <span className="relative z-20 flex items-center justify-center w-6 h-6 
                           bg-gradient-to-br from-yellow-400 via-yellow-500 to-yellow-600
                           text-white text-xs font-bold rounded-full 
                           shadow-[0_0_15px_rgba(255,215,0,0.7)]
                           border border-yellow-300/50
                           group-hover/badge:scale-110 group-hover/badge:shadow-[0_0_20px_rgba(255,215,0,1)]
                           transition-all duration-300
                           before:absolute before:inset-0 before:rounded-full 
                           before:bg-gradient-to-br before:from-white/30 before:to-transparent">
              {itemCount}
            </span>
          </div>
        )}
      </div>
    </Link>
  )
}
