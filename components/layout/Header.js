import Link from 'next/link'
import { useRouter } from 'next/router'
import { FaShoppingCart, FaUser, FaSearch } from 'react-icons/fa'
import CartIcon from '../cart/CartIcon'
import tyresData from '../../data/tyres.json'

// Extract unique brands for dropdown
const uniqueBrands = [...new Set(tyresData.map(item => item.brand))].sort().slice(0, 5)

export default function Header() {
  const router = useRouter()

  return (
    <header className="bg-[#004aad] shadow-lg sticky top-0 z-50">
      {/* Main Header - Blue Background */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo with Racing Sans One Font */}
          <Link 
            href="/" 
            className="flex flex-col leading-none group"
          >
            <span className="text-4xl font-black text-white tracking-tighter font-['Racing_Sans_One'] group-hover:opacity-90 transition-opacity">
              GAAR
            </span>
            <span className="text-xs text-white/80 tracking-widest font-['Racing_Sans_One'] group-hover:text-white/90 transition-colors">
              RÄDER UND REIFEN
            </span>
          </Link>

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
              href="/models/BMW" 
              className={`text-white hover:text-gray-200 transition-colors ${
                router.pathname.includes('models') ? 'font-semibold border-b-2 border-white' : ''
              }`}
            >
              Reifen
            </Link>
            <Link 
              href="/models/BMW" 
              className="text-white hover:text-gray-200 transition-colors"
            >
              Räder
            </Link>
            <Link 
              href="/" 
              className="text-white hover:text-gray-200 transition-colors"
            >
              Angebote
            </Link>
            <Link 
              href="/" 
              className="text-white hover:text-gray-200 transition-colors"
            >
              Kontakt
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
            <CartIcon />
          </div>
        </div>
      </div>

      {/* Dropdown Menu - Popular Brands */}
      <div className="bg-gray-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex space-x-8 py-3 text-sm">
            {uniqueBrands.map(brand => (
              <Link 
                key={brand}
                href={`/models/${brand}`} 
                className="text-gray-200 hover:text-white transition-colors"
              >
                {brand}
              </Link>
            ))}
            <Link href="/models" className="text-gray-200 hover:text-white transition-colors font-semibold">
              Alle Marken →
            </Link>
          </div>
        </div>
      </div>
    </header>
  )
}
