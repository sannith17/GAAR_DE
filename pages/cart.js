import { useCart } from '../context/CartContext'
import Image from 'next/image'
import Link from 'next/link'
import { FaTrash, FaArrowLeft, FaShieldAlt, FaTruck, FaMoneyBillWave, FaShoppingCart } from 'react-icons/fa'
import { playClickSound } from '../utils/sound'
import { useState } from 'react'

export default function Cart() {
  const { cart, removeFromCart, updateQuantity, clearCart } = useCart()
  const [promoCode, setPromoCode] = useState('')
  const [promoApplied, setPromoApplied] = useState(false)

  const handleQuantityChange = (id, newQuantity) => {
    playClickSound()
    updateQuantity(id, parseInt(newQuantity))
  }

  const handleRemove = (id) => {
    playClickSound()
    removeFromCart(id)
  }

  const handleApplyPromo = () => {
    if (promoCode.toUpperCase() === 'GAAR10') {
      setPromoApplied(true)
      playClickSound()
    }
  }

  // Calculate totals
  const subtotal = cart.total
  const shipping = 4.90
  const discount = promoApplied ? subtotal * 0.1 : 0
  const total = subtotal + shipping - discount

  if (cart.items.length === 0) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-3xl shadow-2xl p-12 text-center">
            {/* Empty Cart Animation */}
            <div className="relative w-32 h-32 mx-auto mb-8">
              <div className="absolute inset-0 bg-gradient-to-r from-[#004aad]/20 to-gray-400/20 rounded-full animate-ping"></div>
              <div className="relative bg-gradient-to-br from-[#004aad] to-gray-600 rounded-full w-32 h-32 flex items-center justify-center">
                <FaShoppingCart className="text-white text-4xl" />
              </div>
            </div>
            
            <h1 className="text-4xl font-bold text-gray-800 mb-4">Ihr Warenkorb ist leer</h1>
            <p className="text-gray-600 mb-8">Entdecken Sie unsere hochwertigen Reifen und Räder.</p>
            <Link 
              href="/" 
              className="inline-flex items-center gap-2 bg-gradient-to-r from-[#004aad] to-gray-600 
                       text-white px-8 py-4 rounded-xl hover:from-[#003a8a] hover:to-gray-700 
                       transition-all transform hover:-translate-y-1 shadow-lg hover:shadow-xl
                       font-semibold text-lg group"
            >
              <FaArrowLeft className="group-hover:-translate-x-1 transition-transform" />
              Weiter einkaufen
            </Link>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-50 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header with Gold Cart Icon */}
        <div className="flex items-center justify-between mb-12">
          <div className="flex items-center gap-4">
            <h1 className="text-4xl font-bold bg-gradient-to-r from-[#004aad] to-gray-600 bg-clip-text text-transparent">
              Ihr Warenkorb
            </h1>
            <div className="relative">
              <FaShoppingCart className="text-[#FFD700] text-3xl drop-shadow-[0_0_10px_rgba(255,215,0,0.5)]" />
              <span className="absolute -top-2 -right-2 bg-[#FFD700] text-[#004aad] text-xs w-5 h-5 
                             rounded-full flex items-center justify-center font-bold">
                {cart.items.length}
              </span>
            </div>
          </div>
          
          <button 
            onClick={clearCart}
            className="text-gray-500 hover:text-red-500 transition-colors flex items-center gap-2 
                     bg-white px-4 py-2 rounded-xl shadow-sm hover:shadow-md"
          >
            <FaTrash size={16} />
            Warenkorb leeren
          </button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Cart Items - Left Column */}
          <div className="lg:col-span-2 space-y-4">
            {cart.items.map((item, index) => (
              <div 
                key={item.id} 
                className="bg-white rounded-2xl shadow-lg hover:shadow-2xl 
                         transition-all duration-300 hover:-translate-y-1 p-6
                         animate-fadeInUp"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex flex-col sm:flex-row gap-6">
                  {/* Product Image */}
                  <div className="relative w-full sm:w-32 h-32 bg-gray-100 rounded-xl overflow-hidden shadow-inner">
                    <Image
                      src={item.image || 'https://via.placeholder.com/400x300?text=Reifen'}
                      alt={item.tyreBrand}
                      fill
                      className="object-cover hover:scale-110 transition-transform duration-500"
                    />
                  </div>

                  {/* Product Details */}
                  <div className="flex-grow">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                      <div>
                        <h3 className="text-xl font-bold text-gray-800">{item.tyreBrand}</h3>
                        <p className="text-gray-600 text-sm mt-1">{item.brand} {item.model} ({item.year})</p>
                        <p className="text-gray-500 text-sm">{item.size}</p>
                      </div>
                      
                      {/* Price with Gold Accent */}
                      <div className="text-right">
                        <span className="text-3xl font-bold text-[#FFD700] drop-shadow-lg">
                          €{item.sellingPrice.toLocaleString('de-DE')}
                        </span>
                      </div>
                    </div>

                    {/* Actions */}
                    <div className="flex items-center justify-between mt-4 pt-4 border-t border-gray-200">
                      <div className="flex items-center gap-3">
                        <label className="text-sm text-gray-600">Menge:</label>
                        <select 
                          value={item.quantity}
                          onChange={(e) => handleQuantityChange(item.id, e.target.value)}
                          className="bg-gray-50 border border-gray-300 rounded-lg px-3 py-2 
                                   focus:outline-none focus:ring-2 focus:ring-[#004aad] 
                                   focus:border-transparent hover:border-[#004aad] transition-colors"
                        >
                          {[1,2,3,4,5].map(num => (
                            <option key={num} value={num}>{num}</option>
                          ))}
                        </select>
                      </div>
                      
                      <button 
                        onClick={() => handleRemove(item.id)}
                        className="text-gray-400 hover:text-red-500 transition-all 
                                 hover:scale-110 transform flex items-center gap-1
                                 bg-white px-3 py-1 rounded-lg shadow-sm hover:shadow-md"
                      >
                        <FaTrash size={14} />
                        <span className="text-sm">Entfernen</span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Order Summary - Right Column */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-2xl shadow-xl p-6 sticky top-24 hover:shadow-2xl transition-shadow">
              
              <h2 className="text-2xl font-bold mb-6 bg-gradient-to-r from-[#004aad] to-gray-600 
                           bg-clip-text text-transparent">
                Bestellübersicht
              </h2>

              {/* Promo Code */}
              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Gutscheincode
                </label>
                <div className="flex gap-2">
                  <input
                    type="text"
                    placeholder="z.B. GAAR10"
                    value={promoCode}
                    onChange={(e) => setPromoCode(e.target.value)}
                    className="flex-1 min-w-
