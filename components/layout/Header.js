import { useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const router = useRouter()

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      {/* Top Bar with Contact Info */}
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

      {/* Main Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex flex-col items-start group">
            <span className="text-2xl font-black text-[#004aad] font-['Racing_Sans_One'] group-hover:text-orange-500 transition-colors">
              ORIGINAL
            </span>
            <span className="text-xl font-black text-gray-800 font-['Racing_Sans_One'] -mt-2">
              RÄDER
            </span>
          </Link>

          {/* Search Bar */}
          <div className="hidden md:flex flex-1 max-w-lg mx-8">
            <div className="relative w-full">
              <input
                type="text"
                placeholder="Suche nach Felgen, Reifen oder Marke..."
                className="w-full px-4 py-2 border-2 border-gray-200 rounded-lg focus:border-[#004aad] focus:outline-none"
              />
              <button className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-[#004aad] text-white px-4 py-1 rounded-lg hover:bg-orange-500 transition-colors">
                Suche
              </button>
            </div>
          </div>

          {/* Right Icons */}
          <div className="flex items-center space-x-4">
            {/* Language Selector */}
            <div className="hidden lg:flex items-center space-x-1 cursor-pointer group">
              <span className="text-gray-700 group-hover:text-[#004aad] transition-colors">Deutsch</span>
              <svg className="w-4 h-4 text-gray-500 group-hover:text-[#004aad]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
              </svg>
            </div>

            {/* Contact */}
            <Link href="/contact" className="hidden lg:flex items-center space-x-1 text-gray-700 hover:text-[#004aad] transition-colors group">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
              </svg>
              <span>Kontakt</span>
            </Link>

            {/* Wishlist */}
            <Link href="/wishlist" className="flex items-center space-x-1 text-gray-700 hover:text-[#004aad] transition-colors group relative">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path>
              </svg>
              <span className="hidden sm:inline">Merkliste</span>
              <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">0</span>
            </Link>

            {/* Cart */}
            <Link href="/cart" className="flex items-center space-x-1 text-gray-700 hover:text-[#004aad] transition-colors group relative">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"></path>
              </svg>
              <span className="hidden sm:inline">Warenkorb</span>
              <span className="absolute -top-2 -right-2 bg-[#004aad] text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">0</span>
            </Link>

            {/* Menu Button */}
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden flex items-center space-x-1 text-gray-700 hover:text-[#004aad] transition-colors"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
              </svg>
              <span>Menü</span>
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
              <Link href="/cart" className="text-gray-700 hover:text-[#004aad] py-2">Warenkorb</Link>
              <div className="pt-2 border-t border-gray-200">
                <a href="mailto:info@or24.de" className="block text-gray-600 hover:text-[#004aad] py-1">info@or24.de</a>
                <a href="tel:+4938316677110" className="block text-gray-600 hover:text-[#004aad] py-1">+49 3831 66-77-110</a>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Category Bar */}
      <div className="bg-gray-50 border-t border-gray-200 py-2">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-center space-x-8 text-sm">
            <span className="font-semibold text-[#004aad]">ORIGINAL FELGEN & RÄDER</span>
            <span className="text-gray-600 hidden md:inline">Sommerreifen</span>
            <span className="text-gray-600 hidden md:inline">Winterreifen</span>
            <span className="text-gray-600 hidden md:inline">Ganzjahresreifen</span>
            <span className="text-gray-600 hidden md:inline">Kompletträder</span>
          </div>
        </div>
      </div>
    </header>
  )
}
