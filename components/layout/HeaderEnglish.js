import Link from 'next/link'
import { useRouter } from 'next/router'
import { FaShoppingCart, FaUser, FaSearch } from 'react-icons/fa'
import CartIcon from '../cart/CartIcon'

export default function HeaderEnglish() {
  const router = useRouter()

  return (
    <header className="bg-[#004aad] shadow-lg sticky top-0 z-50">
      {/* Main Header - Blue Background */}
      <div className="container-custom">
        <div className="flex items-center justify-between h-20">
          {/* Logo - White */}
          <Link 
            href="/" 
            className="text-4xl font-black text-white tracking-tighter hover:opacity-80 transition-opacity"
          >
            GAAR
          </Link>

          {/* Navigation - Exactly as in screenshot */}
          <nav className="hidden md:flex space-x-8">
            <Link 
              href="/" 
              className="text-white hover:text-gray-200 transition-colors uppercase text-sm font-medium"
            >
              STARTPAGE
            </Link>
            <Link 
              href="/models/Swift" 
              className="text-white hover:text-gray-200 transition-colors uppercase text-sm font-medium"
            >
              Tires
            </Link>
            <Link 
              href="/models/Swift" 
              className="text-white hover:text-gray-200 transition-colors uppercase text-sm font-medium"
            >
              Wheels
            </Link>
            <Link 
              href="/" 
              className="text-white hover:text-gray-200 transition-colors uppercase text-sm font-medium"
            >
              Special offers
            </Link>
            <Link 
              href="/" 
              className="text-white hover:text-gray-200 transition-colors uppercase text-sm font-medium"
            >
              Contact
            </Link>
          </nav>

          {/* Icons - White */}
          <div className="flex items-center space-x-6">
            <button className="text-white hover:text-gray-200 transition-colors">
              <FaSearch size={18} />
            </button>
            <button className="text-white hover:text-gray-200 transition-colors">
              <FaUser size={18} />
            </button>
            <CartIcon />
          </div>
        </div>
      </div>

      {/* Dropdown Menu - Gray Background with White Text */}
      <div className="bg-gray-600 text-white">
        <div className="container-custom">
          <div className="flex space-x-8 py-3 text-sm">
            <Link 
              href="/models/Swift" 
              className="text-gray-200 hover:text-white transition-colors"
            >
              Summer tires
            </Link>
            <Link 
              href="/models/Swift" 
              className="text-gray-200 hover:text-white transition-colors"
            >
              Winter tires
            </Link>
            <Link 
              href="/models/Swift" 
              className="text-gray-200 hover:text-white transition-colors"
            >
              All-season tires
            </Link>
            <Link 
              href="/models/Swift" 
              className="text-gray-200 hover:text-white transition-colors"
            >
              Complete wheels
            </Link>
            <Link 
              href="/models/Swift" 
              className="text-gray-200 hover:text-white transition-colors"
            >
              Rims
            </Link>
          </div>
        </div>
      </div>
    </header>
  )
}
