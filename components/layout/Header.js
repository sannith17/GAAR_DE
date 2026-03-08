import Link from 'next/link'
import { useRouter } from 'next/router'
import { FaShoppingCart, FaUser, FaSearch, FaPhone, FaEnvelope, FaBars } from 'react-icons/fa'
import CartIcon from '../cart/CartIcon'
import tyresData from '../../data/tyres.json'
import { useState } from 'react'

// Extract unique brands for dropdown
const uniqueBrands = [...new Set(tyresData.map(item => item.brand))].sort().slice(0, 5)

export default function Header() {
  const router = useRouter()
  const [searchQuery, setSearchQuery] = useState('')
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [logoHover, setLogoHover] = useState(false)

  const handleSearch = (e) => {
    e.preventDefault()
    if (searchQuery.trim()) {
      window.location.href = `/models?search=${encodeURIComponent(searchQuery)}`
    }
  }

  const handleBrandClick = (brand) => {
    window.location.href = `/models/${encodeURIComponent(brand)}`
  }

  return (
    <header className="bg-[#004aad] shadow-lg sticky top-0 z-50">
      {/* Top Bar - Communication */}
      <div className="bg-[#003a8a] text-white/90 text-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-10">
            <div className="flex items-center space-x-6">
              <a href="tel:080042278973" className="flex items-center gap-2 hover:text-white transition-colors">
                <FaPhone size={14} className="text-[#00FF00]" />
                <span>0800 - GAAR TYRE</span>
              </a>
              <a href="mailto:info@gaar.de" className="flex items-center gap-2 hover:text-white transition-colors">
                <FaEnvelope size={14} className="text-[#00FF00]" />
                <span>info@gaar.de</span>
              </a>
            </div>
            <div className="flex items-center space-x-4">
              <span className="text-white/70">Mo-Fr: 9-18 Uhr | Sa: 10-14 Uhr</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Header - Blue Background */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo with Apple Mac Glass Animation */}
          <button 
            onClick={() => window.location.href = '/'}
            onMouseEnter={() => setLogoHover(true)}
            onMouseLeave={() => setLogoHover(false)}
            className="flex flex-col leading-none group relative"
          >
            {/* Apple Mac-style glass effect container */}
            <div className="relative">
              {/* Base glass layer */}
              <div className={`absolute inset-0 bg-white/0 rounded-lg transition-all duration-700 
                            ${logoHover ? 'backdrop-blur-md bg-white/20 scale-110 -inset-2' : ''}`}>
                {/* Inner glow effect */}
                <div className={`absolute inset-0 bg-gradient-to-r from-white/40 via-white/60 to-white/40 
                              rounded-lg opacity-0 transition-opacity duration-700 blur-sm
                              ${logoHover ? 'opacity-100' : ''}`}></div>
              </div>
              
              {/* Main Logo */}
              <div className="relative z-10">
                <span className={`text-4xl font-black text-white tracking-tighter font-['Racing_Sans_One'] 
                               transition-all duration-700 block
                               ${logoHover ? 'text-white/90 scale-105' : ''}`}>
                  GAAR
                </span>
                <span className={`text-xs text-white/80 tracking-widest font-['Racing_Sans_One'] 
                               transition-all duration-700 block
                               ${logoHover ? 'text-white/90' : ''}`}>
                  RÄDER UND REIFEN
                </span>
              </div>

              {/* Apple-style shimmer effect */}
              <div className={`absolute inset-0 overflow-hidden rounded-lg pointer-events-none
                            ${logoHover ? 'opacity-100' : 'opacity-0'}`}>
                <div className="absolute inset-0 translate-x-[-100%] animate-shimmer 
                              bg-gradient-to-r from-transparent via-white/40 to-transparent"></div>
              </div>
            </div>

            {/* Subtle bottom glow */}
            <div className={`absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-12 h-0.5 
                          bg-gradient-to-r from-transparent via-white/60 to-transparent 
                          transition-opacity duration-700 blur-sm
                          ${logoHover ? 'opacity-100' : 'opacity-0'}`}>
            </div>
          </button>

          {/* Search Bar */}
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

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <button 
              onClick={() => window.location.href = '/'}
              className={`text-white hover:text-gray-200 transition-colors ${
                router.pathname === '/' ? 'font-semibold border-b-2 border-white' : ''
              }`}
            >
              Startpage
            </button>
            <button 
              onClick={() => window.location.href = '/models/BMW'}
              className={`text-white hover:text-gray-200 transition-colors ${
                router.pathname.includes('models') ? 'font-semibold border-b-2 border-white' : ''
              }`}
            >
              Reifen
            </button>
            <button 
              onClick={() => window.location.href = '/models/BMW'}
              className="text-white hover:text-gray-200 transition-colors"
            >
              Räder
            </button>
            <button 
              onClick={() => window.location.href = '/angebote'}
              className="text-white hover:text-gray-200 transition-colors"
            >
              Angebote
            </button>
            <button 
              onClick={() => window.location.href = '/kontakt'}
              className="text-white hover:text-gray-200 transition-colors"
            >
              Kontakt
            </button>
          </nav>

          {/* Icons */}
          <div className="flex items-center space-x-6">
            <button className="md:hidden text-[#00FF00] hover:text-[#00DD00] transition-colors drop-shadow-[0_0_8px_rgba(0,255,0,0.5)]">
              <FaSearch size={20} />
            </button>
            <button className="text-white hover:text-gray-200 transition-colors">
              <FaUser size={20} />
            </button>
            <CartIcon />
            {/* Mobile Menu Button */}
            <button 
              className="md:hidden text-white hover:text-gray-200 transition-colors"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              <FaBars size={24} />
            </button>
          </div>
        </div>
      </div>

      {/* Dropdown Menu - Popular Brands */}
      <div className="bg-gray-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex space-x-8 py-3 text-sm overflow-x-auto scrollbar-hide">
            {uniqueBrands.map(brand => (
              <button
                key={brand}
                onClick={() => handleBrandClick(brand)}
                className="text-gray-200 hover:text-white transition-colors whitespace-nowrap"
              >
                {brand}
              </button>
            ))}
            <button
              onClick={() => window.location.href = '/models'}
              className="text-gray-200 hover:text-white transition-colors font-semibold whitespace-nowrap"
            >
              Alle Marken →
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-gray-700 text-white py-4">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <nav className="flex flex-col space-y-3">
              <button 
                onClick={() => {
                  window.location.href = '/'
                  setMobileMenuOpen(false)
                }}
                className="text-left py-2 hover:text-gray-300 transition-colors"
              >
                Startpage
              </button>
              <button 
                onClick={() => {
                  window.location.href = '/models/BMW'
                  setMobileMenuOpen(false)
                }}
                className="text-left py-2 hover:text-gray-300 transition-colors"
              >
                Reifen
              </button>
              <button 
                onClick={() => {
                  window.location.href = '/models/BMW'
                  setMobileMenuOpen(false)
                }}
                className="text-left py-2 hover:text-gray-300 transition-colors"
              >
                Räder
              </button>
              <button 
                onClick={() => {
                  window.location.href = '/angebote'
                  setMobileMenuOpen(false)
                }}
                className="text-left py-2 hover:text-gray-300 transition-colors"
              >
                Angebote
              </button>
              <button 
                onClick={() => {
                  window.location.href = '/kontakt'
                  setMobileMenuOpen(false)
                }}
                className="text-left py-2 hover:text-gray-300 transition-colors"
              >
                Kontakt
              </button>
            </nav>
          </div>
        </div>
      )}
    </header>
  )
}
