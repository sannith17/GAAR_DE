import { useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const router = useRouter()

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      {/* Top Bar with Ratings - exactly as in pic 2 */}
      <div className="bg-gray-100 py-2 text-sm border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-4">
              <span className="text-gray-600">⭐ 17.610 Bewertungen (Sehr Gut 4,8)</span>
              <span className="text-gray-600 hidden md:inline">100% Originale Felgen</span>
              <span className="text-gray-600 hidden lg:inline">Versand aus Deutschland</span>
            </div>
            <div className="flex items-center space-x-3">
              <a href="mailto:info@or24.de" className="text-gray-600 hover:text-[#004aad] transition-colors hidden sm:inline">
                info@or24.de
              </a>
              <a href="tel:+4938316677110" className="text-gray-600 hover:text-[#004aad] transition-colors">
                +49 3831 66-77-110
              </a>
              <a href="#" className="bg-green-500 text-white px-3 py-1 rounded-lg text-sm hover:bg-green-600 transition-colors hidden md:inline">
                WhatsApp
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Main Header - KEEP EXACT GAAR DESIGN from pic 2 */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="flex items-center justify-between">
          {/* GAAR Logo - exactly as in pic 2 */}
          <Link href="/" className="flex flex-col items-start group">
            <span className="text-5xl md:text-7xl font-black font-['Racing_Sans_One'] text-[#004aad] drop-shadow-lg">
              GAAR
            </span>
            <span className="text-sm md:text-base tracking-widest font-['Racing_Sans_One'] text-gray-600 -mt-2">
              RÄDER UND REIFEN
            </span>
          </Link>

          {/* Search Bar - exactly as in pic 2 */}
          <div className="hidden md:flex flex-1 max-w-md mx-8">
            <div className="relative w-full">
              <input
                type="text"
                placeholder="Reifen suchen..."
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:border-[#004aad] focus:outline-none"
              />
              <button className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-[#004aad]">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
                </svg>
              </button>
            </div>
          </div>

          {/* ICONS ONLY - Contact, Wishlist, Menu (as requested) */}
          <div className="flex items-center space-x-5">
            {/* Contact Icon */}
            <Link href="/contact" className="text-gray-700 hover:text-[#004aad] transition-colors">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
              </svg>
            </Link>

            {/* Wishlist Icon */}
            <Link href="/wishlist" className="text-gray-700 hover:text-[#004aad] transition-colors relative">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path>
              </svg>
              <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs w-4 h-4 rounded-full flex items-center justify-center">0</span>
            </Link>

            {/* Menu Icon */}
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700 hover:text-[#004aad] transition-colors lg:hidden"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="lg:hidden bg-white border-t border-gray-200 py-4">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col space-y-3">
              <Link href="/contact" className="text-gray-700 hover:text-[#004aad] py-2">Kontakt</Link>
              <Link href="/wishlist" className="text-gray-700 hover:text-[#004aad] py-2">Merkliste</Link>
              <Link href="/angebote" className="text-gray-700 hover:text-[#004aad] py-2">Angebote</Link>
            </div>
          </div>
        </div>
      )}

      {/* Navigation Menu - exactly as in pic 2 */}
      <div className="border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between py-3">
            <nav className="flex items-center space-x-8 text-sm font-medium">
              <Link href="/" className="text-gray-700 hover:text-[#004aad] transition-colors">Startpage</Link>
              <Link href="/reifen" className="text-gray-700 hover:text-[#004aad] transition-colors">Reifen</Link>
              <Link href="/rader" className="text-gray-700 hover:text-[#004aad] transition-colors">Räder</Link>
              <Link href="/angebote" className="text-gray-700 hover:text-[#004aad] transition-colors">Angebote</Link>
              <Link href="/kontakt" className="text-gray-700 hover:text-[#004aad] transition-colors">Kontakt</Link>
            </nav>
            
            {/* Brand Links - exactly as in pic 2 */}
            <div className="flex items-center space-x-4 text-sm">
              <Link href="/brand/audi" className="text-gray-600 hover:text-[#004aad]">Audi</Link>
              <Link href="/brand/bmw" className="text-gray-600 hover:text-[#004aad]">BMW</Link>
              <Link href="/brand/mercedes" className="text-gray-600 hover:text-[#004aad]">Mercedes</Link>
              <Link href="/brand/porsche" className="text-gray-600 hover:text-[#004aad]">Porsche</Link>
              <Link href="/brand/volvo" className="text-gray-600 hover:text-[#004aad]">Volvo</Link>
              <Link href="/alle-marken" className="text-[#004aad] font-semibold hover:text-orange-500 transition-colors">
                Alle Marken →
              </Link>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}
