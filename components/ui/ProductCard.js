import Image from 'next/image'
import { useState } from 'react'
import { FaStar, FaRegStar, FaStarHalfAlt, FaImage } from 'react-icons/fa'
import { useCart } from '../../context/CartContext'
import Toast from './Toast'
import { playClickSound } from '../../utils/sound'

export default function ProductCard({ product }) {
  const { addToCart } = useCart()
  const [showToast, setShowToast] = useState(false)
  const [imgError, setImgError] = useState(false)

  const handleAddToCart = () => {
    playClickSound()
    addToCart(product)
    setShowToast(true)
    setTimeout(() => setShowToast(false), 3000)
  }

  const renderRating = (rating) => {
    const stars = []
    const fullStars = Math.floor(rating)
    const hasHalfStar = rating % 1 >= 0.5

    for (let i = 0; i < 5; i++) {
      if (i < fullStars) {
        stars.push(<FaStar key={i} className="text-yellow-400" />)
      } else if (i === fullStars && hasHalfStar) {
        stars.push(<FaStarHalfAlt key={i} className="text-yellow-400" />)
      } else {
        stars.push(<FaRegStar key={i} className="text-yellow-400" />)
      }
    }
    return stars
  }

  // Fallback image based on tyre brand
  const getFallbackImage = () => {
    const brand = product.tyreBrand.toLowerCase()
    if (brand.includes('michelin')) {
      return 'https://www.michelin.de/static/images/michelin-logo.svg'
    } else if (brand.includes('pirelli')) {
      return 'https://www.pirelli.com/static/images/logo-pirelli.svg'
    } else if (brand.includes('continental')) {
      return 'https://www.continental.com/static/images/logo-continental.svg'
    } else if (brand.includes('goodyear')) {
      return 'https://www.goodyear.com/static/images/logo-goodyear.svg'
    } else if (brand.includes('bridgestone')) {
      return 'https://www.bridgestone.com/static/images/logo-bridgestone.svg'
    } else if (brand.includes('hankook')) {
      return 'https://www.hankooktire.com/static/images/logo-hankook.svg'
    } else {
      return 'https://via.placeholder.com/400x300?text=Reifen'
    }
  }

  return (
    <>
      <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 overflow-hidden group">
        {/* Product Image with Fallback */}
        <div className="relative h-48 bg-gradient-to-br from-gray-100 to-gray-200 overflow-hidden flex items-center justify-center">
          {!imgError ? (
            <Image
              src={product.image}
              alt={`${product.tyreBrand} Reifen`}
              fill
              className="object-contain p-4 group-hover:scale-110 transition-transform duration-500"
              onError={() => setImgError(true)}
              unoptimized={true}
            />
          ) : (
            <div className="w-full h-full flex flex-col items-center justify-center text-gray-400">
              <FaImage size={48} className="mb-2 opacity-50" />
              <span className="text-sm font-medium">{product.tyreBrand}</span>
            </div>
          )}
          
          {/* Year Badge */}
          {product.year && (
            <div className="absolute top-2 right-2 bg-[#004aad] text-white text-xs px-2 py-1 rounded-full shadow-lg">
              {product.year}
            </div>
          )}
        </div>
        
        <div className="p-5">
          {/* Title and Rating */}
          <div className="flex items-start justify-between mb-2">
            <div>
              <h3 className="font-bold text-lg text-gray-800">{product.tyreBrand}</h3>
              <p className="text-xs text-gray-500">{product.brand} {product.model}</p>
            </div>
            <div className="flex items-center space-x-1">
              {renderRating(product.rating)}
            </div>
          </div>
          
          {/* Product Details */}
          <div className="space-y-1 mb-3">
            <p className="text-sm text-gray-600">
              <span className="font-medium">Größe:</span> {product.size}
            </p>
            <p className="text-sm text-gray-600">
              <span className="font-medium">Lastindex:</span> {product.loadIndex}
            </p>
            <p className="text-sm text-gray-600">
              <span className="font-medium">Serie:</span> {product.serialNo}
            </p>
          </div>
          
          {/* Price and Add to Cart */}
          <div className="flex items-center justify-between mt-4 pt-4 border-t border-gray-200">
            <div>
              <span className="text-2xl font-bold text-[#FFD700] drop-shadow-md">
                €{product.sellingPrice.toLocaleString('de-DE')}
              </span>
              {product.originalPrice > product.sellingPrice && (
                <span className="text-sm text-gray-500 line-through ml-2">
                  €{product.originalPrice.toLocaleString('de-DE')}
                </span>
              )}
            </div>
            
            <button
              onClick={handleAddToCart}
              className="bg-gradient-to-r from-[#004aad] to-gray-600 text-white px-4 py-2 rounded-lg 
                       hover:from-[#003a8a] hover:to-gray-700 transition-all transform hover:scale-105 
                       text-sm font-semibold shadow-md hover:shadow-xl"
            >
              In den Warenkorb
            </button>
          </div>
        </div>
      </div>

      {showToast && (
        <Toast message={`${product.tyreBrand} wurde in den Warenkorb gelegt`} />
      )}
    </>
  )
}
