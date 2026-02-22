import Link from 'next/link'
import { useRouter } from 'next/router'
import { FaShoppingCart, FaUser, FaSearch } from 'react-icons/fa'
import CartIcon from '../cart/CartIcon'
import { useContext } from 'react'
import { playClickSound } from '../../utils/sound'
import { EdgeLightContext } from '../../context/EdgeLightContext'

export default function Header() {
  const router = useRouter()
  const { setEdgeLightTrigger, setEdgeLightColor } = useContext(EdgeLightContext)

  const handleLogoClick = (e) => {
    e.preventDefault()
    playClickSound()
    setEdgeLightColor('#00ff00') // Green for logo
    setEdgeLightTrigger(prev => !prev)
    setTimeout(() => {
      router.push('/')
    }, 300)
  }

  const handleCartClick = () => {
    setEdgeLightColor('#FFD700') // Gold for cart
    setEdgeLightTrigger(prev => !prev)
  }

  return (
    <header className="bg-[#004aad] shadow-lg sticky top-0 z-50">
      {/* Main Header - Blue Background */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo with Green Edge Lighting */}
          <div className="relative group">
            <button 
              onClick={handleLogoClick}
              className="relative text-4xl font-black text-white tracking-tighter 
                       transition-all duration-300 hover:scale-105"
            >
              GAAR
              
              {/* Glass overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent 
                            rounded-lg pointer-events-none"></div>
            </button>
          </div>

          {/* Navigation */}
          <nav className="hidden md:flex space-x-8">
            <Link 
              href="/" 
              className={`text-white hover:text-gray-200 transition-colors ${
                router.pathname === '/' ? 'font-semibold border-b-2 border-white' : ''
              }`}
            >
              Startpage
            </Link>
            <Link 
              href="/models/Swift" 
              className={`text-white hover:text-gray-200 transition-colors ${
                router.pathname.includes('models') ? 'font-semibold border-b-2 border-white' : ''
              }`}
            >
              Tires
            </Link>
            <Link 
              href="/models/Swift" 
              className="text-white hover:text-gray-200 transition-colors"
            >
              Wheels
            </Link>
            <Link 
              href="/" 
              className="text-white hover:text-gray-200 transition-colors"
            >
              Special offers
            </Link>
            <Link 
              href="/" 
              className="text-white hover:text-gray-200 transition-colors"
            >
              Contact
            </Link>
          </nav>

          {/* Icons */}
          <div className="flex items-center space-x-6">
            <button className="text-white hover:text-gray-200 transition-colors">
              <FaSearch size={20} />
            </button>
            <button className="text-white hover:text-gray-200 transition-colors">
              <FaUser size={20} />
            </button>
            <div onClick={handleCartClick}>
              <CartIcon />
            </div>
          </div>
        </div>
      </div>

      {/* Dropdown Menu */}
      <div className="bg-gray-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex space-x-8 py-3 text-sm">
            <Link href="/models/Swift" className="text-gray-200 hover:text-white transition-colors">
              Summer tires
            </Link>
            <Link href="/models/Swift" className="text-gray-200 hover:text-white transition-colors">
              Winter tires
            </Link>
            <Link href="/models/Swift" className="text-gray-200 hover:text-white transition-colors">
              All-season tires
            </Link>
            <Link href="/models/Swift" className="text-gray-200 hover:text-white transition-colors">
              Complete wheels
            </Link>
            <Link href="/models/Swift" className="text-gray-200 hover:text-white transition-colors">
              Rims
            </Link>
          </div>
        </div>
      </div>
    </header>
  )
}
