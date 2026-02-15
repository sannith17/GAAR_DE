import Link from 'next/link'
import { useRouter } from 'next/router'
import { FaShoppingCart, FaUser, FaSearch } from 'react-icons/fa'
import CartIcon from '../cart/CartIcon'

export default function Header() {
  const router = useRouter()

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="container-custom">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="text-4xl font-black text-[#004aad] tracking-tighter hover:opacity-90 transition-opacity">
            GAAR
          </Link>

          {/* Navigation */}
          <nav className="hidden md:flex space-x-8">
            <Link href="/" className={`text-gray-600 hover:text-[#004aad] transition-colors ${router.pathname === '/' ? 'text-[#004aad] font-semibold' : ''}`}>
              Startseite
            </Link>
            <Link href="/models/Swift" className="text-gray-600 hover:text-[#004aad] transition-colors">
              Reifen
            </Link>
            <Link href="/models/Swift" className="text-gray-600 hover:text-[#004aad] transition-colors">
              Räder
            </Link>
            <Link href="/" className="text-gray-600 hover:text-[#004aad] transition-colors">
              Angebote
            </Link>
            <Link href="/" className="text-gray-600 hover:text-[#004aad] transition-colors">
              Kontakt
            </Link>
          </nav>

          {/* Icons */}
          <div className="flex items-center space-x-6">
            <button className="text-gray-600 hover:text-[#004aad] transition-colors">
              <FaSearch size={20} />
            </button>
            <button className="text-gray-600 hover:text-[#004aad] transition-colors">
              <FaUser size={20} />
            </button>
            <CartIcon />
          </div>
        </div>
      </div>

      {/* Dropdown Menu */}
      <div className="bg-gray-700 text-white">
        <div className="container-custom">
          <div className="flex space-x-8 py-3 text-sm">
            <Link href="/models/Swift" className="hover:text-gray-300 transition-colors">
              Sommerreifen
            </Link>
            <Link href="/models/Swift" className="hover:text-gray-300 transition-colors">
              Winterreifen
            </Link>
            <Link href="/models/Swift" className="hover:text-gray-300 transition-colors">
              Ganzjahresreifen
            </Link>
            <Link href="/models/Swift" className="hover:text-gray-300 transition-colors">
              Kompletträder
            </Link>
            <Link href="/models/Swift" className="hover:text-gray-300 transition-colors">
              Felgen
            </Link>
          </div>
        </div>
      </div>
    </header>
  )
}
