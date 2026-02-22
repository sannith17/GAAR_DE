import Link from 'next/link'
import { useRouter } from 'next/router'
import { FaShoppingCart, FaUser, FaSearch } from 'react-icons/fa'
import CartIcon from '../cart/CartIcon'
import tyresData from '../../data/tyres.json'
import { useState } from 'react'

// Extract unique brands for dropdown
const uniqueBrands = [...new Set(tyresData.map(item => item.brand))].sort().slice(0, 5)

export default function Header() {
  const router = useRouter()
  const [searchQuery, setSearchQuery] = useState('')

  const handleSearch = (e) => {
    e.preventDefault()
    if (searchQuery.trim()) {
      router.push(`/models?search=${searchQuery}`)
    }
  }

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

          {/* Search Bar - Radium Green */}
          <form onSubmit={handleSearch} className="hidden md:flex items-center bg-white/10 rounded-full px-4 py-1.5 border border-white/20 w-64">
            <input
              type="text"
              placeholder="Reifen suchen..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="bg-transparent text-white placeholder-white/60 text-sm focus:outline-none w-full"
            />
            <button type="submit">
              <FaSearch className="text-[#00FF00] hover:text-[#00DD00] transition-colors drop-shadow-[0_0_8px_rgba(0,255,0,0.5)]" />
            </button>
          </form>

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
            {/* Mobile Search Icon - Radium Green */}
            <button className="md:hidden text-[#00FF00] hover:text-[#00DD00] transition-colors drop-shadow-[0_0_8px_rgba(0,255,0,0.5)]">
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
